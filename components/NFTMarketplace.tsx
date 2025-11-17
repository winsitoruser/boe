'use client'

import { useState } from 'react'
import { Crown, Star, Award, Zap, ShoppingCart, Eye, TrendingUp, Flame, Shield, Filter, Search } from 'lucide-react'

export default function NFTMarketplace() {
  const [filter, setFilter] = useState<'all' | 'common' | 'rare' | 'epic' | 'legendary'>('all')
  const [sortBy, setSortBy] = useState<'price' | 'boost' | 'rarity'>('rarity')

  const nftListings = [
    {
      id: 1,
      name: 'Standard Energy NFT #1247',
      tier: 'Common',
      boost: 10,
      price: 250,
      image: '🔋',
      rarity: 'common',
      owner: '0x7a...4d2',
      benefits: ['10% APY Boost', 'Community Access', 'Monthly Airdrops'],
      stats: {
        holders: 1847,
        volume: '125K',
        floor: 250
      }
    },
    {
      id: 2,
      name: 'Standard Energy NFT #892',
      tier: 'Common',
      boost: 10,
      price: 255,
      image: '⚡',
      rarity: 'common',
      owner: '0x3b...8f1',
      benefits: ['10% APY Boost', 'Community Access', 'Monthly Airdrops'],
      stats: {
        holders: 1847,
        volume: '125K',
        floor: 250
      }
    },
    {
      id: 3,
      name: 'Pro Energy NFT #456',
      tier: 'Rare',
      boost: 25,
      price: 750,
      image: '💎',
      rarity: 'rare',
      owner: '0x9c...2a7',
      benefits: ['25% APY Boost', 'VIP Access', 'Weekly Bonuses', 'Priority Support'],
      stats: {
        holders: 534,
        volume: '89K',
        floor: 720
      }
    },
    {
      id: 4,
      name: 'Pro Energy NFT #234',
      tier: 'Rare',
      boost: 25,
      price: 780,
      image: '🌟',
      rarity: 'rare',
      owner: '0x5d...9e3',
      benefits: ['25% APY Boost', 'VIP Access', 'Weekly Bonuses', 'Priority Support'],
      stats: {
        holders: 534,
        volume: '89K',
        floor: 720
      }
    },
    {
      id: 5,
      name: 'Elite Energy NFT #89',
      tier: 'Epic',
      boost: 50,
      price: 2500,
      image: '🔥',
      rarity: 'epic',
      owner: '0x1a...6c4',
      benefits: ['50% APY Boost', 'Elite Club', 'Daily Rewards', 'Governance Rights', 'Exclusive Pools'],
      stats: {
        holders: 156,
        volume: '42K',
        floor: 2400
      }
    },
    {
      id: 6,
      name: 'Elite Energy NFT #124',
      tier: 'Epic',
      boost: 50,
      price: 2650,
      image: '⚡',
      rarity: 'epic',
      owner: '0x8f...3b2',
      benefits: ['50% APY Boost', 'Elite Club', 'Daily Rewards', 'Governance Rights', 'Exclusive Pools'],
      stats: {
        holders: 156,
        volume: '42K',
        floor: 2400
      }
    },
    {
      id: 7,
      name: 'Legendary NFT #7',
      tier: 'Legendary',
      boost: 100,
      price: 12500,
      image: '👑',
      rarity: 'legendary',
      owner: '0x2c...5d8',
      benefits: ['100% APY Boost', 'Founder Status', 'Max Rewards', 'Full Voting Power', 'Revenue Share', 'Lifetime Benefits'],
      stats: {
        holders: 25,
        volume: '18K',
        floor: 12000
      }
    },
    {
      id: 8,
      name: 'Legendary NFT #12',
      tier: 'Legendary',
      boost: 100,
      price: 13200,
      image: '🏆',
      rarity: 'legendary',
      owner: '0x6e...1f9',
      benefits: ['100% APY Boost', 'Founder Status', 'Max Rewards', 'Full Voting Power', 'Revenue Share', 'Lifetime Benefits'],
      stats: {
        holders: 25,
        volume: '18K',
        floor: 12000
      }
    }
  ]

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case 'common': return 'text-gray-400 border-gray-500'
      case 'rare': return 'text-cyan-400 border-cyan-500'
      case 'epic': return 'text-purple-400 border-purple-500'
      case 'legendary': return 'text-amber-400 border-amber-500'
      default: return 'text-gray-400 border-gray-500'
    }
  }

  const getRarityBg = (rarity: string) => {
    switch(rarity) {
      case 'common': return 'bg-gray-500/10'
      case 'rare': return 'bg-cyan-500/10'
      case 'epic': return 'bg-purple-500/10'
      case 'legendary': return 'bg-amber-500/10'
      default: return 'bg-gray-500/10'
    }
  }

  const filteredNFTs = nftListings.filter(nft => filter === 'all' || nft.rarity === filter)

  return (
    <section className="py-20 bg-boil-darker/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge-accent mb-3 inline-block">NFT MARKETPLACE</span>
          <h1 className="text-4xl md:text-5xl font-heading mb-4">
            <span className="gradient-text">Energy NFT Collection</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Boost your staking rewards with exclusive Energy NFTs. Higher tiers = Higher yields.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="energy-card text-center">
            <div className="text-xl font-bold text-gray-500 mb-1">Coming Soon</div>
            <div className="text-sm text-gray-400">Total NFTs</div>
          </div>
          <div className="energy-card text-center">
            <div className="text-xl font-bold text-gray-500 mb-1">Coming Soon</div>
            <div className="text-sm text-gray-400">Volume</div>
          </div>
          <div className="energy-card text-center">
            <div className="text-xl font-bold text-gray-500 mb-1">Coming Soon</div>
            <div className="text-sm text-gray-400">Floor Price</div>
          </div>
          <div className="energy-card text-center">
            <div className="text-2xl font-bold text-success mb-1">0</div>
            <div className="text-sm text-gray-400">Holders</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <span className="text-sm text-gray-400">Filter by Rarity:</span>
            <div className="flex space-x-2">
              {['all', 'common', 'rare', 'epic', 'legendary'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    filter === f
                      ? 'bg-primary text-white'
                      : 'bg-boil-card text-gray-400 hover:bg-boil-darker'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-400">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-boil-card border border-boil-border rounded-lg px-3 py-2 text-sm text-gray-300"
            >
              <option value="rarity">Rarity</option>
              <option value="price">Price</option>
              <option value="boost">Boost %</option>
            </select>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredNFTs.map((nft) => (
            <div
              key={nft.id}
              className={`energy-card group hover:scale-105 transition-all duration-300 cursor-pointer border-2 ${getRarityColor(nft.rarity)}`}
            >
              {/* NFT Image */}
              <div className={`aspect-square ${getRarityBg(nft.rarity)} rounded-xl flex items-center justify-center mb-4 relative overflow-hidden`}>
                <div className="text-8xl animate-float">{nft.image}</div>
                <div className="absolute top-3 right-3">
                  <span className={`badge-${nft.rarity === 'legendary' ? 'primary' : nft.rarity === 'epic' ? 'secondary' : nft.rarity === 'rare' ? 'accent' : 'info'} text-xs`}>
                    {nft.tier}
                  </span>
                </div>
              </div>

              {/* NFT Info */}
              <h3 className="font-bold text-lg mb-2">{nft.name}</h3>
              
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">APY Boost</div>
                  <div className="text-xl font-bold text-primary">+{nft.boost}%</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">Price</div>
                  <div className="text-xl font-bold text-secondary">${nft.price}</div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-4">
                <div className="text-xs text-gray-500 mb-2">Benefits:</div>
                <div className="flex flex-wrap gap-1">
                  {nft.benefits.slice(0, 2).map((benefit, i) => (
                    <span key={i} className="text-xs bg-boil-darker px-2 py-1 rounded">
                      {benefit}
                    </span>
                  ))}
                  {nft.benefits.length > 2 && (
                    <span className="text-xs text-gray-400 px-2 py-1">
                      +{nft.benefits.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <button className="flex-1 bg-gray-600 text-gray-400 py-2 text-sm rounded-lg cursor-not-allowed" disabled>
                  Coming Soon
                </button>
                <button className="px-3 py-2 bg-gray-700 text-gray-500 rounded-lg cursor-not-allowed" disabled>
                  <Eye size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-5xl mx-auto energy-card-premium p-8">
          <h2 className="text-2xl font-bold mb-8 text-center gradient-text">How NFT Boost Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-primary" size={28} />
              </div>
              <h4 className="font-bold mb-2">1. Purchase NFT</h4>
              <p className="text-sm text-gray-400">Buy your Energy NFT from the marketplace</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-secondary" size={28} />
              </div>
              <h4 className="font-bold mb-2">2. Hold in Wallet</h4>
              <p className="text-sm text-gray-400">NFT auto-detected by smart contract</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-accent" size={28} />
              </div>
              <h4 className="font-bold mb-2">3. Boost Active</h4>
              <p className="text-sm text-gray-400">APY automatically multiplied</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-success" size={28} />
              </div>
              <h4 className="font-bold mb-2">4. Earn More</h4>
              <p className="text-sm text-gray-400">Get higher rewards daily</p>
            </div>
          </div>

          {/* Boost Example */}
          <div className="mt-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
            <div className="text-center mb-4">
              <h4 className="text-lg font-bold mb-2">Boost Example</h4>
              <p className="text-sm text-gray-400">See how NFTs multiply your earnings</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-500 mb-1">Without NFT</div>
                <div className="text-2xl font-bold">58% APY</div>
                <div className="text-sm text-gray-400">$1,000 → $1,580/year</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-3xl text-primary">→</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">With Legendary NFT</div>
                <div className="text-2xl font-bold text-primary">116% APY</div>
                <div className="text-sm text-success">$1,000 → $2,160/year (+$580!)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
