'use client'

import { useState, useEffect } from 'react'
import { Search, Activity, ArrowUpRight, ArrowDownLeft, Zap, Users, DollarSign, TrendingUp, ExternalLink, Copy, Check, Clock, Hash, Wallet, FileText, Calendar } from 'lucide-react'

export default function BOILScan() {
  const [activeTab, setActiveTab] = useState('transactions')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedHash, setCopiedHash] = useState('')

  // BOIL Token Contract Address (Base L2)
  const BOIL_CONTRACT = '0x24aa5F13563492472A18A73ab787717a9d6327BE'
  const STBOIL_CONTRACT = '0x...' // stBOIL contract address
  const CHAIN_ID = 8453 // Base Mainnet
  const EXPLORER_URL = 'https://basescan.org'

  // Presale date: December 5, 2025
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const PRESALE_DATE = new Date('2025-12-05T00:00:00').getTime()
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = PRESALE_DATE - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Then update every second
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // Mock blockchain data (Coming Soon status)
  const stats = {
    totalTransactions: 0,
    totalHolders: 0,
    boilSupply: '25,000,000,000', // 25 Billion
    stBoilSupply: '0',
    totalStaked: '0',
    stakingRatio: 0,
    avgBlockTime: 'N/A',
    tps: 0
  }

  // Recent transactions (empty - pre-launch)
  const transactions: any[] = [
    // No transactions yet - presale starts December 5, 2025
  ]

  // Token holders (empty - pre-launch)
  const topHolders: any[] = [
    // No holders yet - presale starts December 5, 2025
  ]

  // Staking activities (empty - pre-launch)
  const stakingActivities: any[] = [
    // No staking activity yet - presale starts December 5, 2025
  ]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedHash(text)
    setTimeout(() => setCopiedHash(''), 2000)
  }

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'stake': return <ArrowUpRight className="text-success" size={16} />
      case 'unstake': return <ArrowDownLeft className="text-warning" size={16} />
      case 'transfer': return <ArrowUpRight className="text-primary" size={16} />
      case 'reward': return <Zap className="text-secondary" size={16} />
      default: return <Activity size={16} />
    }
  }

  const getTypeBadge = (type: string) => {
    const badges: {[key: string]: string} = {
      stake: 'badge-success',
      unstake: 'badge-warning',
      transfer: 'badge-info',
      reward: 'badge-secondary'
    }
    return badges[type] || 'badge-info'
  }

  return (
    <section className="py-20 bg-boil-dark min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="badge-warning">PRE-LAUNCH</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text-premium">BOILScan Explorer</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time monitoring of all BOIL & stBOIL transactions, staking activities, and token transfers
          </p>
        </div>

        {/* Presale Countdown - Modern & Elegant */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-boil-darker via-boil-dark to-boil-darker border border-boil-border/30 p-10">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-boil-primary rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-boil-accent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Calendar className="text-white" size={24} />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-audiowide mb-3">
                  <span className="gradient-text-premium">Presale Launch Countdown</span>
                </h2>
                <p className="text-lg text-gray-400">BOIL Token Presale • December 5, 2025</p>
              </div>

              {/* Countdown Timer - Modern Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-8">
                {/* Days */}
                <div className="group">
                  <div className="relative bg-gradient-to-br from-boil-card to-boil-darker border border-boil-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-5xl md:text-6xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-[#FF6B00] via-[#FFB800] to-[#FF6B00] bg-clip-text text-transparent">
                          {String(timeLeft.days).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider">Days</div>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="group">
                  <div className="relative bg-gradient-to-br from-boil-card to-boil-darker border border-boil-border/50 rounded-xl p-6 hover:border-secondary/50 transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-5xl md:text-6xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-[#FF6B00] via-[#FFB800] to-[#FF6B00] bg-clip-text text-transparent">
                          {String(timeLeft.hours).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider">Hours</div>
                    </div>
                  </div>
                </div>

                {/* Minutes */}
                <div className="group">
                  <div className="relative bg-gradient-to-br from-boil-card to-boil-darker border border-boil-border/50 rounded-xl p-6 hover:border-accent/50 transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-5xl md:text-6xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-[#FF6B00] via-[#FFB800] to-[#FF6B00] bg-clip-text text-transparent">
                          {String(timeLeft.minutes).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider">Minutes</div>
                    </div>
                  </div>
                </div>

                {/* Seconds */}
                <div className="group">
                  <div className="relative bg-gradient-to-br from-boil-card to-boil-darker border border-boil-border/50 rounded-xl p-6 hover:border-success/50 transition-all duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-5xl md:text-6xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-[#FF6B00] via-[#FFB800] to-[#FF6B00] bg-clip-text text-transparent">
                          {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                      </div>
                      <div className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Presale Info - Modern Minimal */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-gray-400">Launch Date:</span>
                  <span className="font-semibold text-white">December 5, 2025</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-boil-border"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-gray-400">Network:</span>
                  <span className="font-semibold text-white">Base L2</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-boil-border"></div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-gray-400">Total Supply:</span>
                  <span className="font-semibold text-white">25B BOIL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Address Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">BOIL Token Contract</h3>
              <span className="badge-success text-xs">Verified ✓</span>
            </div>
            <div className="flex items-center justify-between bg-boil-darker/50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Hash className="text-primary" size={20} />
                <code className="text-sm md:text-base font-mono text-accent">{BOIL_CONTRACT}</code>
              </div>
              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => copyToClipboard(BOIL_CONTRACT)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  title="Copy Contract Address"
                >
                  {copiedHash === BOIL_CONTRACT ? (
                    <Check size={18} className="text-success" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
                <a 
                  href={`${EXPLORER_URL}/address/${BOIL_CONTRACT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  title="View on BaseScan"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by Transaction Hash, Address, or Pool Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-boil-card border border-boil-border rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          <div className="stat-card-premium">
            <div className="flex items-center justify-between mb-3">
              <Activity className="text-primary" size={24} />
              <span className="badge-success text-xs">Live</span>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-500 mb-1">
              Coming Soon
            </div>
            <div className="text-sm text-gray-400">Total Transactions</div>
          </div>

          <div className="stat-card-premium">
            <div className="flex items-center justify-between mb-3">
              <Users className="text-accent" size={24} />
            </div>
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
              0
            </div>
            <div className="text-sm text-gray-400">Token Holders</div>
          </div>

          <div className="stat-card-premium">
            <div className="flex items-center justify-between mb-3">
              <DollarSign className="text-secondary" size={24} />
            </div>
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
              0
            </div>
            <div className="text-sm text-gray-400">Total Staked</div>
          </div>

          <div className="stat-card-premium">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp className="text-success" size={24} />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-gray-500 mb-1">
              N/A
            </div>
            <div className="text-sm text-gray-400">Staking Ratio</div>
          </div>
        </div>

        {/* Additional Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
          <div className="glass-card p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">BOIL Supply</div>
            <div className="text-lg font-bold text-primary">{stats.boilSupply}</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">stBOIL Supply</div>
            <div className="text-lg font-bold text-gray-500">Coming Soon</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">Avg Block Time</div>
            <div className="text-lg font-bold text-gray-500">N/A</div>
          </div>
          <div className="glass-card p-4 text-center">
            <div className="text-sm text-gray-400 mb-1">TPS</div>
            <div className="text-lg font-bold text-gray-500">Coming Soon</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-4 mb-8 border-b border-boil-border overflow-x-auto">
          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'transactions'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center">
              <FileText size={18} className="mr-2" />
              Transactions
            </div>
          </button>
          <button
            onClick={() => setActiveTab('holders')}
            className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'holders'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center">
              <Wallet size={18} className="mr-2" />
              Top Holders
            </div>
          </button>
          <button
            onClick={() => setActiveTab('staking')}
            className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'staking'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center">
              <Zap size={18} className="mr-2" />
              Staking Pools
            </div>
          </button>
          <button
            onClick={() => setActiveTab('contract')}
            className={`px-6 py-3 font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'contract'
                ? 'text-primary border-b-2 border-primary'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center">
              <Hash size={18} className="mr-2" />
              Contract Info
            </div>
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-w-7xl mx-auto">
          {/* Transactions Tab */}
          {activeTab === 'transactions' && (
            <div className="energy-card-premium overflow-hidden">
              <div className="p-6 border-b border-boil-border">
                <h3 className="text-xl font-bold gradient-text">Recent Transactions</h3>
                <p className="text-sm text-gray-400 mt-1">Live feed of all BOIL & stBOIL activities</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-boil-darker/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Type</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Hash</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">From</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">To</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Amount</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Fee</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Time</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-boil-border">
                    {transactions.map((tx, index) => (
                      <tr key={index} className="hover:bg-boil-darker/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            {getTypeIcon(tx.type)}
                            <span className={`${getTypeBadge(tx.type)} text-xs`}>
                              {tx.type}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <code className="text-sm text-accent font-mono">{tx.hash}</code>
                            <button 
                              onClick={() => copyToClipboard(tx.hash)}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              {copiedHash === tx.hash ? (
                                <Check size={14} className="text-success" />
                              ) : (
                                <Copy size={14} />
                              )}
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-sm text-gray-400 font-mono">{tx.from}</code>
                        </td>
                        <td className="px-6 py-4">
                          <code className="text-sm text-gray-400 font-mono">{tx.to}</code>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm">
                            <span className="font-semibold text-white">{tx.amount}</span>
                            <span className={`ml-1 ${tx.token === 'BOIL' ? 'text-primary' : 'text-secondary'}`}>
                              {tx.token}
                            </span>
                          </div>
                          {tx.reward && (
                            <div className="text-xs text-success">+{tx.reward} reward</div>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-gray-400">{tx.fee} BOIL</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-sm text-gray-400">
                            <Clock size={14} className="mr-1" />
                            {tx.timestamp}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="badge-success text-xs">Success</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 border-t border-boil-border text-center">
                <button className="btn-secondary px-6 py-2">
                  Load More Transactions
                </button>
              </div>
            </div>
          )}

          {/* Top Holders Tab */}
          {activeTab === 'holders' && (
            <div className="energy-card-premium overflow-hidden">
              <div className="p-6 border-b border-boil-border">
                <h3 className="text-xl font-bold gradient-text">Top BOIL Holders</h3>
                <p className="text-sm text-gray-400 mt-1">Largest token holders by balance</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-boil-darker/50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Rank</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Address</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Balance</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Percentage</th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-boil-border">
                    {topHolders.map((holder, index) => (
                      <tr key={index} className="hover:bg-boil-darker/30 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="font-bold text-lg gradient-text">#{index + 1}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-2">
                            <Wallet size={16} className="text-accent" />
                            <code className="text-sm font-mono text-accent">{holder.address}</code>
                            <button 
                              onClick={() => copyToClipboard(holder.address)}
                              className="text-gray-400 hover:text-white transition-colors"
                            >
                              {copiedHash === holder.address ? (
                                <Check size={14} className="text-success" />
                              ) : (
                                <Copy size={14} />
                              )}
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-lg font-semibold text-white">{holder.balance}</span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-semibold text-primary">{holder.percentage}%</span>
                            <div className="flex-1 max-w-xs">
                              <div className="h-2 bg-boil-darker rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                                  style={{ width: `${holder.percentage * 8}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="badge-primary text-xs">{holder.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Staking Pools Tab */}
          {activeTab === 'staking' && (
            <div className="space-y-6">
              <div className="energy-card-premium p-6">
                <h3 className="text-xl font-bold gradient-text mb-4">Active Staking Pools</h3>
                <p className="text-sm text-gray-400 mb-6">Live monitoring of all staking pool activities</p>
                
                <div className="space-y-4">
                  {stakingActivities.map((pool, index) => (
                    <div key={index} className="glass-card p-6 hover:bg-boil-darker/50 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <Zap className="text-primary" size={20} />
                            <h4 className="text-lg font-bold text-white">{pool.pool}</h4>
                            <span className="badge-success text-xs">{pool.status}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-secondary mb-1">{pool.apy}</div>
                          <div className="text-xs text-gray-400">APY</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Total Staked</div>
                          <div className="text-lg font-semibold text-primary">{pool.totalStaked} BOIL</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Active Stakers</div>
                          <div className="text-lg font-semibold text-accent">{pool.stakers}</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Avg Stake</div>
                          <div className="text-lg font-semibold text-secondary">
                            {(parseInt(pool.totalStaked.replace(/,/g, '')) / pool.stakers).toFixed(0)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Staking Stats Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="energy-card text-center p-6">
                  <DollarSign className="text-primary mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold gradient-text mb-1">450,000</div>
                  <div className="text-sm text-gray-400">Total Staked BOIL</div>
                </div>
                <div className="energy-card text-center p-6">
                  <Users className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold gradient-text mb-1">1,951</div>
                  <div className="text-sm text-gray-400">Total Stakers</div>
                </div>
                <div className="energy-card text-center p-6">
                  <TrendingUp className="text-success mx-auto mb-3" size={32} />
                  <div className="text-2xl font-bold gradient-text mb-1">63.5%</div>
                  <div className="text-sm text-gray-400">Avg Pool APY</div>
                </div>
              </div>
            </div>
          )}

          {/* Contract Info Tab */}
          {activeTab === 'contract' && (
            <div className="space-y-6">
              <div className="energy-card-premium p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold gradient-text">BOIL Token Contract Details</h3>
                  <span className="badge-success">Verified & Audited</span>
                </div>

                {/* Contract Address */}
                <div className="glass-card p-6 mb-6">
                  <div className="text-sm text-gray-400 mb-2">Contract Address</div>
                  <div className="flex items-center justify-between">
                    <code className="text-lg font-mono text-accent break-all">{BOIL_CONTRACT}</code>
                    <div className="flex items-center space-x-2 ml-4">
                      <button 
                        onClick={() => copyToClipboard(BOIL_CONTRACT)}
                        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-boil-darker rounded-lg"
                      >
                        {copiedHash === BOIL_CONTRACT ? (
                          <Check size={18} className="text-success" />
                        ) : (
                          <Copy size={18} />
                        )}
                      </button>
                      <a 
                        href={`${EXPLORER_URL}/address/${BOIL_CONTRACT}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-boil-darker rounded-lg"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Token Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="glass-card p-6">
                    <div className="text-sm text-gray-400 mb-2">Token Name</div>
                    <div className="text-xl font-bold text-white">BOIL Energy Token</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-gray-400 mb-2">Token Symbol</div>
                    <div className="text-xl font-bold text-primary">BOIL</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-gray-400 mb-2">Decimals</div>
                    <div className="text-xl font-bold text-white">18</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-gray-400 mb-2">Network</div>
                    <div className="text-xl font-bold text-secondary">Base L2</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-gray-400 mb-2">Total Supply</div>
                    <div className="text-xl font-bold text-accent">1,000,000 BOIL</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-gray-400 mb-2">Contract Type</div>
                    <div className="text-xl font-bold text-success">ERC-20</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-gray-400 mb-2">Chain ID</div>
                    <div className="text-xl font-bold text-accent">8453</div>
                  </div>
                  <div className="glass-card p-6">
                    <div className="text-sm text-gray-400 mb-2">Layer</div>
                    <div className="text-xl font-bold text-primary">Layer 2 (Ethereum)</div>
                  </div>
                </div>

                {/* Contract Features */}
                <div className="glass-card p-6">
                  <h4 className="text-lg font-bold mb-4 text-white">Smart Contract Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-gray-300">✓ Verified Source Code</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-gray-300">✓ Security Audited</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-gray-300">✓ Staking Mechanism</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-gray-300">✓ Reward Distribution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-gray-300">✓ Anti-Whale Protection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-gray-300">✓ Ownership Renounced</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-gray-300">✓ LP Tokens Locked</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-gray-300">✓ Multi-Sig Treasury</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a 
                  href={`${EXPLORER_URL}/address/${BOIL_CONTRACT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="energy-card p-6 hover:bg-boil-darker/50 transition-colors text-center group"
                >
                  <ExternalLink className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <div className="text-lg font-bold text-white mb-2">View on BaseScan</div>
                  <div className="text-sm text-gray-400">Base L2 Explorer</div>
                </a>
                <a 
                  href={`https://app.uniswap.org/swap?chain=base&outputCurrency=${BOIL_CONTRACT}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="energy-card p-6 hover:bg-boil-darker/50 transition-colors text-center group"
                >
                  <DollarSign className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <div className="text-lg font-bold text-white mb-2">Trade on Uniswap</div>
                  <div className="text-sm text-gray-400">Buy/Sell BOIL on Base</div>
                </a>
                <div className="energy-card p-6 text-center">
                  <FileText className="text-accent mx-auto mb-3" size={32} />
                  <div className="text-lg font-bold text-white mb-2">Contract Source</div>
                  <div className="text-sm text-gray-400">Verified & Public</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
