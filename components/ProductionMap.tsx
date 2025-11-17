'use client'

import { useState } from 'react'
import { MapPin, Navigation, Layers, Info, TrendingUp, Droplet, DollarSign, Users } from 'lucide-react'

export default function ProductionMap() {
  const [selectedSite, setSelectedSite] = useState<number | null>(null)
  const [mapView, setMapView] = useState<'satellite' | 'terrain' | 'street'>('satellite')

  const productionSites = [
    {
      id: 1,
      name: 'West Texas Oilfield Complex',
      pool: 'Texas Oilfield Pool',
      location: 'Midland Basin, Texas, USA',
      coordinates: { lat: 31.9973, lng: -102.0779 },
      status: 'active',
      production: '850 bpd',
      tvl: '$2,450,000',
      apy: '52%',
      stakers: 1247,
      established: '2023',
      type: 'Crude Oil Production',
      mapPosition: { x: 28, y: 45 }, // Percentage position on map
      operator: 'BOIL Energy Operations LLC',
      reserves: '2.4M barrels',
      efficiency: '94.2%'
    },
    {
      id: 2,
      name: 'Gulf Coast Refinery',
      pool: 'Site Refinery Pool',
      location: 'Houston, Texas, USA',
      coordinates: { lat: 29.7604, lng: -95.3698 },
      status: 'active',
      production: '1,200 bpd',
      tvl: '$1,890,000',
      apy: '48%',
      stakers: 892,
      established: '2023',
      type: 'Refinery Operations',
      mapPosition: { x: 32, y: 52 },
      operator: 'Gulf Coast Refining Partners',
      capacity: '45,000 bpd',
      efficiency: '91.8%'
    },
    {
      id: 3,
      name: 'Middle East Exploration Site',
      pool: 'Middle East Exploration JV',
      location: 'Abu Dhabi, UAE',
      coordinates: { lat: 24.4539, lng: 54.3773 },
      status: 'exploration',
      production: 'Exploration Phase',
      tvl: '$980,000',
      apy: '65%',
      stakers: 534,
      established: '2024',
      type: 'Exploration & Development',
      mapPosition: { x: 62, y: 48 },
      operator: 'Middle East Energy JV',
      estimated: '5M barrels potential',
      stage: 'Phase 2 Drilling'
    },
    {
      id: 4,
      name: 'North Dakota Shale Formation',
      pool: 'Coming Soon',
      location: 'Bakken Formation, North Dakota, USA',
      coordinates: { lat: 47.5515, lng: -101.0020 },
      status: 'planning',
      production: 'Q1 2025',
      tvl: 'TBA',
      apy: 'Est. 55%',
      stakers: 0,
      established: '2025',
      type: 'Shale Oil Extraction',
      mapPosition: { x: 30, y: 28 },
      operator: 'Northern Energy Holdings',
      estimated: '8M barrels potential'
    },
    {
      id: 5,
      name: 'North Sea Platform',
      pool: 'Coming Soon',
      location: 'Norwegian Sector, North Sea',
      coordinates: { lat: 59.9139, lng: 10.7522 },
      status: 'planning',
      production: 'Q2 2025',
      tvl: 'TBA',
      apy: 'Est. 58%',
      stakers: 0,
      established: '2025',
      type: 'Offshore Platform',
      mapPosition: { x: 52, y: 22 },
      operator: 'North Sea Energy AS',
      estimated: '12M barrels potential'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'boil-success'
      case 'exploration': return 'boil-secondary'
      case 'planning': return 'boil-accent'
      default: return 'gray-500'
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Active Production'
      case 'exploration': return 'Exploration Phase'
      case 'planning': return 'Planned'
      default: return 'Unknown'
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-boil-dark via-boil-darker to-boil-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="badge-success">GLOBAL OPERATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            <span className="gradient-text-premium">Production Site Locations</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time geographic visualization of BOIL's energy production assets worldwide
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Map Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <button className="btn-outline px-4 py-2 text-sm">
                <Navigation size={16} className="inline mr-2" />
                Recenter Map
              </button>
              <button className="btn-outline px-4 py-2 text-sm">
                <Layers size={16} className="inline mr-2" />
                Toggle Layers
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setMapView('satellite')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${mapView === 'satellite' ? 'bg-boil-primary text-white' : 'bg-boil-card border border-boil-border text-gray-400'}`}
              >
                Satellite
              </button>
              <button 
                onClick={() => setMapView('terrain')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${mapView === 'terrain' ? 'bg-boil-primary text-white' : 'bg-boil-card border border-boil-border text-gray-400'}`}
              >
                Terrain
              </button>
              <button 
                onClick={() => setMapView('street')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${mapView === 'street' ? 'bg-boil-primary text-white' : 'bg-boil-card border border-boil-border text-gray-400'}`}
              >
                Street
              </button>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="energy-card-premium p-0 overflow-hidden">
            <div className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-gray-900 aspect-video rounded-xl">
              {/* World Map Background Simulation */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  {/* Simplified world map continents */}
                  <path d="M 100 250 L 150 200 L 200 180 L 250 190 L 300 220 L 280 270 L 200 280 Z" fill="#1e293b" />
                  <path d="M 450 150 L 550 120 L 650 140 L 700 180 L 720 220 L 680 250 L 600 240 L 500 200 Z" fill="#1e293b" />
                  <path d="M 600 280 L 700 300 L 750 340 L 720 380 L 650 370 L 600 340 Z" fill="#1e293b" />
                  <path d="M 200 320 L 280 350 L 300 400 L 250 420 L 180 400 Z" fill="#1e293b" />
                </svg>
              </div>

              {/* Grid Lines */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                  <div key={`h-${i}`} className="absolute w-full border-t border-blue-400" style={{top: `${i * 5}%`}} />
                ))}
                {[...Array(20)].map((_, i) => (
                  <div key={`v-${i}`} className="absolute h-full border-l border-blue-400" style={{left: `${i * 5}%`}} />
                ))}
              </div>

              {/* Production Site Markers */}
              {productionSites.map((site) => (
                <div
                  key={site.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  style={{ 
                    left: `${site.mapPosition.x}%`, 
                    top: `${site.mapPosition.y}%` 
                  }}
                  onClick={() => setSelectedSite(site.id)}
                >
                  {/* Pulse Ring */}
                  <div className={`absolute inset-0 -m-4 w-8 h-8 rounded-full bg-${getStatusColor(site.status)} opacity-50 animate-ping`}></div>
                  
                  {/* Marker Dot */}
                  <div className={`relative w-4 h-4 rounded-full bg-${getStatusColor(site.status)} border-2 border-white shadow-lg group-hover:scale-150 transition-transform`}>
                    <div className="absolute inset-0 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Marker Pin */}
                  <MapPin 
                    className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-${getStatusColor(site.status)} group-hover:scale-125 transition-transform drop-shadow-lg`}
                    size={32}
                    fill="currentColor"
                  />

                  {/* Quick Info Tooltip */}
                  <div className="absolute left-8 -top-2 bg-boil-card border border-boil-primary rounded-lg px-3 py-2 min-w-max opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-2xl">
                    <div className="text-xs font-bold text-white mb-1">{site.name}</div>
                    <div className="text-xs text-gray-400">{site.location}</div>
                    <div className="text-xs text-boil-primary mt-1">{site.production}</div>
                  </div>
                </div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 glass-card p-4">
                <div className="text-xs font-bold mb-2 text-gray-300">Site Status</div>
                <div className="space-y-1">
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 rounded-full bg-boil-success mr-2"></div>
                    <span className="text-gray-400">Active Production</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 rounded-full bg-boil-secondary mr-2"></div>
                    <span className="text-gray-400">Exploration</span>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="w-3 h-3 rounded-full bg-boil-accent mr-2"></div>
                    <span className="text-gray-400">Planned</span>
                  </div>
                </div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute top-4 right-4 glass-card p-4">
                <div className="text-sm font-bold mb-2 gradient-text">Global Stats</div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Active Sites:</span>
                    <span className="font-bold text-boil-success">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Production:</span>
                    <span className="font-bold text-boil-primary">2,050 bpd</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Countries:</span>
                    <span className="font-bold text-boil-accent">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Site Details Panel */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {productionSites.slice(0, 3).map((site) => (
              <div
                key={site.id}
                className={`energy-card-premium cursor-pointer transition-all ${selectedSite === site.id ? 'ring-2 ring-boil-primary' : ''}`}
                onClick={() => setSelectedSite(site.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className={`inline-flex items-center badge-${site.status === 'active' ? 'success' : site.status === 'exploration' ? 'warning' : 'info'} mb-2`}>
                      {getStatusLabel(site.status)}
                    </div>
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
                      <Droplet size={16} className="text-boil-primary mr-1" />
                      <span className="font-bold">{site.production}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">APY</div>
                    <div className="flex items-center">
                      <TrendingUp size={16} className="text-boil-success mr-1" />
                      <span className="font-bold">{site.apy}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">TVL</div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="text-boil-secondary mr-1" />
                      <span className="font-bold">{site.tvl}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Stakers</div>
                    <div className="flex items-center">
                      <Users size={16} className="text-boil-accent mr-1" />
                      <span className="font-bold">{site.stakers}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-boil-border">
                  <div className="text-xs text-gray-500 mb-2">Operator</div>
                  <div className="text-sm font-semibold text-gray-300">{site.operator}</div>
                </div>

                {selectedSite === site.id && site.status === 'active' && (
                  <div className="mt-4">
                    <button className="btn-primary w-full py-2 text-sm">
                      Stake in {site.pool}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Info Banner */}
          <div className="mt-8 glass-card p-6">
            <div className="flex items-start">
              <Info className="text-boil-accent mr-4 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold mb-2">Interactive Production Map</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  This map shows the real-world locations of BOIL's energy production assets. Each marker represents a verified site with ongoing or planned operations. Click on markers to view detailed information about production capacity, TVL, and staking opportunities. All data is verified through our oracle network and updated in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
