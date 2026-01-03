# AI Governance Today

A comprehensive, filterable timeline of global AI governance regulations, policies, and frameworks. This Next.js application provides an interactive interface to explore AI-related laws and regulations from around the world.

## Features

- **Interactive Timeline**: Chronological view of AI governance regulations sorted by date
- **Filterable Content**: Filter regulations by:
  - **Region**: United States, European Union, China, Japan, United Kingdom, France, Canada, International
  - **Industry**: General, Healthcare, Finance, Transportation, Workplace, Media/Consumer Protection, Privacy, R&D, Data Governance
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Status Indicators**: Visual badges showing regulation status (Enacted, Proposed, Adopted, etc.)
- **Substack Integration**: Subscribe to updates directly from the homepage

## Tech Stack

- **Framework**: Next.js 16.0.0 (App Router)
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables for theming
- **Package Manager**: Bun
- **Runtime**: React 19.2.0

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (or Node.js 18+ with npm/yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnmolxAI/ai-governance-today.git
cd ai-governance-today
```

2. Install dependencies:
```bash
bun install
```

3. Run the development server:
```bash
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ai-governance/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main homepage
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── globals.css       # Global styles and theme variables
│   ├── components/
│   │   ├── Timeline.tsx       # Main timeline component with filters
│   │   ├── RegulationCard.tsx # Individual regulation card
│   │   ├── FilterControls.tsx # Region and industry filters
│   │   ├── ThemeToggle.tsx   # Dark/light mode toggle
│   │   ├── Footer.tsx         # Site footer
│   │   └── SubstackSubscription.tsx # Newsletter subscription
│   └── data/
│       ├── regulations.json   # Regulation data
│       └── types.ts           # TypeScript type definitions
├── public/                    # Static assets
└── package.json
```

## Building for Production

```bash
bun run build
```

This creates an optimized production build in the `.next` folder.

To start the production server:

```bash
bun run start
```

## Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your app will be deployed and live!

The deployment will automatically trigger on every push to your main branch.

### Manual Deployment

You can also deploy to any platform that supports Next.js:

- **Vercel**: Recommended for Next.js apps
- **Netlify**: Supports Next.js with proper configuration
- **AWS Amplify**: Full Next.js support
- **Railway**: Easy deployment with Git integration
- **Docker**: Build and deploy using containers

## Data Management

Regulation data is stored in `src/data/regulations.json`. Each entry includes:
- `id`: Unique identifier
- `date`: Regulation date (YYYY-MM-DD format)
- `jurisdiction`: Specific entity (e.g., "United States (Colorado)")
- `region`: Filterable region category
- `title`: Regulation title
- `status`: Current status (Enacted, Proposed, Adopted, etc.)
- `industry`: Filterable industry category
- `notes`: Description and details

To add new regulations, simply add entries to the JSON file following the existing structure.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Links

- **Website**: [AI Governance Today](https://ai-governance-today.vercel.app)
- **GitHub**: [Repository](https://github.com/AnmolxAI/ai-governance-today)
