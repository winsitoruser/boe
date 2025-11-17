'use client'

import { useState } from 'react'
import { Lock, TrendingUp, Clock, Zap } from 'lucide-react'

export default function StakingOverview() {
  const [stakeAmount, setStakeAmount] = useState('')
  const [lockPeriod, setLockPeriod] = useState('90')

  const multipliers = {
    '0': 1.0,
    '30': 1.1,
    '90': 1.25,
    '180': 1.5,
    '365': 2.0
  }

  const calculateAPY = () => {
    const baseAPY = 45
    const multiplier = multipliers[lockPeriod as keyof typeof multipliers]
    return (baseAPY * multiplier).toFixed(2)
  }

  const calculateRewards = () => {
    if (!stakeAmount) return '0'
    const amount = parseFloat(stakeAmount)
    const apy = parseFloat(calculateAPY())
    return ((amount * apy) / 100).toFixed(2)
  }

  return (
    <section id="overview" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text">Stake & Earn</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lock your BOIL tokens and earn real yield from energy production
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Staking Calculator */}
          <div className="energy-card">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Staking Calculator</h3>
            
            <div className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Amount to Stake
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-boil-darker border border-boil-border rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-boil-primary"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-boil-primary font-semibold">
                    BOIL
                  </span>
                </div>
              </div>

              {/* Lock Period Selector */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">
                  Lock Period
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {Object.entries(multipliers).map(([days, mult]) => (
                    <button
                      key={days}
                      onClick={() => setLockPeriod(days)}
                      className={`px-4 py-3 rounded-lg border transition-all ${
                        lockPeriod === days
                          ? 'bg-boil-primary border-boil-primary text-white'
                          : 'bg-boil-darker border-boil-border text-gray-400 hover:border-boil-primary'
                      }`}
                    >
                      <div className="text-xs mb-1">{days === '0' ? 'Flex' : `${days}d`}</div>
                      <div className="text-sm font-bold">{mult}×</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated APY */}
              <div className="bg-boil-darker rounded-lg p-4 border border-boil-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Estimated APY</span>
                  <TrendingUp className="text-boil-success" size={20} />
                </div>
                <div className="text-3xl font-bold gradient-text">
                  {calculateAPY()}%
                </div>
              </div>

              {/* Estimated Rewards */}
              <div className="bg-boil-darker rounded-lg p-4 border border-boil-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Annual Rewards</span>
                  <Zap className="text-boil-secondary" size={20} />
                </div>
                <div className="text-2xl font-bold text-white">
                  {calculateRewards()} USDT
                </div>
              </div>

              {/* Stake Button */}
              <button className="btn-primary w-full text-lg py-4">
                <Lock className="inline-block mr-2" size={20} />
                Stake BOIL
              </button>
            </div>
          </div>

          {/* Staking Info */}
          <div className="space-y-6">
            <div className="energy-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-boil-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="text-boil-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Lock Duration Rewards</h4>
                  <p className="text-sm text-gray-400">Higher multipliers for longer locks</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-boil-border">
                  <span className="text-gray-400">Flexible (0 days)</span>
                  <span className="font-semibold text-white">1.0× Base APY</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-boil-border">
                  <span className="text-gray-400">30 days</span>
                  <span className="font-semibold text-boil-secondary">1.1× Base APY</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-boil-border">
                  <span className="text-gray-400">90 days</span>
                  <span className="font-semibold text-boil-secondary">1.25× Base APY</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-boil-border">
                  <span className="text-gray-400">180 days</span>
                  <span className="font-semibold text-boil-primary">1.5× Base APY</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-400">365 days</span>
                  <span className="font-semibold text-boil-primary">2.0× Base APY</span>
                </div>
              </div>
            </div>

            <div className="energy-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-boil-accent/20 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="text-boil-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Key Features</h4>
                  <p className="text-sm text-gray-400">Why stake with BOIL</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-boil-primary rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">Real Yield from Energy</p>
                    <p className="text-sm text-gray-400">Backed by verified oil production revenue</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-boil-secondary rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">Flexible or Fixed Terms</p>
                    <p className="text-sm text-gray-400">Choose your lock period based on your strategy</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-boil-accent rounded-full mt-2 mr-3"></div>
                  <div>
                    <p className="font-semibold">NFT Boost Available</p>
                    <p className="text-sm text-gray-400">Multiply your rewards with Energy NFTs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
