/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    content: {
      lightLogo: "url('./assets/light.png')",
      darkLogo: "url('./assets/dark.png')",
    },
    extend: {
      colors: {
        'navy-blue': '#0C4A60',
        'bright-orange': '#EF6C33',
        'sky-blue': '#ABDFF1',
        metallic: '#E1DDDB',
        'dark-grey': '#1E1E1E',
        'dark-bg': '#121212',
        'dark-accent': '#F15A24 ',
        'yellow-accent': '#DCC300',
        'blue-accent': '#00AEEF ',
        'light-gray': '#D3D3D3',
        'light-beige': '#F5F5DC',
      },
      screens: {
        widescreen: '1340px',
        midscreen: '1210px',
        bigscreen: '1600px',
        newScreen: '1024px'
      },
      fontFamily: {
        noto: 'Noto Sans, sans-serif',
        playfair: 'Playfair Display, serif',
        inter: 'Inter, sans-serif',
        aileron: 'aileron, sans-serif',
      },
      scale: {
        25: '0.25',
      },
      backgroundImage: {
        'gradient-mirage':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',
        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
        'gradient-navy':
          'linear-gradient(180deg, rgba(12,74,96,1) 0%, rgba(12,74,96,1) 26%, rgba(12,74,96,1) 100%)',
      },
    },
  },
  plugins: [],
};
