// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust according to your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      spacing: {
        13:'3.5rem'
      }
    },
  },
  plugins: [],
};
