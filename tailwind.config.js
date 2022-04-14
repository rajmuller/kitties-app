module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        offWhite: "#fdfaf6",
        "vampire-black": "#080808",
      },
      backgroundImage: {
        rainbow:
          "linear-gradient(90deg, rgba(255,128,0,1) 0%, rgba(255,128,0,1) 10%, rgba(255,59,0,1) 20%, rgba(255,59,0,1) 30%, rgba(255,0,185,1) 40%, rgba(255,0,185,1) 50%, rgba(171,0,255,1) 60%, rgba(171,0,255,1) 70%, rgba(39,23,214,1) 80%, rgba(23,184,214,1) 90%);",
      },
      boxShadow: {
        wallet: "4px 10px 12px -9px rgba(56,27,7,0.4)",
        link: "0px 6px 12px -12px rgb(0, 0, 0, 0.7);",
      },
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
