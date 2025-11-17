'use client'

import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import AdvancedStats from '@/components/AdvancedStats'
import StakingOverview from '@/components/StakingOverview'
import EnergyYieldPools from '@/components/EnergyYieldPools'
import RealLiteMap from '@/components/RealLiteMap'
import RealYieldDashboard from '@/components/RealYieldDashboard'
import NFTBoostSection from '@/components/NFTBoostSection'
import HowItWorks from '@/components/HowItWorks'
import TeamPartners from '@/components/TeamPartners'
import Testimonials from '@/components/Testimonials'
import Roadmap from '@/components/Roadmap'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <StatsSection />
      <AdvancedStats />
      <StakingOverview />
      <EnergyYieldPools />
      <RealLiteMap />
      <RealYieldDashboard />
      <NFTBoostSection />
      <HowItWorks />
      <TeamPartners />
      <Testimonials />
      <Roadmap />
      <FAQSection />
    </div>
  )
}
