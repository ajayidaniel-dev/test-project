/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        wallet: "url('/src/assets/images/walletBackground.svg')",
      },
      colors: {
        primary: "#07112D",
        secondary: "#032282",
      },
      fontFamily: {
        nunito: ["Nunito, sans-serif"],
        sora: ["Sora, sans-serif"],
      },
      screens: {
        xs: "480px",
        mds: "600px",
        md: "768px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1440px",
      },
    },
  },
  variants: {},
  plugins: [],
};
