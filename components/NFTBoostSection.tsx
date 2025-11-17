'use client'

import { Award, Zap, Crown, Star } from 'lucide-react'

const nftTiers = [
  {
    name: 'Standard Energy NFT',
    boost: '+10%',
    icon: Star,
    rarity: 'Common',
    description: 'Base-tier collectible with early access benefits',
    color: 'text-gray-400',
    bgColor: 'bg-gray-500/20'
  },
  {
    name: 'Pro Energy NFT',
    boost: '+25%',
    icon: Award,
    rarity: 'Rare',
    description: 'Earned via community quests and referrals',
    color: 'text-boil-accent',
    bgColor: 'bg-boil-accent/20'
  },
  {
    name: 'Elite Energy NFT',
    boost: '+50%',
    icon: Zap,
    rarity: 'Epic',
    description: 'Backed by real project partnerships',
    color: 'text-boil-secondary',
    bgColor: 'bg-boil-secondary/20'
  },
  {
    name: 'Legendary NFT',
    boost: '+100%',
    icon: Crown,
    rarity: 'Legendary',
    description: 'Ultra-limited DAO and founder rewards',
    color: 'text-boil-primary',
    bgColor: 'bg-boil-primary/20'
  }
]

export default function NFTBoostSection() {
  return (
    <section id="nft" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text">NFT Yield Boost</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Amplify your rewards with Energy NFTs — functional assets that multiply your yield
          </p>
        </div>

        {/* NFT Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {nftTiers.map((tier, index) => {
            const Icon = tier.icon
            return (
              <div
                key={index}
                className="energy-card group hover:scale-105 transition-transform cursor-pointer"
              >
                <div className={`w-16 h-16 ${tier.bgColor} rounded-xl flex items-center justify-center mb-4 mx-auto animate-float`}>
                  <Icon className={tier.color} size={32} />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{tier.name}</h3>
                <div className="text-center mb-3">
                  <span className={`${tier.color} text-3xl font-bold`}>{tier.boost}</span>
                  <span className="text-gray-400 text-sm ml-2">{tier.rarity}</span>
                </div>
                <p className="text-sm text-gray-400 text-center">{tier.description}</p>
              </div>
            )
          })}
        </div>

        {/* How NFT Boost Works */}
        <div className="max-w-4xl mx-auto energy-card">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">How NFT Boost Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-boil-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-boil-primary">1</span>
              </div>
              <h4 className="font-semibold mb-2">Mint or Buy NFT</h4>
              <p className="text-sm text-gray-400">Acquire Energy NFTs from marketplace or community events</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-boil-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-boil-secondary">2</span>
              </div>
              <h4 className="font-semibold mb-2">Hold in Wallet</h4>
              <p className="text-sm text-gray-400">Smart contract auto-detects NFTs in your wallet</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-boil-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-boil-accent">3</span>
              </div>
              <h4 className="font-semibold mb-2">Boost Applied</h4>
              <p className="text-sm text-gray-400">Your yield automatically multiplies based on NFT tier</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/marketplace" className="btn-primary px-8 py-3 inline-flex items-center">
              <Crown className="mr-2" size={20} />
              Browse Marketplace
            </a>
            <a href="/dashboard" className="btn-secondary px-8 py-3 inline-flex items-center">
              <Award className="mr-2" size={20} />
              View My NFTs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
