module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Adjust according to your file structure
    './components/**/*.{js,ts,jsx,tsx}', // If you have a components directory
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto"],
        "outfit": ["Outfit"],
      },
      colors: {
        // Define a custom primary color
        mainTeal: '#417978',  // Example hex color
        bgGray: '#DDDDDD',  // Example hex color
        background: '#EEEEEE'
      },
    },
  },
  plugins: [],
};
