/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
      custom_outline: ["Bungee Outline"],
    },
    colors: {
      // "custom-bg": "#18293a", 1
      "custom-bg": "#4370d8",
      // "custom-yellow-color": "#e4af17", 1
      "custom-yellow-color": "#fefefd",
    },
    animation: {
      "border-transform1":
        "border-transform1 3s linear infinite alternate forwards",
    },
    keyframes: {
      "border-transform1": {
        "0%": {
          /* define initial border properties */
        },
        "100%": {
          /* define final border properties */
        },
      },
    },
  },
  plugins: [],
};
