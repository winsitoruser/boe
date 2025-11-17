'use client'

import { Shield, Award, CheckCircle2, Linkedin, Twitter } from 'lucide-react'

export default function TeamPartners() {
  const team = [
    {
      name: 'Dr. Michael Chen',
      role: 'Chief Executive Officer',
      expertise: '20+ years in Energy & Blockchain',
      image: '/team/ceo.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Sarah Williams',
      role: 'Chief Technology Officer',
      expertise: 'Former Lead Engineer at Ethereum Foundation',
      image: '/team/cto.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Robert Martinez',
      role: 'Head of Energy Operations',
      expertise: 'Ex-VP at Shell Energy',
      image: '/team/operations.jpg',
      linkedin: '#',
      twitter: '#'
    },
    {
      name: 'Dr. Emily Zhang',
      role: 'Chief Financial Officer',
      expertise: 'Harvard MBA, Ex-Goldman Sachs',
      image: '/team/cfo.jpg',
      linkedin: '#',
      twitter: '#'
    }
  ]

  const partners = [
    {
      name: 'CertiK',
      type: 'Security Audit',
      logo: '/partners/certik.svg',
      description: 'Smart contract security audit and verification'
    },
    {
      name: 'Chainlink',
      type: 'Oracle Network',
      logo: '/partners/chainlink.svg',
      description: 'Decentralized oracle for production data'
    },
    {
      name: 'Halliburton',
      type: 'Energy Partner',
      logo: '/partners/halliburton.svg',
      description: 'Oilfield services and technology'
    },
    {
      name: 'Baker Hughes',
      type: 'Technology Partner',
      logo: '/partners/baker.svg',
      description: 'Energy technology and solutions'
    }
  ]

  const advisors = [
    {
      name: 'Prof. James Peterson',
      title: 'Energy Economics Expert',
      affiliation: 'MIT Energy Initiative',
      credentials: 'Nobel Prize Nominee 2022'
    },
    {
      name: 'Lisa Anderson',
      title: 'Blockchain Legal Counsel',
      affiliation: 'Former SEC Commissioner',
      credentials: 'Regulatory Compliance Specialist'
    },
    {
      name: 'David Thompson',
      title: 'DeFi Strategy Advisor',
      affiliation: 'Co-founder of Aave',
      credentials: 'DeFi Pioneer & Investor'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-boil-darker via-boil-dark to-boil-darker"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="badge-info">LEADERSHIP</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
              <span className="gradient-text-premium">Our Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Industry veterans combining energy expertise with blockchain innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="energy-card-premium text-center group animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Avatar placeholder with gradient */}
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-br from-boil-primary via-boil-secondary to-boil-accent rounded-full animate-pulse"></div>
                  <div className="absolute inset-1 bg-boil-darker rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-boil-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-4">{member.expertise}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center space-x-3">
                  <a href={member.linkedin} className="w-10 h-10 rounded-full bg-boil-darker border border-boil-border flex items-center justify-center hover:border-boil-primary transition-colors">
                    <Linkedin size={18} className="text-boil-accent" />
                  </a>
                  <a href={member.twitter} className="w-10 h-10 rounded-full bg-boil-darker border border-boil-border flex items-center justify-center hover:border-boil-primary transition-colors">
                    <Twitter size={18} className="text-boil-accent" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        {/* Partners Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="badge-warning">PARTNERSHIPS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
              <span className="gradient-text-premium">Strategic Partners</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Collaborating with industry leaders to ensure security, transparency, and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="energy-card group animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Logo placeholder */}
                <div className="h-20 flex items-center justify-center mb-4 relative">
                  <div className="w-full h-full bg-gradient-to-br from-boil-primary/10 to-boil-accent/10 rounded-lg flex items-center justify-center group-hover:from-boil-primary/20 group-hover:to-boil-accent/20 transition-all">
                    <span className="text-2xl font-audiowide gradient-text">
                      {partner.name.substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-lg">{partner.name}</h4>
                  <CheckCircle2 size={20} className="text-boil-success" />
                </div>
                
                <span className="badge-info mb-3">{partner.type}</span>
                <p className="text-sm text-gray-400">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        {/* Advisors Section */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="badge-success">ADVISORY BOARD</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-audiowide mb-4">
              <span className="gradient-text-premium">Expert Advisors</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Guided by world-renowned experts in energy, finance, and blockchain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="glass-card p-8 animate-fade-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-boil-secondary to-boil-accent flex items-center justify-center mr-4 flex-shrink-0">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{advisor.name}</h4>
                    <p className="text-boil-secondary text-sm font-semibold">{advisor.title}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-sm">
                    <Shield size={16} className="text-boil-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{advisor.affiliation}</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <CheckCircle2 size={16} className="text-boil-success mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{advisor.credentials}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">$50M+</div>
              <div className="text-sm text-gray-400">Backed by VCs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-gray-400">Security Audits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">12</div>
              <div className="text-sm text-gray-400">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">98%</div>
              <div className="text-sm text-gray-400">User Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
