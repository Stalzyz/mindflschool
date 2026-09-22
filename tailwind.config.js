/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f5f7f2',
          100: '#e6ebe0',
          200: '#cfd9c3',
          500: '#7a9660',
          600: '#5e7a45',
          700: '#465e33',
          800: '#2f4222',
          900: '#1e2b15',
        },
        boho: {
          cream: '#FAF7F0',
          sand: '#F2EDE2',
          clay: '#D9CBB5',
          terracotta: '#C86A3E',
          olive: '#6A8E4E',
          forest: '#2C4A2E',
          dark: '#1F291E',
          softBg: '#FDFBF7',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
