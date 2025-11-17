'use client'

import { Droplet, TrendingUp, Users, DollarSign } from 'lucide-react'

const pools = [
  {
    id: 1,
    name: 'Sumatra Oil & Gas Pool',
    project: 'Oil Production - South Sumatra',
    location: 'Sumatera Selatan, Indonesia',
    apy: 58,
    tvl: '$3,200,000',
    production: '1,850 bpd',
    stakers: 1847,
    status: 'active',
    color: 'primary'
  },
  {
    id: 2,
    name: 'Riau Energy Pool',
    project: 'Oil Field Operations - Riau Province',
    location: 'Riau, Indonesia',
    apy: 62,
    tvl: '$4,100,000',
    production: '2,100 bpd',
    stakers: 2156,
    status: 'active',
    color: 'secondary'
  },
  {
    id: 3,
    name: 'PNG Gas Reserve Pool',
    project: 'LNG Development - Phase 2',
    location: 'Papua New Guinea',
    apy: 75,
    tvl: '$1,800,000',
    production: 'Phase 2 Development',
    stakers: 892,
    status: 'exploration',
    color: 'accent'
  }
]

export default function EnergyYieldPools() {
  return (
    <section id="pools" className="py-20 bg-boil-darker/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text">Energy Yield Pools</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real production sites, real revenue, real yield
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pools.map((pool) => (
            <div key={pool.id} className="pool-card group">
              {/* Pool Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{pool.name}</h3>
                  <p className="text-sm text-gray-400">{pool.project}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-boil-${pool.color}/20`}>
                  <Droplet className={`text-boil-${pool.color}`} size={24} />
                </div>
              </div>

              {/* APY Display */}
              <div className="bg-gradient-to-r from-boil-primary to-boil-secondary rounded-lg p-6 mb-6 text-center">
                <div className="text-sm text-white/80 mb-1">Current APY</div>
                <div className="text-4xl font-bold text-white">{pool.apy}%</div>
                <div className="text-sm text-white/80 mt-1">Base Rate</div>
              </div>

              {/* Pool Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-boil-border">
                  <div className="flex items-center">
                    <DollarSign size={18} className="text-boil-success mr-2" />
                    <span className="text-gray-400">TVL</span>
                  </div>
                  <span className="font-semibold">{pool.tvl}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-boil-border">
                  <div className="flex items-center">
                    <Droplet size={18} className="text-boil-primary mr-2" />
                    <span className="text-gray-400">Production</span>
                  </div>
                  <span className="font-semibold">{pool.production}</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <Users size={18} className="text-boil-accent mr-2" />
                    <span className="text-gray-400">Stakers</span>
                  </div>
                  <span className="font-semibold">{pool.stakers}</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full btn-primary group-hover:scale-105 transition-transform">
                Stake in Pool
              </button>
            </div>
          ))}
        </div>

        {/* View All Pools */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            View All 12 Pools
          </button>
        </div>
      </div>
    </section>
  )
}
