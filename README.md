# CV-Next - Professional CV Website

A modern, responsive CV website built with Next.js, featuring automated deployment to GitHub Pages.

## 🚀 Live Site

The site is automatically deployed to GitHub Pages: [https://georgiburnaski.github.io/CV-Next/](https://georgiburnaski.github.io/CV-Next/)

## 📋 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatic theme switching based on user preferences
- **Modern UI/UX**: Built with Tailwind CSS for a clean, professional look
- **Static Site Generation**: Optimized for fast loading and SEO
- **Automatic Deployment**: CI/CD pipeline using GitHub Actions

## 🛠️ Technology Stack

- **Framework**: Next.js 15.5.5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Project Structure

```
CV-Next/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── cv-app/                     # Next.js application
│   ├── src/
│   │   └── app/               # Application pages and components
│   ├── public/                # Static assets
│   │   └── .nojekyll          # Prevents Jekyll processing
│   ├── next.config.ts         # Next.js configuration
│   └── package.json           # Dependencies and scripts
└── out/                       # Build output (generated)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/GeorgiBurnaski/CV-Next.git
cd CV-Next
```

2. Install dependencies:
```bash
cd cv-app
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
cd cv-app
npm run build
```

The static files will be generated in the `out` directory at the repository root.

## 🔄 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Setup Instructions:**

1. **Enable GitHub Pages**:
   - Go to your repository **Settings** → **Pages**
   - Under "Build and deployment":
     - Set **Source** to "GitHub Actions"

2. **Trigger Deployment**:
   - Push changes to the `main` branch
   - Or manually trigger the workflow from the Actions tab

3. **Access Your Site**:
   - Your site will be available at: `https://georgiburnaski.github.io/CV-Next/`
   - Initial deployment may take a few minutes

### Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
- Checks out the code
- Installs dependencies
- Builds the Next.js application
- Uploads the build artifacts
- Deploys to GitHub Pages

The workflow runs on:
- Every push to the `main` branch
- Manual trigger via workflow_dispatch

### Configuration

The site is configured with:
- **Base Path**: `/CV-Next` (for GitHub project pages)
- **Static Export**: Enabled via `output: 'export'`
- **Image Optimization**: Disabled for static hosting
- **Trailing Slash**: Enabled for better GitHub Pages compatibility

To deploy to a custom domain or user/organization page, modify the `basePath` in `cv-app/next.config.ts`.

## 📝 Customization

### Updating Content

The main content is located in:
- `cv-app/src/app/page.tsx` - Main CV content
- `cv-app/src/app/layout.tsx` - Layout and metadata
- `cv-app/public/` - Static assets (icons, images)

### Styling

- Global styles: `cv-app/src/app/globals.css`
- Tailwind configuration: `cv-app/tailwind.config.ts`

## 🔧 Troubleshooting

### Build Fails in GitHub Actions

- Check the Actions tab for detailed error logs
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Site Not Displaying Correctly

- Check that GitHub Pages is enabled in repository settings
- Verify the base path configuration in `next.config.ts`
- Clear browser cache and try again

### 404 Errors for Assets

- Ensure `.nojekyll` file exists in `cv-app/public/`
- Check that assets are in the `public` directory
- Verify base path is correctly applied to all URLs

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Georgi Burnaski**
- GitHub: [@GeorgiBurnaski](https://github.com/GeorgiBurnaski)
- Email: gvburnaski@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!
