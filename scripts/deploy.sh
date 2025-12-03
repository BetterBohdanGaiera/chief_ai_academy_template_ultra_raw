#!/bin/bash

# One-Command Deployment Script
# Automatically detects available deployment tools and deploys to the best option

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

# Parse command line arguments
CUSTOM_NAME=""
PROVIDER=""
SKIP_DB_INIT=""
DB_NAME=""
while [[ $# -gt 0 ]]; do
    case $1 in
        --name=*)
            CUSTOM_NAME="${1#*=}"
            shift
            ;;
        --name)
            CUSTOM_NAME="$2"
            shift 2
            ;;
        --skip-db-init)
            SKIP_DB_INIT="true"
            shift
            ;;
        --db-name=*)
            DB_NAME="${1#*=}"
            shift
            ;;
        --db-name)
            DB_NAME="$2"
            shift 2
            ;;
        --)
            # Skip the -- separator
            shift
            ;;
        -*)
            # Skip unknown flags
            shift
            ;;
        *)
            # First non-flag argument is the provider
            if [ -z "$PROVIDER" ]; then
                PROVIDER="$1"
            fi
            shift
            ;;
    esac
done
PROVIDER="${PROVIDER:-auto}"
DB_NAME="${DB_NAME:-presentation-feedback}"

