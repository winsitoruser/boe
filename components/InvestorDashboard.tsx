'use client'

import { useState } from 'react'
import { TrendingUp, DollarSign, Clock, Award, ArrowUpRight, ArrowDownRight, Calendar, Droplet, Target, Activity, Users, Shield, Crown, Star, Zap, ShoppingCart } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function InvestorDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'history' | 'analytics' | 'nfts'>('overview')

  // NFT Holdings
  const nftHoldings = [
    {
      id: 1,
      name: 'Elite Energy NFT #89',
      tier: 'Epic',
      boost: 50,
      image: '🔥',
      rarity: 'epic',
      acquired: '2024-02-15',
      value: 2500,
      boostActive: true
    },
    {
      id: 2,
      name: 'Pro Energy NFT #456',
      tier: 'Rare',
      boost: 25,
      image: '💎',
      rarity: 'rare',
      acquired: '2024-01-20',
      value: 750,
      boostActive: true
    }
  ]

  // Mock investor data
  const investorStats = {
    totalInvested: 0,
    currentValue: 0,
    totalRewards: 0,
    roi: 0,
    activeStakes: 0,
    totalStaked: 0,
    availableBalance: 0,
    avgApy: 0
  }

  // Staking history
  const stakingHistory: any[] = []

  // Portfolio growth data
  const portfolioGrowth = [
    { month: 'Jan', value: 50000, rewards: 0 },
    { month: 'Feb', value: 52900, rewards: 2900 },
    { month: 'Mar', value: 55800, rewards: 5800 },
    { month: 'Apr', value: 58200, rewards: 8200 },
    { month: 'May', value: 60100, rewards: 10100 },
    { month: 'Jun', value: 62500, rewards: 12500 }
  ]

  // Rewards history
  const rewardsHistory = [
    { week: 'W1', amount: 480 },
    { week: 'W2', amount: 520 },
    { week: 'W3', amount: 495 },
    { week: 'W4', amount: 540 },
    { week: 'W5', amount: 510 },
    { week: 'W6', amount: 585 }
  ]

  // Pool distribution
  const poolDistribution = [
    { name: 'Sumatra', value: 20000, percentage: 44.4 },
    { name: 'Riau', value: 15000, percentage: 33.3 },
    { name: 'PNG', value: 10000, percentage: 22.3 }
  ]

  return (
    <section className="py-20 bg-boil-darker/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="badge-success mb-3 inline-block">INVESTOR PORTAL</span>
              <h1 className="text-4xl md:text-5xl font-heading mb-2">
                <span className="gradient-text">Staking Dashboard</span>
              </h1>
              <p className="text-gray-400">Complete overview of your energy investments</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Last Updated</div>
              <div className="text-lg font-semibold">Just now</div>
            </div>
          </div>

          {/* Quick Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Invested */}
            <div className="stat-card-premium group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <DollarSign className="text-primary" size={24} />
                </div>
                <span className="badge-info text-xs">Invested</span>
              </div>
              <div className="text-2xl font-bold mb-1 text-gray-500">
                Coming Soon
              </div>
              <div className="text-sm text-gray-400">Total Investment</div>
            </div>

            {/* Current Value */}
            <div className="stat-card-premium group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-success" size={24} />
                </div>
                <span className="badge-success text-xs flex items-center">
                  <ArrowUpRight size={12} className="mr-1" />
                  +{investorStats.roi}%
                </span>
              </div>
              <div className="text-2xl font-bold mb-1 text-gray-500">
                Coming Soon
              </div>
              <div className="text-sm text-gray-400">Current Value</div>
            </div>

            {/* Total Rewards */}
            <div className="stat-card-premium group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="text-secondary" size={24} />
                </div>
                <span className="badge-secondary text-xs">Earned</span>
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-500">
                $0
              </div>
              <div className="text-sm text-gray-400">Total Rewards</div>
            </div>

            {/* Active Stakes */}
            <div className="stat-card-premium group">
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Activity className="text-accent" size={24} />
                </div>
                <span className="badge-accent text-xs">{investorStats.avgApy}% Avg APY</span>
              </div>
              <div className="text-3xl font-bold mb-1 text-accent">
                0
              </div>
              <div className="text-sm text-gray-400">Active Stakes</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-4 mb-8 border-b border-boil-border">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'history'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Staking History
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'analytics'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('nfts')}
            className={`px-6 py-3 font-semibold transition-colors border-b-2 ${
              activeTab === 'nfts'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            My NFTs
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Portfolio Growth Chart */}
            <div className="energy-card-premium p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Portfolio Growth</h3>
                  <p className="text-sm text-gray-400">Investment value over time</p>
                </div>
                <TrendingUp className="text-success" size={24} />
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={portfolioGrowth}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.4}/>
                      <stop offset="50%" stopColor="#FFB800" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#FF6B00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2A2A35" opacity={0.3} />
                  <XAxis dataKey="month" stroke="#999" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#999" style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#141419', border: '2px solid #FF6B00', borderRadius: '12px', padding: '12px' }}
                    labelStyle={{ color: '#FFB800', fontWeight: 'bold' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Area type="monotone" dataKey="value" stroke="#FF6B00" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" name="Portfolio Value" />
                  <Area type="monotone" dataKey="rewards" stroke="#00FF88" strokeWidth={2} fillOpacity={0.3} fill="#00FF88" name="Total Rewards" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Active Stakes */}
              <div className="energy-card-premium p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Shield className="text-primary mr-2" size={20} />
                  Active Stakes
                </h3>
                <div className="space-y-4">
                  {stakingHistory.filter(s => s.status === 'active').map((stake) => (
                    <div key={stake.id} className="bg-boil-darker rounded-lg p-4 border border-boil-border hover:border-primary transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold mb-1">{stake.pool}</h4>
                          <p className="text-sm text-gray-400">{stake.duration} • {stake.apy}% APY</p>
                        </div>
                        <span className="badge-success text-xs">{stake.status}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Staked Amount</div>
                          <div className="font-semibold text-primary">${stake.amount.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Rewards Earned</div>
                          <div className="font-semibold text-success">${stake.rewards.toLocaleString()}</div>
                        </div>
                      </div>
                      {/* Progress Bar */}
                      <div>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{stake.progress}%</span>
                        </div>
                        <div className="h-2 bg-boil-dark rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                            style={{ width: `${stake.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pool Distribution */}
              <div className="energy-card-premium p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Target className="text-secondary mr-2" size={20} />
                  Pool Distribution
                </h3>
                <div className="space-y-4 mb-6">
                  {poolDistribution.map((pool, index) => (
                    <div key={index} className="bg-boil-darker rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{pool.name} Pool</span>
                        <span className="text-sm text-gray-400">{pool.percentage}%</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-primary">${pool.value.toLocaleString()}</span>
                      </div>
                      <div className="h-2 bg-boil-dark rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'}`}
                          style={{ width: `${pool.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Diversification Score</div>
                      <div className="text-2xl font-bold text-primary">Balanced</div>
                    </div>
                    <Users className="text-primary" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="energy-card-premium p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Calendar className="text-primary mr-2" size={20} />
                Complete Staking History
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-boil-border">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Pool</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">APY</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Duration</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Start Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">End Date</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Rewards</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stakingHistory.map((stake) => (
                      <tr key={stake.id} className="border-b border-boil-border/50 hover:bg-boil-card transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-semibold">{stake.pool}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-semibold text-primary">${stake.amount.toLocaleString()}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="badge-success text-xs">{stake.apy}%</span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-400">{stake.duration}</td>
                        <td className="py-4 px-4 text-sm text-gray-400">{stake.startDate}</td>
                        <td className="py-4 px-4 text-sm text-gray-400">{stake.endDate}</td>
                        <td className="py-4 px-4">
                          <div className="font-semibold text-success">${stake.rewards.toLocaleString()}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`badge-${stake.status === 'active' ? 'success' : 'info'} text-xs capitalize`}>
                            {stake.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weekly Rewards */}
              <div className="energy-card-premium p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Weekly Rewards</h3>
                    <p className="text-sm text-gray-400">Last 6 weeks performance</p>
                  </div>
                  <Award className="text-secondary" size={24} />
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={rewardsHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2A2A35" opacity={0.3} />
                    <XAxis dataKey="week" stroke="#999" style={{ fontSize: '12px' }} />
                    <YAxis stroke="#999" style={{ fontSize: '12px' }} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#141419', border: '2px solid #FFB800', borderRadius: '12px', padding: '12px' }}
                      labelStyle={{ color: '#FFB800', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="amount" fill="#FFB800" radius={[8, 8, 0, 0]} name="Rewards ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Performance Metrics */}
              <div className="energy-card-premium p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Activity className="text-accent mr-2" size={20} />
                  Performance Metrics
                </h3>
                <div className="space-y-4">
                  <div className="bg-boil-darker rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Return on Investment</span>
                      <ArrowUpRight className="text-success" size={16} />
                    </div>
                    <div className="text-3xl font-bold text-success mb-1">+{investorStats.roi}%</div>
                    <div className="text-xs text-gray-500">Since first stake</div>
                  </div>
                  
                  <div className="bg-boil-darker rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Average APY</span>
                      <TrendingUp className="text-primary" size={16} />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{investorStats.avgApy}%</div>
                    <div className="text-xs text-gray-500">Weighted across all pools</div>
                  </div>
                  
                  <div className="bg-boil-darker rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Est. Monthly Income</span>
                      <DollarSign className="text-secondary" size={16} />
                    </div>
                    <div className="text-3xl font-bold text-secondary mb-1">$2,200</div>
                    <div className="text-xs text-gray-500">Based on current stakes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Summary */}
            <div className="energy-card-premium p-6">
              <h3 className="text-xl font-bold mb-6">Investment Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <Droplet className="text-primary mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">{investorStats.activeStakes}</div>
                  <div className="text-sm text-gray-400">Active Positions</div>
                </div>
                <div className="text-center">
                  <Clock className="text-secondary mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">142</div>
                  <div className="text-sm text-gray-400">Avg. Days Staked</div>
                </div>
                <div className="text-center">
                  <Target className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">96.2%</div>
                  <div className="text-sm text-gray-400">Yield Efficiency</div>
                </div>
                <div className="text-center">
                  <Shield className="text-success mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold mb-1">3</div>
                  <div className="text-sm text-gray-400">Pools Diversified</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NFTs Tab */}
        {activeTab === 'nfts' && (
          <div className="space-y-6">
            {/* NFT Holdings Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="energy-card-premium p-6 text-center">
                <Crown className="text-primary mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-primary mb-1">{nftHoldings.length}</div>
                <div className="text-sm text-gray-400">NFTs Owned</div>
              </div>
              <div className="energy-card-premium p-6 text-center">
                <Zap className="text-secondary mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-secondary mb-1">+{nftHoldings.reduce((sum, nft) => sum + nft.boost, 0)}%</div>
                <div className="text-sm text-gray-400">Total Boost</div>
              </div>
              <div className="energy-card-premium p-6 text-center">
                <DollarSign className="text-success mx-auto mb-3" size={32} />
                <div className="text-3xl font-bold text-success mb-1">${nftHoldings.reduce((sum, nft) => sum + nft.value, 0).toLocaleString()}</div>
                <div className="text-sm text-gray-400">NFT Value</div>
              </div>
            </div>

            {/* Active Boost Banner */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 border-2 border-primary/30 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Zap className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">NFT Boost Active!</h3>
                    <p className="text-sm text-gray-400">Your staking rewards are being multiplied</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">+{nftHoldings.reduce((sum, nft) => sum + nft.boost, 0)}%</div>
                  <div className="text-sm text-gray-400">Total APY Boost</div>
                </div>
              </div>
            </div>

            {/* NFT Collection */}
            <div className="energy-card-premium p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <Crown className="text-primary mr-2" size={20} />
                  My NFT Collection
                </h3>
                <a href="/marketplace" className="btn-secondary px-4 py-2 text-sm inline-flex items-center">
                  <ShoppingCart size={16} className="mr-2" />
                  Browse More
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nftHoldings.map((nft) => (
                  <div key={nft.id} className="bg-boil-darker rounded-xl p-4 border border-boil-border hover:border-primary transition-colors">
                    {/* NFT Image */}
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 relative">
                      <div className="text-6xl">{nft.image}</div>
                      {nft.boostActive && (
                        <div className="absolute top-2 right-2">
                          <span className="badge-success text-xs flex items-center">
                            <Zap size={12} className="mr-1" />
                            Active
                          </span>
                        </div>
                      )}
                    </div>

                    {/* NFT Info */}
                    <h4 className="font-bold mb-2">{nft.name}</h4>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Boost</div>
                        <div className="text-lg font-bold text-primary">+{nft.boost}%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 mb-1">Value</div>
                        <div className="text-lg font-bold text-secondary">${nft.value}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400 mb-3">
                      <span className="font-semibold">{nft.tier}</span> • Acquired {nft.acquired}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-boil-card hover:bg-boil-darker py-2 rounded-lg text-sm transition-colors">
                        Details
                      </button>
                      <button className="flex-1 bg-boil-card hover:bg-boil-darker py-2 rounded-lg text-sm transition-colors">
                        Sell
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add More Card */}
                <a href="/marketplace" className="bg-boil-darker rounded-xl p-4 border-2 border-dashed border-boil-border hover:border-primary transition-colors flex flex-col items-center justify-center min-h-[300px] group">
                  <ShoppingCart className="text-gray-500 group-hover:text-primary mb-3 transition-colors" size={48} />
                  <div className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Buy More NFTs</div>
                  <div className="text-sm text-gray-400 text-center">Browse marketplace to boost your rewards even more</div>
                </a>
              </div>
            </div>

            {/* Boost Calculator */}
            <div className="energy-card-premium p-6">
              <h3 className="text-xl font-bold mb-6">Boost Impact Calculator</h3>
              <div className="bg-boil-darker rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Base APY</div>
                    <div className="text-3xl font-bold mb-1">58%</div>
                    <div className="text-xs text-gray-400">Without NFT</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-4xl text-primary">→</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Boosted APY</div>
                    <div className="text-3xl font-bold text-primary mb-1">
                      {58 + (58 * nftHoldings.reduce((sum, nft) => sum + nft.boost, 0) / 100)}%
                    </div>
                    <div className="text-xs text-success">+{nftHoldings.reduce((sum, nft) => sum + nft.boost, 0)}% from NFTs</div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-boil-border">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Extra Earnings on $10,000 stake:</div>
                    <div className="text-2xl font-bold text-success">
                      +${(10000 * (58 * nftHoldings.reduce((sum, nft) => sum + nft.boost, 0) / 100) / 100).toLocaleString()} per year
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
