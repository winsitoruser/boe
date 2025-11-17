'use client'

import { CheckCircle2, Circle, Clock, Rocket } from 'lucide-react'

export default function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Foundation & Launch',
      status: 'completed',
      quarter: 'Q1 2024',
      items: [
        { text: 'Smart Contract Development', done: true },
        { text: 'Security Audits (CertiK & Hacken)', done: true },
        { text: 'Token Generation Event', done: true },
        { text: 'Initial DEX Listing', done: true },
        { text: 'First Energy Pool Launch (Texas)', done: true }
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Expansion & Growth',
      status: 'completed',
      quarter: 'Q2 2024',
      items: [
        { text: 'NFT Boost System Launch', done: true },
        { text: 'Additional Pools (Refinery & Middle East)', done: true },
        { text: 'Mobile App Beta Release', done: true },
        { text: 'Partnership with Major Energy Companies', done: true },
        { text: 'DAO Governance Implementation', done: true }
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Scaling & Innovation',
      status: 'in-progress',
      quarter: 'Q3-Q4 2024',
      items: [
        { text: 'Multi-Chain Expansion (Ethereum, BSC, Polygon)', done: true },
        { text: 'Advanced Analytics Dashboard', done: true },
        { text: 'Institutional Investment Platform', done: false },
        { text: 'Energy Derivatives Trading', done: false },
        { text: '20+ New Production Pools', done: false }
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Global Domination',
      status: 'upcoming',
      quarter: 'Q1-Q2 2025',
      items: [
        { text: 'Renewable Energy Pools (Solar, Wind)', done: false },
        { text: 'Cross-Chain Bridge & Liquidity Aggregation', done: false },
        { text: 'BOIL Credit Card & Payment Integration', done: false },
        { text: 'Real Estate & Infrastructure Tokenization', done: false },
        { text: 'IPO & Traditional Finance Integration', done: false }
      ]
    },
    {
      phase: 'Phase 5',
      title: 'The Future',
      status: 'future',
      quarter: '2025+',
      items: [
        { text: 'Global Energy Trading Platform', done: false },
        { text: 'AI-Powered Yield Optimization', done: false },
        { text: 'Carbon Credit Integration', done: false },
        { text: 'Metaverse Energy Assets', done: false },
        { text: 'Become Top 10 DeFi Protocol', done: false }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'boil-success'
      case 'in-progress': return 'boil-secondary'
      case 'upcoming': return 'boil-accent'
      case 'future': return 'gray-500'
      default: return 'gray-500'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in-progress': return 'In Progress'
      case 'upcoming': return 'Upcoming'
      case 'future': return 'Future'
      default: return ''
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle2
      case 'in-progress': return Clock
      case 'upcoming': return Circle
      case 'future': return Rocket
      default: return Circle
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-boil-dark"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-boil-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-boil-accent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="badge-warning">DEVELOPMENT JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text-premium">Roadmap to Excellence</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our journey to become the world's leading real yield DeFi platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-boil-success via-boil-secondary to-boil-accent transform -translate-x-1/2"></div>

            {phases.map((phase, index) => {
              const StatusIcon = getStatusIcon(phase.status)
              const isLeft = index % 2 === 0

              return (
                <div key={index} className="relative mb-12 lg:mb-24">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-boil-card border-4 border-boil-primary items-center justify-center z-10">
                    <StatusIcon className={`text-${getStatusColor(phase.status)}`} size={28} />
                  </div>

                  {/* Content */}
                  <div className={`lg:w-5/12 ${isLeft ? 'lg:ml-0 lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:mr-0 lg:pl-16'}`}>
                    <div className="energy-card-premium animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-boil-primary font-bold mb-1">{phase.phase}</div>
                          <h3 className="text-2xl font-bold">{phase.title}</h3>
                          <div className="text-sm text-gray-500">{phase.quarter}</div>
                        </div>
                        <span className={`badge badge-${phase.status === 'completed' ? 'success' : phase.status === 'in-progress' ? 'warning' : 'info'}`}>
                          {getStatusLabel(phase.status)}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className="text-gray-400">Progress</span>
                          <span className="font-semibold">
                            {phase.items.filter(i => i.done).length}/{phase.items.length}
                          </span>
                        </div>
                        <div className="h-2 bg-boil-darker rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-${getStatusColor(phase.status)} to-boil-secondary transition-all duration-1000`}
                            style={{width: `${(phase.items.filter(i => i.done).length / phase.items.length) * 100}%`}}
                          ></div>
                        </div>
                      </div>

                      {/* Items */}
                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            {item.done ? (
                              <CheckCircle2 size={20} className="text-boil-success mr-3 mt-0.5 flex-shrink-0" />
                            ) : (
                              <Circle size={20} className="text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={item.done ? 'text-gray-300' : 'text-gray-500'}>
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-card p-8 max-w-2xl">
            <Rocket className="w-16 h-16 text-boil-primary mx-auto mb-4 animate-float" />
            <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
            <p className="text-gray-400 mb-6">
              Be part of the revolution. Start staking today and grow with us as we transform the energy industry.
            </p>
            <button className="btn-primary px-10 py-4 text-lg">
              Start Staking Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
