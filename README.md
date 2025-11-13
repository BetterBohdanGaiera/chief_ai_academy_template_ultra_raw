# Presentation website slides

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/bohdan-gaieraais-projects/v0-chief-aia-cademy-executive-present)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/t16HrxAY1fW)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/bohdan-gaieraais-projects/v0-chief-aia-cademy-executive-present](https://vercel.com/bohdan-gaieraais-projects/v0-chief-aia-cademy-executive-present)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/t16HrxAY1fW](https://v0.app/chat/t16HrxAY1fW)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## AI Image Generation Workflow

This project includes a powerful AI image generation system using Gemini API with integrated design system for creating presentation-ready imagery.

### Quick Start

```bash
# List available templates
pnpm gen:list

# Generate a hero image
pnpm gen:hero "AI Transformation Strategy"

# Generate a concept illustration
pnpm gen:concept "Digital Innovation Framework"

# View comprehensive guide
cat ai_docs/IMAGE_GENERATION_GUIDE.md
```

### Features

- **16 Predefined Templates**: Hero images, concept illustrations, data viz backgrounds, portraits, and abstract backgrounds
- **Design System Integration**: Automatic application of brand colors (electric orange #FF4D00, neon cyan #00BBFF) and brutalist-minimalist aesthetic
- **Smart Prompt Injection**: Design rules automatically added to prompts with intelligent redundancy detection
- **Validation & Metadata**: Automatic image validation and JSON metadata generation for reproducibility
- **Batch Generation**: Generate complete image sets with `bash scripts/generate-presentation-images.sh`

### Template Categories

- **Hero Images**: Title slides, section dividers (hero-bold, hero-subtle, hero-dynamic)
- **Concept Illustrations**: AI, transformation, strategy, innovation (concept-ai, concept-transformation, etc.)
- **Data Viz Backgrounds**: Chart backgrounds (dataviz-grid, dataviz-gradient, dataviz-texture)
- **Executive Portraits**: Team and individual portraits (portrait-executive, portrait-team)
- **Abstract Backgrounds**: Versatile slide backgrounds (background-dots, background-mesh, background-geometric, background-retro)

### Documentation

📖 **[Complete Image Generation Guide](ai_docs/IMAGE_GENERATION_GUIDE.md)** - Comprehensive workflow documentation including:
- Template selection decision tree
- Best practices for prompt writing
- Integration with slide development
- Troubleshooting guide
- Examples gallery

### Command Examples

```bash
# Basic template usage
tsx generate-image.ts "Your prompt" --template hero-bold --ratio 16:9

# Control design system intensity
tsx generate-image.ts "Your prompt" --style bold

# Generate multiple variations
tsx generate-image.ts "Your prompt" --template concept-ai --count 3

# See template details
tsx generate-image.ts --template-info hero-bold
```

### Environment Setup

Ensure you have `GEMINI_API_KEY` in your `.env` file:

```bash
GEMINI_API_KEY=your_api_key_here
```