# Check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if wrangler is authenticated
check_wrangler_auth() {
    if wrangler whoami >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Check if netlify is authenticated
check_netlify_auth() {
    if netlify status >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Check if vercel is authenticated
check_vercel_auth() {
    if vercel whoami >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Initialize database (if not skipped)
init_database() {
    if [ "$SKIP_DB_INIT" = "true" ]; then
        print_info "Skipping database initialization (--skip-db-init)"
        return 0
    fi

    if [ -f "scripts/init-database.sh" ]; then
        print_info "Initializing database: $DB_NAME"
        bash scripts/init-database.sh "$DB_NAME"
    else
        print_warning "Database initialization script not found. Skipping."
    fi
}

# Build the project
build_project() {
    print_info "Building the project..."
    pnpm run build
    print_success "Build completed!"
}

# Deploy to Cloudflare Pages (recommended)
deploy_cloudflare() {
    print_info "Deploying to Cloudflare Pages..."

    if ! check_wrangler_auth; then
        print_warning "Not authenticated with Cloudflare. Running 'wrangler login'..."
        wrangler login
    fi

    # Initialize database before deployment
    init_database

    # Use custom name if provided, otherwise generate from directory name
    if [ -n "$CUSTOM_NAME" ]; then
        PROJECT_NAME=$(echo "$CUSTOM_NAME" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g')
    else
        PROJECT_NAME=$(basename "$(pwd)" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g')
    fi

    print_info "Project name: $PROJECT_NAME"

    # Check if project exists, create if not
    if ! wrangler pages project list 2>/dev/null | grep -q "^$PROJECT_NAME$"; then
        print_info "Project doesn't exist. Creating '$PROJECT_NAME'..."
        wrangler pages project create "$PROJECT_NAME" --production-branch=main
    fi

    # Deploy to Cloudflare Pages (--commit-dirty=true allows uncommitted changes)
    OUTPUT=$(wrangler pages deploy out --project-name="$PROJECT_NAME" --commit-dirty=true 2>&1)
    echo "$OUTPUT"

    # Extract the URL from output
    URL=$(echo "$OUTPUT" | grep -oE 'https://[^ ]+\.pages\.dev' | head -1)

    if [ -n "$URL" ]; then
        echo ""
        print_success "Deployment successful!"
        echo ""
        echo -e "${GREEN}Your presentation is live at:${NC}"
        echo -e "${BLUE}$URL${NC}"
        echo ""
    fi
}

# Deploy to Netlify
deploy_netlify() {
    print_info "Deploying to Netlify..."

    if ! check_netlify_auth; then
        print_warning "Not authenticated with Netlify. Running 'netlify login'..."
        netlify login
    fi

    # Deploy to Netlify
    OUTPUT=$(netlify deploy --prod --dir=out 2>&1)
    echo "$OUTPUT"

    # Extract the URL
    URL=$(echo "$OUTPUT" | grep -oE 'https://[^ ]+\.netlify\.app' | head -1)

    if [ -n "$URL" ]; then
        echo ""
        print_success "Deployment successful!"
        echo ""
        echo -e "${GREEN}Your presentation is live at:${NC}"
        echo -e "${BLUE}$URL${NC}"
        echo ""
    fi
}

# Deploy to Surge.sh
deploy_surge() {
    print_info "Deploying to Surge.sh..."

    # Generate a unique domain
    DOMAIN="presentation-$(date +%s).surge.sh"

    # Deploy to Surge
    surge out "$DOMAIN"

    echo ""
    print_success "Deployment successful!"
    echo ""
    echo -e "${GREEN}Your presentation is live at:${NC}"
    echo -e "${BLUE}https://$DOMAIN${NC}"
    echo ""
}

# Deploy to Vercel
deploy_vercel() {
    print_info "Deploying to Vercel..."

    if ! check_vercel_auth; then
        print_warning "Not authenticated with Vercel. Running 'vercel login'..."
        vercel login
    fi

    # Deploy to Vercel
    vercel --prod
}

# Main deployment logic
main() {
    echo ""
    echo "==========================================="
    echo "   One-Command Deployment"
    echo "==========================================="
    echo ""

    # Provider was already parsed from command line arguments

    case "$PROVIDER" in
        cloudflare)
            if ! command_exists wrangler; then
                print_error "Wrangler CLI not found. Install with: pnpm add -D wrangler"
                exit 1
            fi
            build_project
            deploy_cloudflare
            ;;
        netlify)
            if ! command_exists netlify; then
                print_error "Netlify CLI not found. Install with: pnpm add -D netlify-cli"
                exit 1
            fi
            build_project
            deploy_netlify
            ;;
        surge)
            if ! command_exists surge; then
                print_error "Surge CLI not found. Install with: pnpm add -D surge"
                exit 1
            fi
            build_project
            deploy_surge
            ;;
        vercel)
            if ! command_exists vercel; then
                print_error "Vercel CLI not found. Install with: pnpm add -g vercel"
                exit 1
            fi
            deploy_vercel
            ;;
        auto)
            # Auto-detect available tools and use the best one
            print_info "Auto-detecting deployment tools..."

            # Priority: Cloudflare > Netlify > Surge > Vercel
            if command_exists wrangler; then
                print_info "Found Wrangler CLI - using Cloudflare Pages (recommended)"
                build_project
                deploy_cloudflare
            elif command_exists netlify; then
                print_info "Found Netlify CLI - using Netlify"
                build_project
                deploy_netlify
            elif command_exists surge; then
                print_info "Found Surge CLI - using Surge.sh"
                build_project
                deploy_surge
            elif command_exists vercel; then
                print_info "Found Vercel CLI - using Vercel"
                deploy_vercel
            else
                print_error "No deployment CLI found!"
                echo ""
                echo "Install one of the following:"
                echo "  - Cloudflare (recommended): pnpm add -D wrangler"
                echo "  - Netlify: pnpm add -D netlify-cli"
                echo "  - Surge: pnpm add -D surge"
                echo "  - Vercel: npm i -g vercel"
                exit 1
            fi
            ;;
        *)
            print_error "Unknown provider: $PROVIDER"
            echo ""
            echo "Usage: pnpm deploy [provider] [options]"
            echo ""
            echo "Providers:"
            echo "  auto       - Auto-detect best available (default)"
            echo "  cloudflare - Deploy to Cloudflare Pages"
            echo "  netlify    - Deploy to Netlify"
            echo "  surge      - Deploy to Surge.sh"
            echo "  vercel     - Deploy to Vercel"
            echo ""
            echo "Options:"
            echo "  --name=<name>      Custom project name"
            echo "  --db-name=<name>   Custom D1 database name (default: presentation-feedback)"
            echo "  --skip-db-init     Skip database initialization"
            exit 1
            ;;
    esac
}

# Run main function
main "$@"
