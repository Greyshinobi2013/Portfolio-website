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
          DEFAULT: 'var(--bg-canvas)',
          card: 'var(--bg-card)',
          elevated: 'var(--bg-card-hover)',
          hover: 'var(--bg-card-hover)',
          subtle: 'var(--bg-card-subtle)',
        },
        agency: {
          primary: 'var(--accent-primary)',
          'primary-hover': 'var(--accent-primary-hover)',
          emerald: 'var(--accent-emerald)',
          cyan: 'var(--accent-cyan)',
          amber: 'var(--accent-amber)',
          rose: 'var(--accent-rose)',
        },
        neon: {
          pink: '#6366F1', // Modernized to Electric Indigo
          magenta: '#4F46E5',
          cyan: '#0EA5E9',
          teal: '#06B6D4',
          emerald: '#10B981',
          amber: '#F59E0B',
        },
      },
      borderColor: {
        cyber: 'var(--border-subtle)',
        'cyber-medium': 'var(--border-medium)',
        'cyber-active': 'var(--border-active)',
        'cyan-glow': 'rgba(14, 165, 233, 0.35)',
      },
      boxShadow: {
        'agency-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'agency-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'agency-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'agency-card': '0 12px 32px -4px rgba(0, 0, 0, 0.25), 0 0 1px 1px var(--border-subtle)',
        'agency-glow': '0 0 25px -4px rgba(99, 102, 241, 0.35)',
        'pink-glow': '0 0 25px -4px rgba(99, 102, 241, 0.35)',
        'cyan-glow': '0 0 25px -4px rgba(14, 165, 233, 0.35)',
        'emerald-glow': '0 0 20px -3px rgba(16, 185, 129, 0.35)',
        'card-glow': '0 12px 32px -8px rgba(0, 0, 0, 0.3), 0 0 1px 1px var(--border-subtle)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        ticker: 'ticker 35s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
