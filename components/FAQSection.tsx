'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, Shield, Coins, BarChart3, Lock, Zap, Globe } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: 'General',
      icon: HelpCircle,
      questions: [
        {
          q: 'What is BOIL and how does it work?',
          a: 'BOIL is a revolutionary DeFi platform that connects real-world energy production with blockchain technology. By staking BOIL tokens, you earn real yield generated from verified oil and gas production revenue. Unlike traditional yield farming, BOIL rewards are backed by tangible assets and actual business operations.'
        },
        {
          q: 'How is BOIL different from other DeFi protocols?',
          a: 'BOIL offers Real Yield - returns generated from actual revenue-producing energy assets, not token emissions. Each Energy Yield Pool corresponds to verified production sites with transparent, oracle-verified data. This creates sustainable, long-term value backed by a trillion-dollar industry.'
        },
        {
          q: 'Is BOIL regulated and compliant?',
          a: 'Yes. BOIL operates within regulatory frameworks and works with licensed energy operators. Our smart contracts are audited by leading security firms including CertiK, and we maintain compliance with securities laws through proper tokenization structures.'
        }
      ]
    },
    {
      category: 'Staking',
      icon: Lock,
      questions: [
        {
          q: 'How do I start staking BOIL tokens?',
          a: 'Simply connect your Web3 wallet (MetaMask, WalletConnect, etc.), select an Energy Yield Pool, choose your lock duration, and stake your BOIL tokens. You\'ll receive stBOIL tokens representing your staked position, which automatically accrue yield over time.'
        },
        {
          q: 'What are lock duration multipliers?',
          a: 'Lock multipliers reward long-term commitment. The longer you stake, the higher your yield: Flexible (1.0×), 30 days (1.1×), 90 days (1.25×), 180 days (1.5×), and 365 days (2.0×). These multipliers directly increase your APY and total rewards.'
        },
        {
          q: 'Can I unstake before my lock period ends?',
          a: 'Flexible pools allow immediate withdrawal. For locked pools, early withdrawal incurs a penalty fee (typically 5-10% of rewards) which is redistributed to remaining stakers. After the lock period, you can unstake anytime without penalties.'
        },
        {
          q: 'How are staking rewards calculated?',
          a: 'Rewards are proportional to your stake amount and lock multiplier. Formula: Your Share = (Your Stake / Total Staked) × Pool Revenue × Yield Ratio × Lock Multiplier × NFT Boost. All calculations are transparent and verifiable on-chain.'
        }
      ]
    },
    {
      category: 'NFT Boost',
      icon: Zap,
      questions: [
        {
          q: 'How do NFT boosts work?',
          a: 'Energy NFTs provide additional yield multipliers when held in your wallet. Standard NFTs give +10%, Pro +25%, Elite +50%, and Legendary +100% boost. NFT boosts stack with lock duration multipliers for maximum APY.'
        },
        {
          q: 'Where can I get Energy NFTs?',
          a: 'Energy NFTs can be minted during special events, earned through community quests, purchased from our marketplace, or received as rewards for early stakers and ambassadors. Some NFTs are also awarded to top performers and long-term holders.'
        },
        {
          q: 'Can I stack multiple NFTs?',
          a: 'Yes, but with a cap. You can stack up to 2 Energy NFTs to maximize your boost, with a total limit of 2.5× combined multiplier. This prevents whale manipulation while rewarding active community members.'
        }
      ]
    },
    {
      category: 'Security & Transparency',
      icon: Shield,
      questions: [
        {
          q: 'How is production data verified?',
          a: 'We use a multi-layer verification system: (1) Licensed operators submit production reports, (2) Independent Oracle nodes validate data, (3) Multi-signature consensus (3/5 validators) required, (4) On-chain data posting. All data is cryptographically signed and publicly auditable.'
        },
        {
          q: 'What security measures protect my funds?',
          a: 'BOIL employs multiple security layers: smart contracts audited by CertiK and Hacken, multi-sig wallet controls, time-locked upgrades, bug bounty programs, insurance fund reserves, and continuous monitoring. We\'ve never had a security breach.'
        },
        {
          q: 'Can I see real-time production data?',
          a: 'Yes! Our dashboard shows live metrics: daily production (bpd), revenue per cycle, distribution schedules, and pool performance. All data is sourced from oracle feeds and cross-verified with public energy databases.'
        }
      ]
    },
    {
      category: 'Tokenomics',
      icon: Coins,
      questions: [
        {
          q: 'What is the BOIL token supply?',
          a: 'BOIL has a fixed maximum supply of 100,000,000 tokens with deflationary mechanics. 20% of production revenue is used for buyback & burn, continuously reducing circulating supply. Current circulating supply and burn stats are visible on our dashboard.'
        },
        {
          q: 'How does the buyback mechanism work?',
          a: 'A portion of energy production profits (20%) is automatically used to buy BOIL tokens from the market and permanently burn them. This creates constant buy pressure and token scarcity, supporting long-term price appreciation.'
        },
        {
          q: 'What determines BOIL token price?',
          a: 'BOIL price is determined by market forces on decentralized exchanges. Key factors include: production revenue growth, staking demand, buyback volume, overall DeFi market conditions, and adoption rates. Real yield provides fundamental value support.'
        }
      ]
    },
    {
      category: 'Energy Pools',
      icon: BarChart3,
      questions: [
        {
          q: 'What are Energy Yield Pools?',
          a: 'Each pool represents a real energy production asset (oil field, refinery, etc.) tokenized as an Energy Production Token (EPT). When you stake in a pool, you earn yield from that specific asset\'s production revenue, verified by oracles.'
        },
        {
          q: 'How do I choose the best pool?',
          a: 'Consider: APY (higher = better returns), TVL (higher = more stable), production stage (exploration = higher risk/reward, established = stable), your risk tolerance, and lock duration preferences. Diversifying across multiple pools is recommended.'
        },
        {
          q: 'Can new pools be added?',
          a: 'Yes! BOIL\'s modular architecture allows new Energy Yield Pools to be deployed as new production projects are tokenized. Community governance (DAO) votes on adding new pools to ensure quality and sustainability.'
        }
      ]
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-boil-dark via-boil-darker to-boil-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="badge-info">HELP CENTER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text-premium">Frequently Asked Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about BOIL staking and energy yield pools
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {faqs.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-boil-primary/10 flex items-center justify-center mr-4">
                    <CategoryIcon className="text-boil-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex
                    const isOpen = openIndex === globalIndex

                    return (
                      <div
                        key={faqIndex}
                        className="energy-card-premium cursor-pointer"
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold pr-8">{faq.q}</h4>
                          <ChevronDown
                            className={`text-boil-primary flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            size={24}
                          />
                        </div>

                        {isOpen && (
                          <div className="mt-4 pt-4 border-t border-boil-border">
                            <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Support */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="glass-card p-8 text-center">
            <Globe className="w-16 h-16 text-boil-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-400 mb-6">
              Our support team is available 24/7 to help you with any questions or issues
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary px-8 py-3">
                Contact Support
              </button>
              <button className="btn-outline px-8 py-3">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
