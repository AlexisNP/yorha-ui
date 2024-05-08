/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    fontFamily: {
      sans: ['Noto Sans', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      display: ['Oswald'],
      body: ['Noto Sans']
    },
    extend: {
      colors: {
        'y-beige': {
          DEFAULT: '#B0AB97',
          50: '#FFFFFF',
          100: '#F6F6F4',
          200: '#E5E3DD',
          300: '#D8D2B8',
          400: '#cbc5af',
          500: '#b0ab97',
          600: '#767563',
          700: '#4c4940',
          800: '#3A382C',
          900: '#2d2c21'
        }
      },
      boxShadow: {
        sharpest: '2px 2px #2d2c2150'
      }
    }
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey]

          const newVars =
            typeof value === 'string'
              ? { [`--color${colorGroup}-${colorKey}`]: value }
              : extractColorVars(value, `-${colorKey}`)

          return { ...vars, ...newVars }
        }, {})
      }

      addBase({
        ':root': extractColorVars(theme('colors'))
      })
    }
  ]
}
