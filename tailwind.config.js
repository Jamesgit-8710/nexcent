/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-blue': 'var(--background-primary)',
        'white': 'var(--background-secondary)',
        'dark-gray': 'var(--secondary)',
        'green': 'var(--primary)'
      },
      textColor: {
        'light-gray': 'var(--text-primary)',
        'white': 'var(--text-secondary)',
        'dark-gray': 'var(--secondary)',
        'green': 'var(--primary)'
      }
    },
  },
  plugins: [],
};
