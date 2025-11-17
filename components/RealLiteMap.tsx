'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, TrendingUp, Droplet, DollarSign, Users, Globe, Maximize2, Minimize2, Building2, Landmark } from 'lucide-react'

// Dynamic import untuk Pigeon Maps (lightweight alternative)
const Map = dynamic(() => import('pigeon-maps').then((mod) => mod.Map), { ssr: false })
const Marker = dynamic(() => import('pigeon-maps').then((mod) => mod.Marker), { ssr: false })

export default function RealLiteMap() {
  const [selectedSite, setSelectedSite] = useState<number | null>(1)
  const [center, setCenter] = useState<[number, number]>([-2.5, 120])
  const [zoom, setZoom] = useState(5)
  const [mapProvider, setMapProvider] = useState('terrain')

  // Custom tile providers for geological/mining maps
  const tileProviders: { [key: string]: (x: number, y: number, z: number) => string } = {
    terrain: (x, y, z) => `https://tile.opentopomap.org/${z}/${x}/${y}.png`,
    satellite: (x, y, z) => `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`,
    geology: (x, y, z) => `https://tile.openstreetmap.org/${z}/${x}/${y}.png`
  }

  const productionSites = [
    {
      id: 1,
      name: 'South Sumatra Energy Block',
      location: 'Sumatera Selatan, Indonesia',
      coordinates: [-3.3194, 104.9145] as [number, number],
      status: 'active',
      production: '1,850 bpd',
      tvl: '$3.2M',
      apy: '58%',
      stakers: 1847,
      pool: 'Sumatra Oil & Gas Pool',
      region: 'Southeast Asia',
      operator: 'BOIL Energy Indonesia',
    },
    {
      id: 2,
      name: 'Riau Production Field',
      location: 'Riau Province, Indonesia',
      coordinates: [0.5071, 101.4478] as [number, number],
      status: 'active',
      production: '2,100 bpd',
      tvl: '$4.1M',
      apy: '62%',
      stakers: 2156,
      pool: 'Riau Energy Pool',
      region: 'Southeast Asia',
      operator: 'BOIL Energy Indonesia',
    },
    {
      id: 3,
      name: 'Papua New Guinea LNG Project',
      location: 'Papua New Guinea',
      coordinates: [-6.3150, 143.9555] as [number, number],
      status: 'exploration',
      production: 'Phase 2 Development',
      tvl: '$1.8M',
      apy: '75%',
      stakers: 892,
      pool: 'PNG Gas Reserve Pool',
      region: 'Pacific',
      operator: 'BOIL Pacific Energy JV',
    },
  ]

  const getStatusColor = (status: string) => {
    return status === 'active' ? '#00FF88' : '#FFB800'
  }

  const selectedSiteData = productionSites.find(s => s.id === selectedSite)

  const handleMarkerClick = (siteId: number, coords: [number, number]) => {
    setSelectedSite(siteId)
    setCenter(coords)
    setZoom(6)
  }

  const resetView = () => {
    setCenter([-2.5, 120])
    setZoom(5)
  }

  return (
    <section className="py-20 bg-boil-darker/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="badge-success mb-3 inline-block">GEOLOGICAL SURVEY MAP</span>
          <h2 className="text-4xl md:text-5xl font-heading mb-4">
            <span className="gradient-text">Energy Resource Locations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-mono text-sm">
            Technical geological survey map showing verified energy production sites across Southeast Asia & Pacific region
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Real Interactive Map */}
          <div className="energy-card p-0 mb-8 overflow-hidden">
            {/* Map Controls */}
            <div className="flex items-center justify-between p-4 bg-boil-darker border-b border-boil-border">
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-semibold font-mono">BOIL Energy Geological Survey</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <select
                    value={mapProvider}
                    onChange={(e) => setMapProvider(e.target.value)}
                    className="text-xs bg-boil-card border border-boil-border rounded-lg px-2 py-1 text-gray-300 hover:border-primary transition-colors cursor-pointer"
                  >
                    <option value="terrain">⛰️ Terrain/Topo</option>
                    <option value="satellite">🛰️ Satellite</option>
                    <option value="geology">🗺️ Geological</option>
                  </select>
                  <button 
                    onClick={resetView}
                    className="flex items-center space-x-1 text-xs text-gray-400 hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-boil-card border border-boil-border"
                  >
                    <Maximize2 size={14} />
                    <span>Reset</span>
                  </button>
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
            </div>

            {/* Pigeon Maps Container */}
            <div className="relative h-[500px] bg-boil-dark border-2 border-amber-900/30" style={{ boxShadow: 'inset 0 0 30px rgba(180, 83, 9, 0.2)' }}>
              <Map
                center={center}
                zoom={zoom}
                provider={tileProviders[mapProvider]}
                onBoundsChanged={({ center, zoom }) => {
                  setCenter(center)
                  setZoom(zoom)
                }}
                mouseEvents={true}
                touchEvents={true}
                attribution={false}
              >
                {productionSites.map((site) => (
                  <Marker
                    key={site.id}
                    anchor={site.coordinates}
                    onClick={() => handleMarkerClick(site.id, site.coordinates)}
                  >
                    <div className="relative cursor-pointer group">
                      {/* Pulse Effect Behind Icon */}
                      <div 
                        className="absolute inset-0 -m-3 w-12 h-12 rounded-full animate-ping"
                        style={{ backgroundColor: getStatusColor(site.status), opacity: 0.4, animationDuration: '1.5s' }}
                      ></div>
                      
                      {/* Professional Corporate Pin */}
                      <div className="relative flex flex-col items-center">
                        {/* Pin Icon */}
                        <MapPin
                          className={`transition-all duration-300 ${selectedSite === site.id ? 'scale-150' : 'group-hover:scale-125'}`}
                          size={36}
                          strokeWidth={2.5}
                          fill={getStatusColor(site.status)}
                          style={{ 
                            color: getStatusColor(site.status),
                            filter: `drop-shadow(0 2px 8px rgba(0,0,0,0.4)) drop-shadow(0 0 12px ${getStatusColor(site.status)})`
                          }}
                        />
                        
                        {/* Facility Icon Inside Pin */}
                        <div className="absolute top-1.5">
                          {site.id === 3 ? (
                            <Landmark 
                              size={14}
                              strokeWidth={2.5}
                              className="text-white"
                            />
                          ) : (
                            <Building2 
                              size={14}
                              strokeWidth={2.5}
                              className="text-white"
                            />
                          )}
                        </div>
                      </div>

                      {/* Enhanced Tooltip */}
                      <div className="absolute left-10 -top-2 bg-gradient-to-br from-boil-card to-boil-darker border-2 border-boil-primary rounded-xl px-4 py-3 min-w-max opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl z-50 transform group-hover:translate-x-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <MapPin size={16} className="text-primary" fill="currentColor" />
                          <div className="text-sm font-bold">{site.name}</div>
                        </div>
                        <div className="text-xs text-gray-400 mb-1 flex items-center">
                          <Globe size={10} className="mr-1" />
                          {site.location}
                        </div>
                        <div className="flex items-center space-x-3 text-xs">
                          <span className="text-primary font-bold">{site.apy} APY</span>
                          <span className="text-gray-400">{site.production}</span>
                        </div>
                        {site.status === 'active' && (
                          <div className="mt-2 pt-2 border-t border-boil-border text-xs">
                            <span className="text-boil-success">● Live Production</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Marker>
                ))}
              </Map>

              {/* Active Site Info Panel */}
              {selectedSiteData && (
                <div className="absolute bottom-4 left-4 right-4 bg-boil-card/95 backdrop-blur-sm border border-boil-primary rounded-xl p-4 shadow-2xl">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden"
                        style={{ backgroundColor: getStatusColor(selectedSiteData.status) }}
                      >
                        <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: getStatusColor(selectedSiteData.status), opacity: 0.5 }}></div>
                        <MapPin className="text-white relative z-10" size={24} fill="currentColor" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{selectedSiteData.name}</h4>
                        <p className="text-xs text-gray-400 flex items-center">
                          <Globe size={12} className="mr-1" />
                          {selectedSiteData.location}
                        </p>
                      </div>
                    </div>
                    <span className={`badge-${selectedSiteData.status === 'active' ? 'success' : 'warning'} text-xs`}>
                      {selectedSiteData.status.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-boil-darker rounded-lg p-2">
                      <div className="text-xs text-gray-500 mb-1">APY</div>
                      <div className="text-sm font-bold text-primary">{selectedSiteData.apy}</div>
                    </div>
                    <div className="bg-boil-darker rounded-lg p-2">
                      <div className="text-xs text-gray-500 mb-1">Production</div>
                      <div className="text-sm font-bold">{selectedSiteData.production}</div>
                    </div>
                    <div className="bg-boil-darker rounded-lg p-2">
                      <div className="text-xs text-gray-500 mb-1">TVL</div>
                      <div className="text-sm font-bold text-secondary">{selectedSiteData.tvl}</div>
                    </div>
                    <div className="bg-boil-darker rounded-lg p-2">
                      <div className="text-xs text-gray-500 mb-1">Stakers</div>
                      <div className="text-sm font-bold text-accent">{selectedSiteData.stakers}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Map Attribution */}
            <div className="px-4 py-2 bg-boil-darker border-t border-boil-border text-xs text-gray-500 flex items-center justify-between">
              <div>
                <span className="text-primary font-semibold">Geological Survey Map</span> | 
                {mapProvider === 'terrain' && ' OpenTopoMap'}
                {mapProvider === 'satellite' && ' Esri World Imagery'}
                {mapProvider === 'geology' && ' OpenStreetMap'}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs">Scale 1:{Math.round(591657550.5 / Math.pow(2, zoom))}m</span>
              </div>
            </div>
          </div>

          {/* Site Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productionSites.map((site) => (
              <div
                key={site.id}
                className={`energy-card cursor-pointer ${selectedSite === site.id ? 'border-boil-primary' : ''}`}
                onClick={() => handleMarkerClick(site.id, site.coordinates)}
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
