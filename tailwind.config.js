/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
    screens: {
    

      'xl': {'min':'739px'},
      // => @media (max-width: 1279px) { ... }

     

      'sm':  {'min':'250px','max': '739px'},
      // => @media (max-width: 390px) { ... }
    },
   
  
  },
  plugins: [],
}

