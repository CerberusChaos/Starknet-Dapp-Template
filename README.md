# Starknet Dapp Template with Next.js 14+, Tailwind CSS 3, TypeScript, DaisyUI, and Starknet-React

<p align="center">
  <a href="https://www.starknet.io"><img src="https://www.starknet.io/assets/sn_logo_banner.png" alt="starknet banner"></a>
</p>

🚀 This is a Starknet Dapp template built with Next.js, Tailwind CSS, TypeScript, and DaisyUI. Our template focuses on providing an excellent developer experience, integrating the latest technologies and tools, including crucial Starknet-related libraries (@starknet-react/chains, @starknet-react/core, starknet, get-starknet-core). It empowers developers to swiftly construct powerful Starknet Dapps.

### Getting Started

> You can directly use this template on GitHub by clicking the "Use this template" button.

Clone this template and kickstart your Starknet Dapp development:

```
git clone https://github.com/CerberusChaos/Starknet-Dapp-Template.git your-project-name
cd your-project-name
npm install
npm run dev
```

Visit http://localhost:3000 to embark on your development journey.

### Features

- 🔥 Powered by the latest [Next.js](https://nextjs.org) for static site generation
- 🎨 Selective use of [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com) for flexible UI design
- 💅 Optimized style processing: PostCSS, integrated with `styled-jsx`
- 🚀 Enhanced development experience: Integration with [Starknet-React](https://starknet-react.com) for rapid integration of Starknet features
- 🎉 Type checking with [TypeScript](https://www.typescriptlang.org)
- ✅ Strict mode for TypeScript and React 18
- ✏️ Code linting and formatting: ESLint and [Prettier](https://prettier.io)
- 🦊 Git workflow enhancements: Husky and Lint-staged
- 🗂 Comprehensive development tooling: VSCode, Netlify, PostCSS, ESLint, Prettier, TypeScript
- ⚙️ Build optimization: [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🖱️ Easy deployment: Supports one-click deployment to Vercel and Netlify

### Core Advantages

- ☕ Automatic minification of HTML & CSS for improved performance
- 💨 Rapid live reload for increased development efficiency
- ✅ Intelligent cache management for content freshness
- 🌐 Built-in Starknet-React for simplified Dapp development

### Development Philosophy

- Minimalistic code design, focusing on Dapp business logic
- Optimized SEO performance for increased discoverability
- 🚀 Production-ready environment, ensuring reliability and efficiency

### Components

Our template includes the following components for your convenience:

- WalletConnect
- Navbar
- Banner
- Footer
- Meta
- More components available in our [Components](https://github.com/CerberusChaos/Starknet-Dapp-Template/tree/main/src/components/).

### Requirements

- Node.js and npm

### Customization and Configuration

Easily customize based on your requirements:

- `src/styles/global.css`: Your Tailwind CSS customized CSS file
- `utils/AppConfig.ts`: Template configuration file
- `src/pages/index.tsx`: Customize the homepage using the `Base` component
- `src/template/Base.tsx` and `src/templates/*`: Component and template layers
- `src/*`: Atomic components supporting component blocks

### Deployment

One-click production-ready build:

```
npm run build
npm run start
```

### Directory Structure

```
.
├── README.md            # README file, contains the project description and usage guidelines.
├── next.config.js       # Next.js configuration file
├── public               # Public folder for static files.
│   └── assets
│       └── images       # Image files
├── src
│   ├── connectors       # Connectors, used to connect to external services or APIs
│   ├── layout           # Layout component, builds the basic layout of the page
│   ├── utils            # Utilities folder, contains helper functions and tools
│   ├── styles           # PostCSS styles folder, using Tailwind CSS
│   ├── components       # Components folder, contains reusable UI components.
│   ├── templates        # Templates folder, holding page and layout templates
│   └── pages            # Pages folder for Next.js, holds the application's pages
├── tailwind.config.js   # The Tailwind CSS configuration file
└── tsconfig.json        # TypeScript configuration file
```

### Open Source Contributions

We welcome and encourage community contributions to this project. If you encounter issues or have good suggestions, feel free to open an issue.
