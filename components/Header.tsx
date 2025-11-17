'use client'

import { useState } from 'react'
import { Menu, X, Flame } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-boil-dark/90 backdrop-blur-lg border-b border-boil-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Flame className="w-10 h-10 text-boil-primary animate-pulse" />
              <div className="absolute inset-0 bg-boil-primary blur-xl opacity-50"></div>
            </div>
            <span className="text-2xl font-audiowide gradient-text">BOIL</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#overview" className="text-gray-300 hover:text-boil-primary transition-colors">Overview</a>
            <a href="#pools" className="text-gray-300 hover:text-boil-primary transition-colors">Pools</a>
            <a href="#nft" className="text-gray-300 hover:text-boil-primary transition-colors">NFT Boost</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-boil-primary transition-colors">How It Works</a>
          </nav>

          {/* Connect Wallet Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Connect Wallet
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-boil-border">
            <nav className="flex flex-col space-y-4">
              <a href="#overview" className="text-gray-300 hover:text-boil-primary transition-colors">Overview</a>
              <a href="#pools" className="text-gray-300 hover:text-boil-primary transition-colors">Pools</a>
              <a href="#nft" className="text-gray-300 hover:text-boil-primary transition-colors">NFT Boost</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-boil-primary transition-colors">How It Works</a>
              <button className="btn-primary w-full">
                Connect Wallet
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
