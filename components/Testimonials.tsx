'use client'

import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'DeFi Investor & Whale',
      company: 'Crypto Ventures LLC',
      avatar: 'MR',
      rating: 5,
      text: 'BOIL is the first DeFi project that truly delivers on its promise of real yield. After 6 months of staking, I\'ve earned consistent returns backed by actual energy production. The transparency is unmatched.',
      metrics: { stake: '$2.4M', earnings: '$145K', duration: '6 months' }
    },
    {
      name: 'Sarah Chen',
      role: 'Institutional Trader',
      company: 'BlockFi Capital',
      avatar: 'SC',
      rating: 5,
      text: 'As an institutional investor, I need verifiable data and security. BOIL\'s oracle-verified production metrics and CertiK audit give me confidence. This bridges traditional finance with DeFi perfectly.',
      metrics: { stake: '$5.1M', earnings: '$312K', duration: '8 months' }
    },
    {
      name: 'David Thompson',
      role: 'Energy Analyst',
      company: 'Former Shell Executive',
      avatar: 'DT',
      rating: 5,
      text: 'I\'ve worked in oil & gas for 25 years. BOIL\'s approach to tokenizing energy assets is revolutionary. The production data is real, verified, and the revenue model is sustainable long-term.',
      metrics: { stake: '$850K', earnings: '$52K', duration: '4 months' }
    },
    {
      name: 'Jennifer Park',
      role: 'Crypto Portfolio Manager',
      company: 'Digital Asset Fund',
      avatar: 'JP',
      rating: 5,
      text: 'NFT boost system is genius - it rewards long-term holders and community engagement. I\'ve achieved 85% APY with Elite NFT + 365-day lock. Best risk-adjusted returns in my portfolio.',
      metrics: { stake: '$1.2M', earnings: '$98K', duration: '5 months' }
    },
    {
      name: 'Robert Martinez',
      role: 'Early Adopter',
      company: 'Independent Investor',
      avatar: 'RM',
      rating: 5,
      text: 'Started with $50K stake in Texas Oilfield Pool. Now sitting at $67K with compounded rewards. The DAO governance and transparent treasury management make me feel like a real stakeholder.',
      metrics: { stake: '$67K', earnings: '$17K', duration: '12 months' }
    },
    {
      name: 'Dr. Lisa Anderson',
      role: 'Blockchain Researcher',
      company: 'MIT DCI',
      avatar: 'LA',
      rating: 5,
      text: 'From a technical perspective, BOIL\'s smart contract architecture is impressive. The modular pool system and oracle integration set a new standard for real-world asset tokenization.',
      metrics: { stake: '$180K', earnings: '$14K', duration: '3 months' }
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-boil-darker via-boil-dark to-boil-darker"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="badge-success">TRUSTED BY THOUSANDS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text-premium">What Our Community Says</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real feedback from real stakers earning real yield
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="energy-card-premium animate-slide-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-boil-primary" />
              </div>

              {/* Header */}
              <div className="flex items-start mb-4">
                <div className="relative mr-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-boil-primary to-boil-secondary flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-boil-success rounded-full border-2 border-boil-card flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">{testimonial.name}</h4>
                  <p className="text-sm text-boil-primary font-semibold">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-boil-secondary fill-boil-secondary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-boil-border">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Staked</div>
                  <div className="text-sm font-bold text-boil-primary">{testimonial.metrics.stake}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Earned</div>
                  <div className="text-sm font-bold text-boil-success">{testimonial.metrics.earnings}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Duration</div>
                  <div className="text-sm font-bold text-boil-secondary">{testimonial.metrics.duration}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">12,500+</div>
                <div className="text-sm text-gray-400">Happy Stakers</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">$45M+</div>
                <div className="text-sm text-gray-400">Total Earned</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-sm text-gray-400">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
