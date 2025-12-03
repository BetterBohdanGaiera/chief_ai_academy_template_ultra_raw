#!/bin/bash

# Database Initialization Script
# Creates D1 database if not exists, runs migrations, and updates wrangler.toml
#
# Usage:
#   ./scripts/init-database.sh [database-name]
#   ./scripts/init-database.sh                    # Uses default: presentation-feedback
#   ./scripts/init-database.sh my-workshop-db     # Custom database name

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print colored output
print_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
print_success() { echo -e "${GREEN}[SUCCESS]${NC} $1"; }
print_warning() { echo -e "${YELLOW}[WARNING]${NC} $1"; }
print_error() { echo -e "${RED}[ERROR]${NC} $1"; }

# Get database name from argument or use default
DATABASE_NAME="${1:-presentation-feedback}"

echo ""
echo "==========================================="
echo "   Database Initialization"
echo "==========================================="
echo ""
print_info "Database name: $DATABASE_NAME"
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    print_error "Wrangler CLI not found. Install with: pnpm add -D wrangler"
    exit 1
fi

# Check if authenticated
if ! wrangler whoami &> /dev/null; then
    print_warning "Not authenticated with Cloudflare. Running 'wrangler login'..."
    wrangler login
fi

# Check if database exists
print_info "Checking if database '$DATABASE_NAME' exists..."
DB_EXISTS=$(wrangler d1 list --json 2>/dev/null | grep -c "\"name\":\"$DATABASE_NAME\"" || true)

if [ "$DB_EXISTS" -eq "0" ]; then
    print_info "Database doesn't exist. Creating '$DATABASE_NAME'..."
    wrangler d1 create "$DATABASE_NAME"
    print_success "Database created!"
else
    print_info "Database '$DATABASE_NAME' already exists."
fi

# Get database ID
print_info "Getting database ID..."
DB_ID=$(wrangler d1 list --json | grep -A1 "\"name\":\"$DATABASE_NAME\"" | grep "uuid" | sed 's/.*"uuid":"\([^"]*\)".*/\1/' || true)

if [ -z "$DB_ID" ]; then
    # Alternative method using jq if available
    if command -v jq &> /dev/null; then
        DB_ID=$(wrangler d1 list --json | jq -r ".[] | select(.name==\"$DATABASE_NAME\") | .uuid")
    fi
fi

if [ -z "$DB_ID" ]; then
    print_error "Could not retrieve database ID. Please check database creation."
    exit 1
fi

print_info "Database ID: $DB_ID"

# Update wrangler.toml with database ID
print_info "Updating wrangler.toml..."
if [ -f "wrangler.toml" ]; then
    # Update database_id
    if grep -q "database_id = " wrangler.toml; then
        sed -i.bak "s/database_id = \"[^\"]*\"/database_id = \"$DB_ID\"/" wrangler.toml
        rm -f wrangler.toml.bak
        print_success "Updated database_id in wrangler.toml"
    else
        print_warning "database_id not found in wrangler.toml. Please add manually."
    fi

    # Update database_name if different
    if grep -q "database_name = " wrangler.toml; then
        sed -i.bak "s/database_name = \"[^\"]*\"/database_name = \"$DATABASE_NAME\"/" wrangler.toml
        rm -f wrangler.toml.bak
        print_success "Updated database_name in wrangler.toml"
    fi
else
    print_error "wrangler.toml not found!"
    exit 1
fi

# Run migrations
print_info "Running migrations..."

# Check if migration files exist
if [ -f "migrations/0001_create_feedback_table.sql" ]; then
    print_info "Running migration 0001_create_feedback_table.sql..."
    wrangler d1 execute "$DATABASE_NAME" --remote --file=migrations/0001_create_feedback_table.sql 2>/dev/null || {
        print_warning "Migration 0001 may have already been applied (table exists)."
    }
fi

if [ -f "migrations/0002_add_multi_form_support.sql" ]; then
    print_info "Running migration 0002_add_multi_form_support.sql..."
    wrangler d1 execute "$DATABASE_NAME" --remote --file=migrations/0002_add_multi_form_support.sql 2>/dev/null || {
        print_warning "Migration 0002 may have already been applied (columns exist)."
    }
fi

echo ""
print_success "Database initialization complete!"
echo ""
echo "Database Name: $DATABASE_NAME"
echo "Database ID:   $DB_ID"
echo ""
echo "You can now deploy with: pnpm deploy"
echo ""
