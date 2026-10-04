import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#080B10',
          card: '#0D111A',
          elevated: '#121824',
          subtle: '#0F1522',
        },
        neon: {
          pink: '#FF2A5F',
          magenta: '#E11D48',
          cyan: '#00F2FE',
          teal: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
      },
      borderColor: {
        cyber: 'rgba(255, 255, 255, 0.08)',
        'cyber-active': 'rgba(255, 42, 95, 0.4)',
        'cyan-glow': 'rgba(0, 242, 254, 0.35)',
      },
      boxShadow: {
        'pink-glow': '0 0 25px -3px rgba(255, 42, 95, 0.3)',
        'cyan-glow': '0 0 25px -3px rgba(0, 242, 254, 0.3)',
        'emerald-glow': '0 0 20px -3px rgba(16, 185, 129, 0.3)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.06)',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ticker': 'ticker 35s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
