/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ⚠️ Add this section for the infinite scrolling animation
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        // Adjust '40s' for speed
        "slide-left-infinite": "slide-left 40s linear infinite",
      },
    },
  },
  plugins: [],
};
