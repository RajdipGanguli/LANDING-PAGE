/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#FC7820',
          pink: '#E51888',
          dot: '#FE2C55',
          dark: '#1C1C1C',
          muted: '#535353',
          subtle: '#777777',
          border: '#EAEAEA',
          borderLight: '#F0F0F0',
          bgSubtle: '#FBFBFB',
          bgGray: '#F7F7F7',
          pillCoral: '#FFE7EC',
          pillYellow: '#FFF1CD',
          pillGreen: '#DFFE8',
          pillPink: '#FFDEE4',
          pillMint: '#DDFB86',
          pillBlue: '#E4F1FF',
          pillPurple: '#F4CDFF',
          pillCyan: '#CDF0FF',
        }
      },
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        cta: ['Manrope', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        alt: ['"Instrument Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #FC7820 0%, #E51888 100%)',
        'brand-gradient-hover': 'linear-gradient(90deg, #E51888 0%, #FC7820 100%)',
      },
      boxShadow: {
        'brand-glow': '0 10px 30px rgba(229, 24, 136, 0.25)',
        'card-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'card-md': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'card-lg': '0 20px 50px rgba(0, 0, 0, 0.08)',
      },
      borderRadius: {
        'card': '20px',
        'card-lg': '28px',
        'card-xl': '36px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-subtle': 'pulseSubtle 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(36, 210, 64, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 8px rgba(36, 210, 64, 0)' },
        }
      }
    },
  },
  plugins: [],
}
