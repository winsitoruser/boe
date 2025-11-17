'use client'

import { BarChart3, PieChart, Activity, CheckCircle } from 'lucide-react'

export default function RealYieldDashboard() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
            <span className="gradient-text">Real Yield Transparency</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every reward is backed by verifiable production data and on-chain proof
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Revenue Sources */}
            <div className="energy-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-boil-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <PieChart className="text-boil-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Revenue Distribution</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Staker Rewards</span>
                    <span className="font-semibold">50%</span>
                  </div>
                  <div className="w-full bg-boil-darker rounded-full h-3">
                    <div className="bg-gradient-to-r from-boil-primary to-boil-secondary h-3 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Buyback & Burn</span>
                    <span className="font-semibold">20%</span>
                  </div>
                  <div className="w-full bg-boil-darker rounded-full h-3">
                    <div className="bg-gradient-to-r from-boil-secondary to-boil-accent h-3 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Reinvestment</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="w-full bg-boil-darker rounded-full h-3">
                    <div className="bg-gradient-to-r from-boil-accent to-boil-success h-3 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Treasury Reserve</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="w-full bg-boil-darker rounded-full h-3">
                    <div className="bg-boil-success h-3 rounded-full" style={{width: '10%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">DAO & Grants</span>
                    <span className="font-semibold">5%</span>
                  </div>
                  <div className="w-full bg-boil-darker rounded-full h-3">
                    <div className="bg-boil-accent h-3 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Production Metrics */}
            <div className="energy-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-boil-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <BarChart3 className="text-boil-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Live Production Metrics</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-boil-darker rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Daily Production</div>
                  <div className="text-2xl font-bold text-boil-primary">2,850 bpd</div>
                  <div className="text-xs text-boil-success mt-1">+12.5% from last month</div>
                </div>
                <div className="bg-boil-darker rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Last Revenue Cycle</div>
                  <div className="text-2xl font-bold text-boil-secondary">$1,247,000</div>
                  <div className="text-xs text-gray-400 mt-1">Verified on-chain</div>
                </div>
                <div className="bg-boil-darker rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">Next Distribution</div>
                  <div className="text-2xl font-bold text-boil-accent">7 days</div>
                  <div className="text-xs text-gray-400 mt-1">Estimated: $623,500</div>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="energy-card text-center">
              <div className="w-16 h-16 bg-boil-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-boil-primary" size={32} />
              </div>
              <h4 className="font-bold mb-2">Oracle Verified</h4>
              <p className="text-sm text-gray-400">Multi-signature data verification from licensed operators</p>
            </div>
            <div className="energy-card text-center">
              <div className="w-16 h-16 bg-boil-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="text-boil-secondary" size={32} />
              </div>
              <h4 className="font-bold mb-2">Real-Time Updates</h4>
              <p className="text-sm text-gray-400">Production and revenue data updated every 24 hours</p>
            </div>
            <div className="energy-card text-center">
              <div className="w-16 h-16 bg-boil-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="text-boil-accent" size={32} />
              </div>
              <h4 className="font-bold mb-2">Public Audits</h4>
              <p className="text-sm text-gray-400">All smart contracts and treasuries audited by CertiK</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
