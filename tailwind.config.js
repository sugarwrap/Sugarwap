/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage:{
        'heroimg':"url('./Images/HeroBG.jpg')",
        'img1':"url('./Images/IMAGE1.jpg')",
        'img2':"url('./Images/IMAGE2.jpg')",
        'img3':"url('./Images/IMAGE3.jpg')",
        'img4':"url('./Images/IMAGE4.jpg')",
      },
      fontFamily:{
        body:['Times New Roman',"Times","serif"],
        about:['Segoe UI', "Tahoma", "Geneva", "Verdana", "sans-serif"],
        header:['cursive']

      }
    },
  },
  plugins: [],
};
