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
  - `page.tsx` - Homepage
  - `services/` - Services pages
  - `layout.tsx` - Root layout with providers
- `components/` - Reusable UI components
  - `ui/` - shadcn/ui components
  - `navbar.tsx`, `footer.tsx` - Layout components
  - `animate-in-view.tsx` - Animation component
  - `partner-banner.tsx` - Partner advertisement banner
- `public/` - Static assets like images
  - `images/` - All website images
- `translations/` - Language files for internationalization
  - `en.json` - English translations
  - `zh.json` - Chinese translations
- `i18n/` - Internationalization configuration

## Updating Content

### Text Content

Most text content is stored in translation files located in the `translations/` directory:

1. Open `translations/en.json` for English content or `translations/zh.json` for Chinese content
2. Find the key corresponding to the text you want to update
3. Modify the value while keeping the key the same
4. Save the file and restart the development server to see changes

Example:
\`\`\`json
{
  "hero_title": "Business Internationalization", // Change this value to update the hero title
  "hero_subtitle": "We facilitate successful expansion..." // Change this value to update the subtitle
}
\`\`\`

### Adding New Text

To add new text that needs translation:

1. Add a new key-value pair in `translations/en.json`
2. Add the same key with the translated value in `translations/zh.json`
3. Use the key in your component with the `t()` function: `{t("your_new_key")}`

### Page Content

To update page content that isn't in translation files:

1. Navigate to the page file in the `app/` directory (e.g., `app/page.tsx` for the homepage)
2. Locate the section you want to modify
3. Update the JSX content
4. Save the file to see changes automatically in development

## SEO and Multilingual Support

The website is configured for multilingual SEO, supporting both English and Chinese languages.

### How Multilingual SEO Works

1. Each page has metadata (title, description) in both English and Chinese
2. The site automatically sets the correct language tag in the HTML
3. Search engines are provided with language alternates for each page

### Updating SEO Metadata

To update SEO metadata for a page:

1. Find the `page-metadata.ts` file in the page's directory (or create one if it doesn't exist)
2. Update the title and description for both languages:

\`\`\`typescript
import { getMetadata } from "@/lib/get-metadata"

export function generateMetadata({ params }: { params: { lang?: string } }) {
  const locale = params.lang || "en"
  
  return getMetadata({
    title: {
      en: "Your English Title Here",
      zh: "Your Chinese Title Here"
    },
    description: {
      en: "Your English description here.",
      zh: "Your Chinese description here."
    },
    path: "page-path" // The URL path of the page (without language prefix)
  }, locale)
}
\`\`\`

3. Make sure to create descriptive, keyword-rich titles and descriptions in both languages
4. Keep descriptions under 160 characters for optimal display in search results

## Updating Images

### Replacing Existing Images

1. Prepare your new image (recommended formats: JPG, PNG, WebP)
2. Name your image file with a descriptive name using kebab-case (e.g., `hero-background.jpg`)
3. Place the image in the `public/images/` directory, replacing the existing file if needed
4. If you're using a different filename, update the image reference in the code:
   - Find where the image is used (usually in an `<Image>` component)
   - Update the `src` attribute to point to your new image

Example:
\`\`\`jsx
<Image
  src="/images/your-new-image.jpg" // Update this path
  alt="Description of image"
  width={500}
  height={400}
  className="rounded-lg"
/>
\`\`\`

### Adding New Images

1. Place your new image in the `public/images/` directory
2. Reference the image in your component:

\`\`\`jsx
import Image from "next/image"

// In your component:
<Image
  src="/images/your-new-image.jpg"
  alt="Description of image"
  width={500} // Set appropriate dimensions
  height={400}
  className="rounded-lg" // Add styling as needed
/>
\`\`\`

### Image Optimization

- Next.js automatically optimizes images used with the `<Image>` component
- For best performance:
  - Use modern formats like WebP or AVIF
  - Keep image dimensions appropriate for their display size
  - Use responsive images with the `sizes` prop for different viewports

## Adding New Pages

1. Create a new directory in the `app/` folder for your page (e.g., `app/about/`)
2. Create a `page.tsx` file inside this directory:

\`\`\`tsx
"use client"

import { useState, useEffect } from "react"
import NavBar from "@/components/navbar"
import Footer from "@/components/footer"
import PartnerBanner from "@/components/partner-banner"
import { useLanguage } from "@/components/language-provider"

export default function YourNewPage() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex min-h-screen flex-col">
      <PartnerBanner />
      <NavBar />
      
      {/* Your page content here */}
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold">Your Page Title</h1>
            {/* More content */}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
\`\`\`

3. Add any translations needed in the translation files
4. Update the navigation in `components/navbar.tsx` to include your new page

## Updating Navigation

To add your new page to the navigation:

1. Open `components/navbar.tsx`
2. Add your page to the desktop and mobile navigation sections:

\`\`\`jsx
// In the desktop navigation section:
<motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 500 }}>
  <Link
    href="/your-page-path"
    className="text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400"
  >
    {t("your_page_name")}
  </Link>
</motion.div>

// Also add to the mobile navigation section
\`\`\`

## Deployment Options

This Next.js application can be deployed using various platforms and methods. Here's an overview of the most popular options:

### 1. Vercel (Recommended for Next.js)

[Vercel](https://vercel.com) is the platform built by the creators of Next.js and offers the most seamless deployment experience.

**Features:**
- Zero-configuration deployments
- Automatic preview deployments for PRs
- Built-in analytics and performance monitoring
- Edge functions and global CDN
- Seamless environment variable management

**Deployment Steps:**
1. Connect your GitHub repository to Vercel
2. Configure your project settings
3. Deploy with a single click

### 2. Netlify

[Netlify](https://netlify.com) is another excellent option for deploying Next.js applications.

**Features:**
- Continuous deployment from Git
- Preview deployments
- Form handling
- Serverless functions
- Edge functions

**Deployment Steps:**
1. Connect your GitHub repository to Netlify
2. Set build command to `bun run build` and publish directory to `.next`
3. Configure environment variables
4. Deploy

### 3. AWS Amplify

[AWS Amplify](https://aws.amazon.com/amplify/) provides a set of tools for building and deploying full-stack applications.

**Features:**
- CI/CD workflow
- Testing
- Preview deployments
- Easy integration with other AWS services

**Deployment Steps:**
1. Connect your repository to AWS Amplify
2. Configure build settings
3. Deploy

### 4. Self-Hosted Options

For more control, you can deploy to:

- **Docker**: Containerize your application and deploy to any container orchestration platform
- **Traditional VPS/VM**: Deploy to services like DigitalOcean, Linode, or AWS EC2
- **Kubernetes**: For complex, scalable deployments

## CI/CD with GitHub Actions (Best Practice)

Continuous Integration and Continuous Deployment (CI/CD) via GitHub Actions is the current best practice for maintaining and deploying web applications. This approach automates testing, building, and deployment processes.

### Setting Up GitHub Actions for This Project

1. Create a `.github/workflows` directory in your project
2. Add workflow files for different processes (e.g., testing, linting, deployment)

### Example CI/CD Workflow

Create a file at `.github/workflows/ci-cd.yml`:

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
          
      - name: Install dependencies
        run: bun install
        
      - name: Run linting
        run: bun run lint
        
      - name: Run tests
        run: bun test

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

### Benefits of CI/CD with GitHub Actions

1. **Automated Testing**: Catch bugs before they reach production
2. **Consistent Builds**: Ensure builds are reproducible and consistent
3. **Faster Releases**: Automate the deployment process
4. **Quality Control**: Enforce code quality standards
5. **Collaboration**: Improve team collaboration with automated PR checks

### Environment Management

For managing different environments (development, staging, production):

1. **Environment Variables**: Store environment-specific variables in GitHub Secrets
2. **Branch-Based Deployments**: 
   - `main` branch → Production
   - `staging` branch → Staging environment
   - Feature branches → Preview environments

### Monitoring and Analytics

After deployment, monitor your application using:

1. **Vercel Analytics**: Built-in performance monitoring
2. **Google Analytics**: User behavior tracking
3. **Sentry**: Error tracking and performance monitoring
4. **Datadog or New Relic**: For more comprehensive application monitoring

## Customization

### Styling

- Global styles are in `app/globals.css`
- The site uses Tailwind CSS for styling
- Theme colors can be customized in `tailwind.config.ts`

### Components

- Reusable components are in the `components/` directory
- UI components from shadcn/ui are in `components/ui/`

## Support

This website was built by Silva Node Oy. For technical support and maintenance:

- Visit [Silva Node's website](https://silvanode.com) for services and support options
- Email [support@silvanode.com](mailto:support@silvanode.com) for direct assistance
- When reporting issues, please include:
  - A detailed description of the problem
  - Steps to reproduce the issue
  - Browser and device information
  - Screenshots if applicable

For a fee, Silva Node Oy provides ongoing maintenance, feature development, and technical support for this website.

\`\`\`text file=".gitignore"
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
