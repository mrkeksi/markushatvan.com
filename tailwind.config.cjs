module.exports = {
  important: true,
  content: ['./src/**/*.svelte'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '900px',
      xl: '900px',
      // '2xl': '1536px',
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
