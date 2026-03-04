/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ['Marcellus', 'serif'],
        shrikhand: ['Shrikhand', 'cursive'],
        sulphur: ['Sulphur Point', 'sans-serif'],
        maven: ['Maven Pro', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        navy: 'rgb(0, 0, 50)',
        brand: 'rgb(171, 95, 95)',
        cream: '#ffdd94',
        cream2: 'rgb(255, 200, 100)',
        brown: '#b78246',
        gray70: 'rgb(70, 70, 70)',
        blanchedalmond: 'blanchedalmond',
        wheat: 'wheat',
      },
      keyframes: {
        image1: {
          '33%, 66%': { opacity: '0' },
          '0%, 100%': { opacity: '1' },
        },
        image2: {
          '0%, 66%, 100%': { opacity: '0' },
          '33%': { opacity: '1' },
        },
        image3: {
          '0%, 33%, 100%': { opacity: '0' },
          '66%': { opacity: '1' },
        },
      },
      animation: {
        image1: 'image1 16s infinite 3s',
        image2: 'image2 16s infinite 3s',
        image3: 'image3 16s infinite 3s',
      },
    },
  },
  plugins: [],
};
