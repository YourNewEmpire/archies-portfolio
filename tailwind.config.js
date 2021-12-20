const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { display: ["Oswald"], body: ["Open Sans"] , title: ['Bebas Neue'] },
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
        moralis: '#c5fa00',
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
            transform: "translateX(5%)",
          
          },
  
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(5deg)",},
        },
      
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out ",
        pop: "pop 2s ease-in-out  ",
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
