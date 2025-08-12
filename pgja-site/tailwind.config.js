/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sansita': ['Sansita', 'sans-serif'],
        'sans': ['Sansita', 'ui-sans-serif', 'system-ui', 'sans-serif'], // Make Sansita the default sans font
      },
    },
  },
  plugins: [],
}
