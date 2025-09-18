# TrendPollr - Community Engagement Platform

A comprehensive Next.js Base Mini App for creating and participating in trend-based polls with rewards, analytics, and monetization features. Fully functional and production-ready with complete API integration.

## Features

- **Interactive Trend Polls**: Create and vote on polls related to trending topics in real-time
- **Participant Rewards System**: Earn points for creating polls, voting, and engaging with the community
- **Premium Insight Reports**: Purchase detailed analytical reports based on aggregated poll data
- **Bespoke Poll Campaigns**: External entities can run targeted poll campaigns for market research

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base Network integration via MiniKit
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety throughout the application
- **State Management**: React hooks and context

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd trendpollr
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Main dashboard page
│   ├── providers.tsx      # MiniKit and other providers
│   ├── loading.tsx        # Loading UI
│   └── error.tsx          # Error boundary
├── components/            # Reusable UI components
│   ├── PollCard.tsx       # Poll display and voting component
│   ├── VoteButton.tsx     # Voting interaction button
│   ├── StatsCard.tsx      # Statistics display component
│   ├── Sidebar.tsx        # Navigation sidebar
│   ├── Header.tsx         # Top navigation header
│   └── ...
├── lib/                   # Utilities and types
│   ├── types.ts           # TypeScript type definitions
│   ├── mockData.ts        # Sample data for development
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Key Components

### PollCard
Interactive component for displaying polls with voting functionality, progress bars, and real-time results.

### VoteButton
Reusable button component with different variants (default, selected) for poll interactions.

### Sidebar
Navigation component with dashboard sections and user profile integration.

## Design System

The app uses a custom design system with the following tokens:

- **Colors**: Background (#f8fafc), Accent (#7c3aed), Primary (#3b82f6), Surface (#ffffff)
- **Spacing**: Small (8px), Medium (12px), Large (20px)
- **Border Radius**: Small (6px), Medium (10px), Large (16px)
- **Shadows**: Card shadow for elevated components

## Data Model

### Core Entities

- **User**: User profiles with points and engagement metrics
- **Poll**: Poll data with options, votes, and metadata
- **PollVote**: Individual vote records
- **Campaign**: External poll campaigns for monetization

## Monetization Features

1. **Premium Reports**: Detailed analytics and insights ($50+)
2. **Campaign Polls**: Sponsored polls for market research ($10+)
3. **Rewards System**: Point-based incentives for engagement

## Development

### Adding New Features

1. Define TypeScript interfaces in `lib/types.ts`
2. Create reusable components in `components/`
3. Add mock data in `lib/mockData.ts` for development
4. Implement pages in the `app/` directory

### Styling Guidelines

- Use Tailwind CSS classes with the custom design tokens
- Follow mobile-first responsive design principles
- Maintain consistent spacing and color usage
- Use the provided component variants for consistency

## Deployment

The app is optimized for deployment on Vercel or similar platforms that support Next.js 15.

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Vercel: Connect your repository for automatic deployments
   - Other platforms: Use the generated `.next` folder

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes with proper TypeScript types
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
