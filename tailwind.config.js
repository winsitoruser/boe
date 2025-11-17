/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'boil-dark': '#0B0B0F',
        'boil-darker': '#060608',
        'boil-primary': '#FF6B00',
        'boil-secondary': '#FFB800',
        'boil-accent': '#00D4FF',
        'boil-success': '#00FF88',
        'boil-card': '#141419',
        'boil-border': '#2A2A35',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'Garamond', 'serif'],
        mono: ['IBM Plex Mono', 'SF Mono', 'Courier New', 'monospace'],
        formal: ['var(--font-ibm)', 'Helvetica Neue', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
        wider: '0.04em',
        widest: '0.08em',
        luxury: '0.1em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'energy-glow': 'radial-gradient(circle at center, rgba(255, 107, 0, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 107, 0, 0.5), 0 0 10px rgba(255, 107, 0, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.8), 0 0 30px rgba(255, 107, 0, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
