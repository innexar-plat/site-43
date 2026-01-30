/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4fbc',
        },
        secondary: {
          DEFAULT: '#1e40af',
          dark: '#18338c',
        },
        accent: {
          DEFAULT: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}
