'use client'

import { useState } from 'react'
import { MapPin, TrendingUp, Droplet, DollarSign, Users, Globe, Navigation2 } from 'lucide-react'

export default function LiteMap() {
  const [selectedSite, setSelectedSite] = useState<number | null>(1)

  const productionSites = [
    {
      id: 1,
      name: 'South Sumatra Energy Block',
      location: 'Sumatera Selatan, Indonesia',
      coordinates: { lat: -3.3194, lng: 104.9145 },
      status: 'active',
      production: '1,850 bpd',
      tvl: '$3.2M',
      apy: '58%',
      stakers: 1847,
      pool: 'Sumatra Oil & Gas Pool',
    },
    {
      id: 2,
      name: 'Riau Production Field',
      location: 'Riau Province, Indonesia',
      coordinates: { lat: 0.5071, lng: 101.4478 },
      status: 'active',
      production: '2,100 bpd',
      tvl: '$4.1M',
      apy: '62%',
      stakers: 2156,
      pool: 'Riau Energy Pool',
    },
    {
      id: 3,
      name: 'Papua New Guinea LNG',
      location: 'Papua New Guinea',
      coordinates: { lat: -6.3150, lng: 143.9555 },
      status: 'exploration',
      production: 'Phase 2 Development',
      tvl: '$1.8M',
      apy: '75%',
      stakers: 892,
      pool: 'PNG Gas Reserve Pool',
    },
  ]

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'boil-success' : 'boil-secondary'
  }

  const selectedSiteData = productionSites.find(s => s.id === selectedSite)

  return (
    <section className="py-20 bg-boil-darker/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge-success mb-3 inline-block">GLOBAL OPERATIONS</span>
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            <span className="gradient-text">Production Sites</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real energy production assets worldwide
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Professional Lite Map */}
          <div className="energy-card p-0 mb-8 overflow-hidden">
            {/* Map Controls */}
            <div className="flex items-center justify-between p-4 bg-boil-darker border-b border-boil-border">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-semibold">Global Production Sites</span>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-boil-success"></div>
                  <span className="text-gray-400">Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-boil-secondary"></div>
                  <span className="text-gray-400">Exploration</span>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-boil-darker via-boil-dark to-boil-darker h-[500px] overflow-hidden">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(rgba(255,107,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.1) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }}></div>
              </div>

              {/* Enhanced World Map SVG */}
              <svg viewBox="0 0 1000 500" className="w-full h-full absolute inset-0 opacity-30">
                {/* North America */}
                <path d="M 180 140 L 220 110 L 270 100 L 310 110 L 340 130 L 350 170 L 340 210 L 320 240 L 280 250 L 240 260 L 210 250 L 190 220 L 180 180 Z" 
                  fill="#2A2A35" stroke="#FF6B00" strokeWidth="0.5" />
                
                {/* South America */}
                <path d="M 280 280 L 300 270 L 320 280 L 330 310 L 340 350 L 330 390 L 310 420 L 285 410 L 270 380 L 265 340 L 270 310 Z" 
                  fill="#2A2A35" stroke="#FF6B00" strokeWidth="0.5" />
                
                {/* Europe */}
                <path d="M 480 130 L 520 120 L 560 125 L 580 145 L 570 170 L 550 185 L 520 180 L 490 165 Z" 
                  fill="#2A2A35" stroke="#FF6B00" strokeWidth="0.5" />
                
                {/* Africa */}
                <path d="M 480 210 L 520 200 L 560 210 L 590 240 L 595 280 L 585 330 L 560 360 L 530 370 L 500 360 L 480 330 L 475 280 L 478 240 Z" 
                  fill="#2A2A35" stroke="#FF6B00" strokeWidth="0.5" />
                
                {/* Middle East */}
                <path d="M 590 190 L 620 185 L 650 195 L 665 215 L 660 240 L 640 250 L 615 245 L 595 230 Z" 
                  fill="#2A2A35" stroke="#FF6B00" strokeWidth="0.5" />
                
                {/* Asia */}
                <path d="M 650 120 L 720 110 L 790 120 L 840 140 L 870 170 L 880 210 L 870 250 L 840 270 L 790 280 L 740 275 L 690 260 L 660 230 L 650 190 Z" 
                  fill="#2A2A35" stroke="#FF6B00" strokeWidth="0.5" />
                
                {/* Australia */}
                <path d="M 780 350 L 820 345 L 860 355 L 880 380 L 870 410 L 840 420 L 800 415 L 770 395 Z" 
                  fill="#2A2A35" stroke="#FF6B00" strokeWidth="0.5" />
              </svg>

              {/* Animated Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#FF6B00', stopOpacity: 0}} />
                    <stop offset="50%" style={{stopColor: '#FF6B00', stopOpacity: 0.5}} />
                    <stop offset="100%" style={{stopColor: '#FF6B00', stopOpacity: 0}} />
                  </linearGradient>
                </defs>
                <line x1="280" y1="225" x2="320" y2="260" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
                <line x1="320" y1="260" x2="630" y2="240" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.3" />
              </svg>

              {/* Enhanced Site Markers */}
              {productionSites.map((site, index) => {
                const positions = [
                  { top: '45%', left: '28%' },  // Texas
                  { top: '52%', left: '32%' },  // Houston
                  { top: '48%', left: '62%' },  // Middle East
                ]
                const pos = positions[index]
                const isActive = selectedSite === site.id
                
                return (
                  <div
                    key={site.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ top: pos.top, left: pos.left }}
                    onClick={() => setSelectedSite(site.id)}
                  >
                    {/* Pulse Ring */}
                    <div className={`absolute inset-0 -m-6 w-12 h-12 rounded-full animate-ping ${site.status === 'active' ? 'bg-boil-success' : 'bg-boil-secondary'} opacity-40`}></div>
                    
                    {/* Outer Ring */}
                    <div className={`absolute inset-0 -m-4 w-8 h-8 rounded-full border-2 ${isActive ? 'border-boil-primary' : site.status === 'active' ? 'border-boil-success' : 'border-boil-secondary'} ${isActive ? 'scale-150' : 'scale-100'} transition-transform`}></div>
                    
                    {/* Main Marker */}
                    <div className={`relative w-6 h-6 rounded-full ${site.status === 'active' ? 'bg-boil-success' : 'bg-boil-secondary'} border-2 border-white shadow-lg group-hover:scale-125 transition-transform ${isActive ? 'scale-125' : ''}`}>
                      <div className="absolute inset-0 rounded-full animate-pulse"></div>
                    </div>
                    
                    {/* Pin */}
                    <Navigation2 
                      className={`absolute -top-8 left-1/2 transform -translate-x-1/2 ${site.status === 'active' ? 'text-boil-success' : 'text-boil-secondary'} drop-shadow-lg`}
                      size={24}
                      fill="currentColor"
                    />

                    {/* Hover Tooltip */}
                    <div className="absolute left-10 -top-4 bg-boil-card border border-boil-primary rounded-lg px-4 py-2 min-w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl z-10">
                      <div className="text-sm font-bold mb-1">{site.name}</div>
                      <div className="text-xs text-gray-400">{site.location}</div>
                      <div className="text-xs text-primary mt-1">{site.apy} APY • {site.production}</div>
                    </div>
                  </div>
                )
              })}

              {/* Active Site Info Panel */}
              {selectedSiteData && (
                <div className="absolute bottom-6 left-6 right-6 bg-boil-card/95 backdrop-blur-sm border border-boil-primary rounded-xl p-6 shadow-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full ${selectedSiteData.status === 'active' ? 'bg-boil-success' : 'bg-boil-secondary'} flex items-center justify-center`}>
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-1">{selectedSiteData.name}</h4>
                        <p className="text-sm text-gray-400 flex items-center">
                          <Globe size={14} className="mr-1" />
                          {selectedSiteData.location}
                        </p>
                      </div>
                    </div>
                    <span className={`badge-${selectedSiteData.status === 'active' ? 'success' : 'warning'} text-xs`}>
                      {selectedSiteData.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-boil-darker rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">APY</div>
                      <div className="text-lg font-bold text-primary">{selectedSiteData.apy}</div>
                    </div>
                    <div className="bg-boil-darker rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Production</div>
                      <div className="text-lg font-bold">{selectedSiteData.production}</div>
                    </div>
                    <div className="bg-boil-darker rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">TVL</div>
                      <div className="text-lg font-bold text-secondary">{selectedSiteData.tvl}</div>
                    </div>
                    <div className="bg-boil-darker rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Stakers</div>
                      <div className="text-lg font-bold text-accent">{selectedSiteData.stakers}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Site Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productionSites.map((site) => (
              <div
                key={site.id}
                className={`energy-card cursor-pointer ${selectedSite === site.id ? 'border-boil-primary' : ''}`}
                onClick={() => setSelectedSite(site.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className={`badge-${site.status === 'active' ? 'success' : 'warning'} mb-2`}>
                      {site.status}
                    </span>
                    <h4 className="font-bold text-lg mb-1">{site.name}</h4>
                    <p className="text-sm text-gray-400 flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {site.location}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Production</div>
                    <div className="flex items-center">
                      <Droplet size={16} className="text-primary mr-1" />
                      <span className="font-semibold text-sm">{site.production}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">APY</div>
                    <div className="flex items-center">
                      <TrendingUp size={16} className="text-success mr-1" />
                      <span className="font-semibold text-sm text-primary">{site.apy}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">TVL</div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="text-secondary mr-1" />
                      <span className="font-semibold text-sm">{site.tvl}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Stakers</div>
                    <div className="flex items-center">
                      <Users size={16} className="text-accent mr-1" />
                      <span className="font-semibold text-sm">{site.stakers}</span>
                    </div>
                  </div>
                </div>

                {site.status === 'active' && (
                  <button className="btn-primary w-full py-2 text-sm">
                    Stake in {site.pool}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
