#!/bin/bash

###############################################################################
# Batch Image Generation Script for Presentation
#
# This script generates a complete set of images for all common slide types
# using the AI image generation system with design system integration.
#
# Usage:
#   bash scripts/generate-presentation-images.sh
#
# The script will generate:
# - Hero images for title slides (3 variations)
# - Concept illustrations for AI/transformation themes (4 variations)
# - Data visualization backgrounds (2 variations)
# - Abstract backgrounds (2 variations)
#
# All images will be saved to public/generated-images/ with metadata.
###############################################################################

set -e  # Exit on error

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  BATCH IMAGE GENERATION FOR PRESENTATION                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "This will generate a complete set of design-consistent images"
echo "for your presentation using predefined templates."
echo ""

# Check if GEMINI_API_KEY is set
if [ -z "$GEMINI_API_KEY" ]; then
  if [ ! -f .env ]; then
    echo "❌ Error: .env file not found and GEMINI_API_KEY not set"
    echo "Please create a .env file with GEMINI_API_KEY=your_key"
    exit 1
  fi
  echo "✓ Loading environment from .env"
  export $(cat .env | grep -v '^#' | xargs)
fi

# Confirm before proceeding
read -p "Generate all images? This will make multiple API calls. (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Cancelled."
  exit 0
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "GENERATING HERO IMAGES (3 variations)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "1. Bold Hero - High-impact transformation theme"
tsx generate-image.ts "Executive AI Transformation" --template hero-bold --ratio 16:9 --count 1

echo ""
echo "2. Subtle Hero - Refined professional aesthetic"
tsx generate-image.ts "Strategic AI Implementation" --template hero-subtle --ratio 16:9 --count 1

echo ""
echo "3. Dynamic Hero - Forward-looking innovation"
tsx generate-image.ts "Future of Business Intelligence" --template hero-dynamic --ratio 16:9 --count 1

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "GENERATING CONCEPT ILLUSTRATIONS (4 variations)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "4. AI Concept - Neural networks and machine learning"
tsx generate-image.ts "Artificial Intelligence Framework" --template concept-ai --ratio 16:9 --count 1

echo ""
echo "5. Transformation Concept - Organizational change"
tsx generate-image.ts "Digital Business Transformation" --template concept-transformation --ratio 3:2 --count 1

echo ""
echo "6. Strategy Concept - Planning and frameworks"
tsx generate-image.ts "Enterprise AI Strategy" --template concept-strategy --ratio 4:3 --count 1

echo ""
echo "7. Innovation Concept - Creative breakthroughs"
tsx generate-image.ts "Innovation and Competitive Advantage" --template concept-innovation --ratio 16:9 --count 1

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "GENERATING DATA VISUALIZATION BACKGROUNDS (2 variations)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "8. Grid Background - For charts and tables"
tsx generate-image.ts --template dataviz-grid --ratio 16:9 --count 1

echo ""
echo "9. Gradient Background - For analytics slides"
tsx generate-image.ts --template dataviz-gradient --ratio 16:9 --count 1

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "GENERATING ABSTRACT BACKGROUNDS (2 variations)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

echo "10. Dot Matrix - Versatile content background"
tsx generate-image.ts --template background-dots --ratio 16:9 --count 1

echo ""
echo "11. Geometric Abstract - Modern slide background"
tsx generate-image.ts --template background-geometric --ratio 16:9 --count 1

echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║  BATCH GENERATION COMPLETE                                 ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "✅ Successfully generated 11 images across all template categories"
echo ""
echo "📁 Location: public/generated-images/"
echo "📄 Metadata: Check *-metadata.json files for generation details"
echo ""
echo "💡 Next Steps:"
echo "   1. Review generated images in public/generated-images/"
echo "   2. Check metadata JSON files for prompt details"
echo "   3. Use images in your presentation slides"
echo "   4. Regenerate specific images if needed with different prompts"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
