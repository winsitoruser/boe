'use client'

import { Flame, TrendingUp, Lock, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-boil-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
        <div className="absolute w-[500px] h-[500px] bg-boil-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-boil-card/80 border border-boil-primary/30 px-6 py-2 rounded-full mb-8">
            <Zap className="w-5 h-5 text-boil-primary" />
            <span className="text-sm font-semibold text-boil-primary">Real Yield Revolution</span>
            <span className="badge-success ml-2">LIVE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading mb-6 leading-tight">
            <span className="gradient-text block mb-2">BOIL Staking</span>
            <span className="text-white block">Energy Yield Pools</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stake BOIL tokens and earn <span className="text-primary font-semibold">real yield</span> from verified energy production assets.
            Transform passive holding into <span className="text-secondary font-semibold">active energy income</span>.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-sm text-gray-400">
            <div className="flex items-center space-x-2 bg-boil-card border border-boil-border px-4 py-2 rounded-lg">
              <span>🔒</span>
              <span>Audited by CertiK</span>
            </div>
            <div className="flex items-center space-x-2 bg-boil-card border border-boil-border px-4 py-2 rounded-lg">
              <span>🌐</span>
              <span>Multi-chain</span>
            </div>
            <div className="flex items-center space-x-2 bg-boil-card border border-boil-border px-4 py-2 rounded-lg">
              <span>⚡</span>
              <span>Up to 100% APY</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              <Lock className="inline-block mr-2" size={20} />
              Start Staking Now
            </button>
            <button className="btn-outline text-lg px-8 py-4 w-full sm:w-auto">
              <TrendingUp className="inline-block mr-2" size={20} />
              Explore Pools
            </button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="stat-card-premium text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-boil-primary blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Flame className="w-14 h-14 text-boil-primary mx-auto animate-pulse relative z-10" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-premium">Real Yield</h3>
              <p className="text-gray-300 font-semibold">From verified oil production</p>
              <p className="text-xs text-gray-500 mt-2">Oracle-verified revenue</p>
            </div>
            <div className="stat-card-premium text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-boil-secondary blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Lock className="w-14 h-14 text-boil-secondary mx-auto relative z-10" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-premium">Up to 2.0x</h3>
              <p className="text-gray-300 font-semibold">Lock multipliers</p>
              <p className="text-xs text-gray-500 mt-2">365-day maximum</p>
            </div>
            <div className="stat-card-premium text-center group">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-boil-accent blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <Zap className="w-14 h-14 text-boil-accent mx-auto animate-pulse relative z-10" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-premium">NFT Boost</h3>
              <p className="text-gray-300 font-semibold">Up to +100% yield</p>
              <p className="text-xs text-gray-500 mt-2">Stackable rewards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
