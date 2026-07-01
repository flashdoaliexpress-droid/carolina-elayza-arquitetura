import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF6F0',
        olive: '#697159',
        sage: '#A2A182',
        terracotta: '#BA704D',
        ink: '#1D1B18',
        'ink-muted': '#464840',
        hairline: '#C6C7BD',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"General Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-lg': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '400' }],
        'display-md': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '400' }],
        'headline': ['32px', { lineHeight: '1.3', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['13px', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
        'label': ['12px', { lineHeight: '1.0', letterSpacing: '0.1em', fontWeight: '400' }],
      },
      spacing: {
        'm-mobile': '20px',
        'm-desktop': '80px',
        'gutter': '24px',
      },
      borderRadius: {
        none: '0',
        DEFAULT: '0',
        sm: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
