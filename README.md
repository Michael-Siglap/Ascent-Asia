# Ascent Asia Redesign

A modern website for Ascent Asia Advisory, facilitating business internationalization into Singapore and Southeast Asia.

## Getting Started with Bun

This project uses [Bun](https://bun.sh) as the JavaScript runtime and package manager.

### Installing Bun

If you don't have Bun installed, you can install it with:

\`\`\`bash
# For macOS, Linux, and WSL
curl -fsSL https://bun.sh/install | bash

# For Windows (using PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
\`\`\`

### Installing Dependencies

To install the project dependencies:

\`\`\`bash
bun install
\`\`\`

### Development Server

To start the development server:

\`\`\`bash
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To build the application for production:

\`\`\`bash
bun run build
\`\`\`

### Starting Production Server

To start the production server:

\`\`\`bash
bun start
\`\`\`

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `public/` - Static assets like images
- `styles/` - Global CSS and styling utilities

## Features

- Modern, responsive design
- Dark mode support
- Animated UI elements
- Partner banner showcasing affiliated websites
\`\`\`

Let's also create a simple .gitignore file:

```text file=".gitignore"
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# bun
bun.lockb
