'use client'

import { Flame, Twitter, Send, MessageCircle, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-boil-darker border-t border-boil-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Flame className="w-8 h-8 text-boil-primary" />
              <span className="text-xl font-audiowide gradient-text">BOIL</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming energy production into real yield for the decentralized future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-boil-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Audit Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Governance</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-boil-primary">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-boil-primary">Community</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/boilenergy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boil-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://t.me/boiltoken" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boil-primary transition-colors">
                <Send size={24} />
              </a>
              <a href="https://discord.gg/MMAmTSNS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boil-primary transition-colors">
                <MessageCircle size={24} />
              </a>
              <a href="https://www.instagram.com/boil.energy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boil-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.youtube.com/@boilenergy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-boil-primary transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-boil-border mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 BOIL Energy. All rights reserved. Real Yield from Real Energy.</p>
        </div>
      </div>
    </footer>
  )
}
