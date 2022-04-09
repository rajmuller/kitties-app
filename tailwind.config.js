module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0)" },
          "14%, 18%": { transform: "rotate(5deg)" },
          "36%, 40%": { transform: "rotate(-5deg)" },
          "55%": { transform: "rotate(0)" },
        },
        nod: {
          "0%": { transform: "translateY(0)" },
          "14%": { transform: "translateY(2%)" },
          "42%": { transform: "translateY(0)" },
        },
        slide: {
          "0%": { transform: "rotate(-45deg)" },
          "21%": { transform: "rotate(-15deg)" },
          "42%": { transform: "rotate(-45deg)" },
        },
        earRight: {
          "0%": { transform: "rotate(170)deg" },
          "7%": { transform: "rotate(185deg)" },
          "14%": { transform: "rotate(170deg)" },
        },
        earLeft: {
          "0%": { transform: "scale(-1, 1) rotate(170)deg" },
          "7%": { transform: "scale(-1, 1) rotate(185deg)" },
          "14%": { transform: "scale(-1, 1) rotate(170deg)" },
        },
        attentiveRight: {
          "0%": { transform: "rotate(170)deg" },
          "7%": { transform: "rotate(155deg)" },
          "14%": { transform: "rotate(170deg)" },
        },
        attentiveLeft: {
          "0%": { transform: "scale(-1, 1) rotate(170)deg" },
          "7%": { transform: "scale(-1, 1) rotate(155deg)" },
          "14%": { transform: "scale(-1, 1) rotate(170deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 3s linear infinite",
        nod: "nod 4s linear infinite",
        slide: "slide 3s linear infinite",
        earRight: "earRight 2s linear infinite",
        earLeft: "earLeft 2s linear infinite",
        attentiveRight: "attentiveRight 2s linear infinite",
        attentiveLeft: "attentiveLeft 2s linear infinite",
      },
    },
  },
  plugins: [],
};
