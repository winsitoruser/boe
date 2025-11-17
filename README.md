# BOIL Staking & Energy Yield Pools

A modern, beautiful frontend for the BOIL token staking platform featuring real yield from energy production assets.

## Features

- 🔥 **Energy Yield Pools** - Stake BOIL and earn from verified oil production
- 💰 **Dynamic APY** - Real yield based on actual production revenue
- 🔒 **Lock Multipliers** - Up to 2.0x rewards for longer lock periods
- 🎨 **NFT Boost System** - Amplify yields with Energy NFTs (up to +100%)
- 📊 **Real-Time Dashboard** - Transparent production metrics and revenue tracking
- 🌐 **Web3 Integration** - Connect wallet and stake directly on-chain
- 🎯 **Modern UI/UX** - Built with Next.js 14, TailwindCSS, and Framer Motion

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Web3**: Ethers.js, RainbowKit, Wagmi

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
boe/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and Tailwind config
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with social links
│   ├── Hero.tsx             # Hero section
│   ├── StakingOverview.tsx  # Staking calculator
│   ├── EnergyYieldPools.tsx # Pool cards display
│   ├── NFTBoostSection.tsx  # NFT tiers and boost info
│   ├── StatsSection.tsx     # Platform statistics
│   ├── HowItWorks.tsx       # Step-by-step guide
│   └── RealYieldDashboard.tsx # Revenue transparency
├── public/                  # Static assets
└── package.json
```

## Key Components

### Energy Yield Pools
Real production sites with verifiable revenue:
- Texas Oilfield Pool (52% APY)
- Site Refinery Pool (48% APY)
- Middle East Exploration JV (65% APY)

### Lock Duration Multipliers
- Flexible (0 days): 1.0×
- 30 days: 1.1×
- 90 days: 1.25×
- 180 days: 1.5×
- 365 days: 2.0×

### NFT Boost Tiers
- Standard Energy NFT: +10%
- Pro Energy NFT: +25%
- Elite Energy NFT: +50%
- Legendary NFT: +100%

## Design Theme

Based on BOIL Energy's official branding:
- **Primary**: Orange (#FF6B00)
- **Secondary**: Gold (#FFB800)
- **Accent**: Cyan (#00D4FF)
- **Success**: Green (#00FF88)
- **Dark Background**: #0B0B0F

## Smart Contract Integration

Ready for integration with:
- BOILStaking.sol
- EnergyYieldPool.sol
- NFTBoost.sol
- BOILTreasury.sol

## License

MIT License

## Links

- Website: https://boiltoken.energy
- Twitter: https://x.com/boilenergy
- Telegram: https://t.me/boiltoken
- Discord: https://discord.gg/MMAmTSNS

---

Built with ⚡ by the BOIL Energy team
