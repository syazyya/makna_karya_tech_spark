module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#7c3aed',
        wave1: '#fee8e0',
        wave2: '#ffba9e'
      },
      animation: {
        'wave-move': 'waveMove 25s linear infinite',
      },
      keyframes: {
        waveMove: {
          '0%': { transform: 'translateX(0) translateZ(0)' },
          '100%': { transform: 'translateX(-50%) translateZ(0)' },
        }
      }
      
    }
  },
  plugins: [],
}

