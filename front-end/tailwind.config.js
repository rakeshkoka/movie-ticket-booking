/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'custom-gray': '#E5E5E7',
        'primary-bg': '#1C1C1E', // Dark gray for primary background
        'accent-red': '#FF4A57', // Deep red for accent
        'accent-blue': '#007AFF', // Royal blue for accent
        'text-light': '#E5E5E7', // Light gray for text
        'text-highlight': '#FFFFFF', // White for highlights
        'secondary-elements': '#3A3A3C', // Slate gray for secondary elements
    },
    },
  },
  plugins: [],
}

