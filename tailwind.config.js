module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily:{
        'marcellus': ['Marcellus','serif']
      },
      backgroundImage:{
        'home': "url('/src/assets/home.jpg')",
      },
      animation: {
        fade1: 'fadeImage1 18s infinite',
        fade2: 'fadeImage2 18s infinite',
        fade3: 'fadeImage3 18s infinite',
        fade4: 'fadeImage4 12s infinite',
        fade5: 'fadeImage5 12s infinite',

        // text1:'fadeText1 2s'
      },

      keyframes: {
        fadeImage1: {
          '33%,66%':{ opacity:0 },
          '0%,100%':{ opacity:1 }
        },
        fadeImage2: {
          '0%,66%,100%':{ opacity:0 },
          '33%':{ opacity:1 }
        },
        fadeImage3: {
          '0%,33%,100%':{ opacity:0 },
          '66%':{ opacity:1 }
        },
        fadeImage4:{
          '0%,100%':{opacity:0},
          '50%':{opacity:1}
        },
        fadeImage5:{
          '50%':{opacity:0},
          '0%,100%':{opacity:1}
        },

        // fadeText1:{
        //   '0%':{opacity:0},
        //   '100%':{opacity:1}
        // }
      }
      
    },
  },
  plugins: [],
}