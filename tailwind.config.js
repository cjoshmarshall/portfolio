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
        move1: 'moveText1 12s 1s infinite',
        move2: 'moveText2 12s 1s infinite',
        move3: 'moveText3 12s 1s infinite'

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

        moveText1:{
          "0%":{transform:"translateX(0px)"},
          "50%":{transform:"translateX(1200px)"},
          "100%":{transform:"translateX(1200px)"},
        },
        moveText2:{
          "0%":{transform:"translateX(-1200px)"},
          "50%":{transform:"translateX(0px)"},
          "100%":{transform:"translateX(1200px)"},
        },
        moveText3:{
          "0%":{transform:"translateX(-2400px)"},
          "50%":{transform:"translateX(-1200px)"},
          "100%":{transform:"translateX(0px)"},
        },
      }
      
    },
  },
  plugins: [],
}