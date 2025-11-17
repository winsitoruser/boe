'use client'

import { TrendingUp, Users, DollarSign, Droplet } from 'lucide-react'

export default function StatsSection() {
  return (
    <section className="py-16 bg-boil-darker/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-boil-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-boil-primary" size={32} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-500 mb-2">Coming Soon</div>
            <div className="text-sm text-gray-400">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-boil-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-boil-secondary" size={32} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-500 mb-2">Coming Soon</div>
            <div className="text-sm text-gray-400">Average APY</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-boil-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-boil-accent" size={32} />
            </div>
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">0</div>
            <div className="text-sm text-gray-400">Active Stakers</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-boil-success/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Droplet className="text-boil-success" size={32} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-500 mb-2">Coming Soon</div>
            <div className="text-sm text-gray-400">bpd Production</div>
          </div>
        </div>
      </div>
    </section>
  )
}
