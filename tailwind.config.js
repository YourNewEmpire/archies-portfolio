const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
      },
      fontFamily: {
        display: ["Oswald"],
        body: ["Oxygen"],
        title: ["Bebas Neue"],
      },
      backgroundImage:  {
        'the-coast': "url('/thecoast.png')",
        'projects-card' : "url('/projectscard.png')"
      },
      colors: {
        gray: colors.gray,
        slate: colors.slate,
        lightblue: colors.sky,
        darkblue: colors.indigo,
        teal: colors.teal,
        cyan: colors.cyan,
        blue: colors.blue,
        red: colors.rose,
        pink: colors.pink,
        green: colors.lime,
        purple: colors.violet,
        amber: colors.amber,
        fuchsia: colors.fuchsia,
        moralis: "#c5fa00",
      },
      keyframes: {
        bottomShadow: {
          "0%": { boxShadow: "-5px  0px 0px -5px  rgba(0, 0, 0, 0.1)" },
          "25%": { boxShadow: "-5px  2px 2px -5px  rgba(0, 0, 0, 0.1)" },
          "50%": { boxShadow: "-5px  4px 4px -5px rgba(0, 0, 0, 0.1) " },
          "75%": { boxShadow: "0px 8px 8px 0px rgba(0, 0, 0, 0.1) " },
          " 100%": { boxShadow: "0px 12px 12px 0px rgba(0, 0 , 0, 0.1)" },
        },
        shadowGlow: {
          "0%": { boxShadow: "0 1px 1px 0px rgba(0, 0, 0, 0.1)" },
          "25%": { boxShadow: "0 5px 5px 0px #0c4a6e " },
          "50%": { boxShadow: "0 7px 7px 0px #1e40af " },
          "75%": { boxShadow: "0 9px 9px 0px #60a5fa " },
          " 100%": { boxShadow: "0 9px 9px 0px #7fb4f5 " },
        },
        shadowGlowMd: {
          "0%": { boxShadow: "0 1px 1px 0px rgba(0, 0, 0, 0.1)" },
          "25%": { boxShadow: "0 5px 5px 0px #0c4a6e " },
          "50%": { boxShadow: "0 7px 7px 0px #1e40af " },
          "75%": { boxShadow: "0 9px 9px 0px #60a5fa " },
          " 100%": { boxShadow: "0 9px 9px 5px #7fb4f5 " },
        },
        shadowGlowLg: {
          "0%": { boxShadow: "0 1px 1px 0px rgba(0, 0, 0, 0.1)" },
          "25%": { boxShadow: "0 5px 5px 0px #0c4a6e " },
          "50%": { boxShadow: "0 7px 7px 0px #1e40af " },
          "75%": { boxShadow: "0 9px 9px 0px #60a5fa " },
          " 100%": { boxShadow: "0 9px 9px 10px #7fb4f5 " },
        },
        bgShift: {
          from: { "background-color": "#1e40af" },
          " to": { "background-color": "#60a5fa" },
        },
        pop: {
          "0%, 100%": {
            transform: "translateX(0%)",
          },

          "50%": {
            transform: "translateX(20%)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out ",
        pop: "pop 0.75s ease-in-out infinite ",
        spin: "spin infinite linear  8s",
        spinFast: " spin infinite linear 3s",
        shadowGlow: "shadowGlow 2s alternate infinite ease-in-out",
        shadowGlowMd: "shadowGlowMd 2s alternate infinite ease-in-out",
        shadowGlowLg: "shadowGlowLg 2s alternate infinite ease-in-out",
        bottomShadow: "bottomShadow 1s alternate infinite ease-in-out",
        bgShift: "bgShift 2s alternate infinite ease-in-out",
      },
    },
    plugins: [],
  },
};
