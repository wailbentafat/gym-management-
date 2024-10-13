// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your file structure
  ],
  theme: {

    fontFamily: {
      "poppins":["Poppins"],
      "monument":["monument extended"]
     },
    extend: {},
    colors:{
      "white":"white",
      "beigecustom":"#ede9e9",
      "blueside":"#1a1363",
      "bluestmn":"#1A1363",
      "activebutton":"#ece9e9",
      "yellow2":"#DEBA3B",
      "purple1":"#A09DBD",
      "zr9":"#77749B",
      "zr91":"#5D57A3",
      "sfr":"#FFFADF",
      "sfr2":"#DEBA3B"
    }
  },
  plugins: [],
}
