'use client'

import { Wallet, Lock, TrendingUp, RefreshCw } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-boil-darker/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text">How It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Four simple steps to start earning real yield from energy production
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="energy-card text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-boil-primary to-boil-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float">
                  <Wallet className="text-white" size={36} />
                </div>
                <div className="text-4xl font-bold text-boil-primary mb-3">01</div>
                <h3 className="text-xl font-bold mb-3">Connect Wallet</h3>
                <p className="text-sm text-gray-400">
                  Connect your Web3 wallet to the BOIL staking platform
                </p>
              </div>
              {/* Connector Line - Hidden on mobile */}
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-boil-primary to-transparent"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="energy-card text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-boil-secondary to-boil-accent rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float" style={{animationDelay: '0.5s'}}>
                  <Lock className="text-white" size={36} />
                </div>
                <div className="text-4xl font-bold text-boil-secondary mb-3">02</div>
                <h3 className="text-xl font-bold mb-3">Choose Pool & Lock</h3>
                <p className="text-sm text-gray-400">
                  Select an Energy Yield Pool and lock duration for higher multipliers
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-boil-secondary to-transparent"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="energy-card text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-boil-accent to-boil-success rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float" style={{animationDelay: '1s'}}>
                  <TrendingUp className="text-white" size={36} />
                </div>
                <div className="text-4xl font-bold text-boil-accent mb-3">03</div>
                <h3 className="text-xl font-bold mb-3">Earn Real Yield</h3>
                <p className="text-sm text-gray-400">
                  Your stBOIL accrues yield from verified energy production revenues
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-boil-accent to-transparent"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="energy-card text-center h-full">
                <div className="w-20 h-20 bg-gradient-to-br from-boil-success to-boil-primary rounded-2xl flex items-center justify-center mx-auto mb-6 animate-float" style={{animationDelay: '1.5s'}}>
                  <RefreshCw className="text-white" size={36} />
                </div>
                <div className="text-4xl font-bold text-boil-success mb-3">04</div>
                <h3 className="text-xl font-bold mb-3">Claim or Compound</h3>
                <p className="text-sm text-gray-400">
                  Claim rewards in USDT or restake to compound your returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block bg-boil-card border border-boil-primary/50 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Earning?</h3>
            <p className="text-gray-400 mb-6">
              Join thousands of BOIL stakers earning real yield from energy production
            </p>
            <button className="btn-primary text-lg px-10 py-4">
              Start Staking Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
