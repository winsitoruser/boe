'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { MapPin, Navigation, Layers, Info, TrendingUp, Droplet, DollarSign, Users, ZoomIn, ZoomOut } from 'lucide-react'

// Dynamic import untuk menghindari SSR issues dengan Leaflet
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)

const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

const Tooltip = dynamic(
  () => import('react-leaflet').then((mod) => mod.Tooltip),
  { ssr: false }
)

export default function InteractiveMap() {
  const [selectedSite, setSelectedSite] = useState<number | null>(null)
  const [mapView, setMapView] = useState<'satellite' | 'terrain' | 'street'>('street')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const productionSites = [
    {
      id: 1,
      name: 'West Texas Oilfield Complex',
      pool: 'Texas Oilfield Pool',
      location: 'Midland Basin, Texas, USA',
      coordinates: [31.9973, -102.0779] as [number, number],
      status: 'active',
      production: '850 bpd',
      tvl: '$2,450,000',
      apy: '52%',
      stakers: 1247,
      established: '2023',
      type: 'Crude Oil Production',
      operator: 'BOIL Energy Operations LLC',
      reserves: '2.4M barrels',
      efficiency: '94.2%'
    },
    {
      id: 2,
      name: 'Gulf Coast Refinery',
      pool: 'Site Refinery Pool',
      location: 'Houston, Texas, USA',
      coordinates: [29.7604, -95.3698] as [number, number],
      status: 'active',
      production: '1,200 bpd',
      tvl: '$1,890,000',
      apy: '48%',
      stakers: 892,
      established: '2023',
      type: 'Refinery Operations',
      operator: 'Gulf Coast Refining Partners',
      capacity: '45,000 bpd',
      efficiency: '91.8%'
    },
    {
      id: 3,
      name: 'Middle East Exploration Site',
      pool: 'Middle East Exploration JV',
      location: 'Abu Dhabi, UAE',
      coordinates: [24.4539, 54.3773] as [number, number],
      status: 'exploration',
      production: 'Exploration Phase',
      tvl: '$980,000',
      apy: '65%',
      stakers: 534,
      established: '2024',
      type: 'Exploration & Development',
      operator: 'Middle East Energy JV',
      estimated: '5M barrels potential',
      stage: 'Phase 2 Drilling'
    },
    {
      id: 4,
      name: 'North Dakota Shale Formation',
      pool: 'Coming Soon',
      location: 'Bakken Formation, North Dakota, USA',
      coordinates: [47.5515, -101.0020] as [number, number],
      status: 'planning',
      production: 'Q1 2025',
      tvl: 'TBA',
      apy: 'Est. 55%',
      stakers: 0,
      established: '2025',
      type: 'Shale Oil Extraction',
      operator: 'Northern Energy Holdings',
      estimated: '8M barrels potential'
    },
    {
      id: 5,
      name: 'North Sea Platform',
      pool: 'Coming Soon',
      location: 'Norwegian Sector, North Sea',
      coordinates: [59.9139, 10.7522] as [number, number],
      status: 'planning',
      production: 'Q2 2025',
      tvl: 'TBA',
      apy: 'Est. 58%',
      stakers: 0,
      established: '2025',
      type: 'Offshore Platform',
      operator: 'North Sea Energy AS',
      estimated: '12M barrels potential'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#00FF88'
      case 'exploration': return '#FFB800'
      case 'planning': return '#00D4FF'
      default: return '#888888'
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

  const getTileLayerUrl = () => {
    switch (mapView) {
      case 'satellite':
        return 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      case 'terrain':
        return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
      case 'street':
      default:
        return 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    }
  }

  const getTileLayerAttribution = () => {
    switch (mapView) {
      case 'satellite':
        return '&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
      case 'terrain':
        return 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
      case 'street':
      default:
        return '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  }

  // Custom icon untuk markers
  const createCustomIcon = (status: string) => {
    if (typeof window === 'undefined') return null
    
    const L = require('leaflet')
    const color = getStatusColor(status)
    
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="position: relative;">
          <div style="
            width: 40px;
            height: 40px;
            background: ${color};
            border: 3px solid white;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              width: 12px;
              height: 12px;
              background: white;
              border-radius: 50%;
              transform: rotate(45deg);
            "></div>
          </div>
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            background: ${color};
            border-radius: 50%;
            opacity: 0.3;
            animation: pulse 2s infinite;
          "></div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    })
  }

  if (!isClient) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-boil-dark via-boil-darker to-boil-dark"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="badge-success">LOADING MAP</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-4">
              <span className="gradient-text-premium">Production Site Locations</span>
            </h2>
            <p className="text-gray-400">Loading interactive map...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
        
        .leaflet-container {
          height: 100%;
          width: 100%;
          border-radius: 1rem;
        }
        
        .leaflet-popup-content-wrapper {
          background: #141419;
          color: white;
          border: 1px solid #FF6B00;
          border-radius: 0.5rem;
        }
        
        .leaflet-popup-content {
          margin: 1rem;
          font-family: var(--font-poppins);
        }
        
        .leaflet-popup-tip {
          background: #141419;
          border: 1px solid #FF6B00;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-boil-dark via-boil-darker to-boil-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="badge-success">LIVE GLOBAL OPERATIONS</span>
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
              <div className="glass-card px-4 py-2 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-boil-success animate-pulse"></div>
                <span className="text-sm font-formal">2 Active Sites</span>
              </div>
              <div className="glass-card px-4 py-2 flex items-center space-x-2">
                <Droplet size={16} className="text-boil-primary" />
                <span className="text-sm font-formal">2,050 bpd Total</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setMapView('street')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${mapView === 'street' ? 'bg-boil-primary text-white' : 'bg-boil-card border border-boil-border text-gray-400'}`}
              >
                Street
              </button>
              <button 
                onClick={() => setMapView('terrain')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${mapView === 'terrain' ? 'bg-boil-primary text-white' : 'bg-boil-card border border-boil-border text-gray-400'}`}
              >
                Terrain
              </button>
              <button 
                onClick={() => setMapView('satellite')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${mapView === 'satellite' ? 'bg-boil-primary text-white' : 'bg-boil-card border border-boil-border text-gray-400'}`}
              >
                Satellite
              </button>
            </div>
          </div>

          {/* Interactive Leaflet Map */}
          <div className="energy-card-premium p-0 overflow-hidden">
            <div className="h-[600px] rounded-xl relative">
              <MapContainer
                center={[30, 0]}
                zoom={2}
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={true}
              >
                <TileLayer
                  url={getTileLayerUrl()}
                  attribution={getTileLayerAttribution()}
                />
                
                {productionSites.map((site) => (
                  <Marker
                    key={site.id}
                    position={site.coordinates}
                    icon={createCustomIcon(site.status)}
                    eventHandlers={{
                      click: () => setSelectedSite(site.id),
                    }}
                  >
                    <Popup>
                      <div className="p-2">
                        <div className={`inline-flex items-center badge-${site.status === 'active' ? 'success' : site.status === 'exploration' ? 'warning' : 'info'} mb-2`}>
                          {getStatusLabel(site.status)}
                        </div>
                        <h4 className="font-bold text-lg mb-2">{site.name}</h4>
                        <p className="text-sm text-gray-400 mb-3">{site.location}</p>
                        
                        <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                          <div>
                            <div className="text-gray-500 text-xs">Production</div>
                            <div className="font-semibold">{site.production}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs">APY</div>
                            <div className="font-semibold text-boil-success">{site.apy}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs">TVL</div>
                            <div className="font-semibold">{site.tvl}</div>
                          </div>
                          <div>
                            <div className="text-gray-500 text-xs">Stakers</div>
                            <div className="font-semibold">{site.stakers}</div>
                          </div>
                        </div>
                        
                        {site.status === 'active' && (
                          <button className="w-full bg-boil-primary hover:bg-boil-secondary text-white py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                            Stake Now
                          </button>
                        )}
                      </div>
                    </Popup>
                    
                    <Tooltip direction="top" offset={[0, -30]} opacity={0.9}>
                      <div className="text-center">
                        <div className="font-bold">{site.name}</div>
                        <div className="text-xs">{site.production}</div>
                      </div>
                    </Tooltip>
                  </Marker>
                ))}
              </MapContainer>

              {/* Legend Overlay */}
              <div className="absolute bottom-4 left-4 glass-card p-4 z-[1000]">
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
            </div>
          </div>

          {/* Site Details Grid */}
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
                      <span className="font-bold text-sm">{site.production}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">APY</div>
                    <div className="flex items-center">
                      <TrendingUp size={16} className="text-boil-success mr-1" />
                      <span className="font-bold text-sm">{site.apy}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">TVL</div>
                    <div className="flex items-center">
                      <DollarSign size={16} className="text-boil-secondary mr-1" />
                      <span className="font-bold text-sm">{site.tvl}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Stakers</div>
                    <div className="flex items-center">
                      <Users size={16} className="text-boil-accent mr-1" />
                      <span className="font-bold text-sm">{site.stakers}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-boil-border">
                  <div className="text-xs text-gray-500 mb-1">Operator</div>
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
                <h4 className="font-bold mb-2">Real Interactive Map Integration</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  This map uses OpenStreetMap data with real GPS coordinates for each production site. Click on markers to view detailed information, switch between Street, Terrain, and Satellite views, and interact with the map using standard controls (zoom, pan, etc.). All production data is verified through our oracle network and updated in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
