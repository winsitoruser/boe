'use client'

import { TrendingUp, Users, DollarSign, Droplet, BarChart3, Activity, Clock, Target } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function AdvancedStats() {
  // Chart data
  const tvlData = [
    { month: 'Jan', value: 5.2 },
    { month: 'Feb', value: 5.8 },
    { month: 'Mar', value: 6.4 },
    { month: 'Apr', value: 7.1 },
    { month: 'May', value: 7.8 },
    { month: 'Jun', value: 9.1 }
  ]

  const productionData = [
    { site: 'Sumatra', production: 1850, apy: 58 },
    { site: 'Riau', production: 2100, apy: 62 },
    { site: 'PNG', production: 0, apy: 75 }
  ]

  const stakersGrowth = [
    { week: 'W1', stakers: 3200 },
    { week: 'W2', stakers: 3550 },
    { week: 'W3', stakers: 3850 },
    { week: 'W4', stakers: 4200 },
    { week: 'W5', stakers: 4600 },
    { week: 'W6', stakers: 4895 }
  ]

  const portfolioDistribution = [
    { name: 'Sumatra Pool', value: 3.2, color: '#FF6B00' },
    { name: 'Riau Pool', value: 4.1, color: '#FFB800' },
    { name: 'PNG Pool', value: 1.8, color: '#FFA500' }
  ]

  const stats = [
    {
      label: 'Total Value Locked',
      value: '$8,247,592',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'primary',
      detail: 'Last 30 days'
    },
    {
      label: 'Average APY',
      value: '48.5%',
      change: '+2.3%',
      trend: 'up',
      icon: TrendingUp,
      color: 'secondary',
      detail: 'Weighted average'
    },
    {
      label: 'Active Stakers',
      value: '3,847',
      change: '+156',
      trend: 'up',
      icon: Users,
      color: 'accent',
      detail: 'This month'
    },
    {
      label: 'Daily Production',
      value: '2,850 bpd',
      change: '+8.2%',
      trend: 'up',
      icon: Droplet,
      color: 'success',
      detail: 'Verified output'
    },
    {
      label: 'Total Rewards Distributed',
      value: '$2.4M',
      change: '+$245K',
      trend: 'up',
      icon: BarChart3,
      color: 'primary',
      detail: 'All-time'
    },
    {
      label: 'Network Uptime',
      value: '99.98%',
      change: 'Stable',
      trend: 'stable',
      icon: Activity,
      color: 'success',
      detail: '365 days'
    },
    {
      label: 'Avg. Stake Duration',
      value: '142 days',
      change: '+12 days',
      trend: 'up',
      icon: Clock,
      color: 'secondary',
      detail: 'Median lock period'
    },
    {
      label: 'Yield Efficiency',
      value: '96.2%',
      change: '+1.8%',
      trend: 'up',
      icon: Target,
      color: 'accent',
      detail: 'Revenue to yield ratio'
    }
  ]

  return (
    <section className="py-20 bg-boil-darker/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-boil-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-boil-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="badge-info">LIVE METRICS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text-premium">Platform Analytics</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time data powered by on-chain verification and production oracles
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="stat-card-premium animate-slide-up group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-boil-${stat.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`text-boil-${stat.color}`} size={22} />
                  </div>
                  {stat.trend === 'up' && (
                    <span className="badge-success text-xs">{stat.change}</span>
                  )}
                  {stat.trend === 'stable' && (
                    <span className="badge-info text-xs">{stat.change}</span>
                  )}
                </div>
                
                <div className="text-2xl md:text-3xl font-bold mb-1 gradient-text">
                  {stat.value}
                </div>
                
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.detail}</div>
              </div>
            )
          })}
        </div>

        {/* Professional Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto mb-12">
          {/* TVL Growth Chart */}
          <div className="energy-card-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Total Value Locked Growth</h3>
                <p className="text-sm text-gray-400">6-month trend (in millions USD)</p>
              </div>
              <BarChart3 className="text-primary" size={24} />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={tvlData}>
                <defs>
                  <linearGradient id="colorTVL" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="value" stroke="#FF6B00" strokeWidth={3} fillOpacity={1} fill="url(#colorTVL)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Production & APY Chart */}
          <div className="energy-card-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Production Sites Performance</h3>
                <p className="text-sm text-gray-400">Daily production vs APY</p>
              </div>
              <Droplet className="text-secondary" size={24} />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A35" opacity={0.3} />
                <XAxis dataKey="site" stroke="#999" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="left" stroke="#FFB800" style={{ fontSize: '12px' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#FF6B00" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141419', border: '2px solid #FFB800', borderRadius: '12px', padding: '12px' }}
                  labelStyle={{ color: '#FFB800', fontWeight: 'bold' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: '10px' }} />
                <Bar yAxisId="left" dataKey="production" fill="#FFB800" name="Production (bpd)" radius={[8, 8, 0, 0]} />
                <Bar yAxisId="right" dataKey="apy" fill="#FF6B00" name="APY (%)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stakers Growth Chart */}
          <div className="energy-card-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Active Stakers Growth</h3>
                <p className="text-sm text-gray-400">6-week community expansion</p>
              </div>
              <Users className="text-accent" size={24} />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={stakersGrowth}>
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#FF6B00" />
                    <stop offset="50%" stopColor="#FFB800" />
                    <stop offset="100%" stopColor="#FF6B00" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2A2A35" opacity={0.3} />
                <XAxis dataKey="week" stroke="#999" style={{ fontSize: '12px' }} />
                <YAxis stroke="#999" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141419', border: '2px solid #FF6B00', borderRadius: '12px', padding: '12px' }}
                  labelStyle={{ color: '#FFB800', fontWeight: 'bold' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="stakers" stroke="url(#lineGradient)" strokeWidth={4} dot={{ fill: '#FFB800', stroke: '#FF6B00', strokeWidth: 2, r: 5 }} activeDot={{ r: 7 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Portfolio Distribution Chart */}
          <div className="energy-card-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Portfolio Distribution</h3>
                <p className="text-sm text-gray-400">TVL by pool (in millions USD)</p>
              </div>
              <Target className="text-success" size={24} />
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={portfolioDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value, percent }) => `${name}: $${value}M (${(percent * 100).toFixed(1)}%)`}
                  outerRadius={85}
                  innerRadius={40}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={3}
                >
                  {portfolioDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="#141419" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141419', border: '2px solid #FFB800', borderRadius: '12px', padding: '12px' }}
                  labelStyle={{ color: '#FFB800', fontWeight: 'bold' }}
                  formatter={(value: any) => [`$${value}M`, 'TVL']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional detailed stats row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Treasury Health</h4>
              <span className="badge-success">Excellent</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Reserve Ratio</span>
                <span className="font-semibold">142%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Buyback Balance</span>
                <span className="font-semibold">$1.2M</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">DAO Treasury</span>
                <span className="font-semibold">$480K</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Production Status</h4>
              <span className="badge-success">Active</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Active Wells</span>
                <span className="font-semibold">12 Sites</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Operating Efficiency</span>
                <span className="font-semibold">94.2%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Monthly Growth</span>
                <span className="font-semibold text-boil-success">+8.5%</span>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Network Security</h4>
              <span className="badge-success">Secured</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Oracle Nodes</span>
                <span className="font-semibold">5/5 Active</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Smart Contract</span>
                <span className="font-semibold text-boil-success">Audited</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Multi-sig Status</span>
                <span className="font-semibold">3/5 Required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
