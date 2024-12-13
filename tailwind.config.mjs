/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brightBlue": "var(--brightBlue)",
        "gradientBg1": "var(--gradientBg1)",
        "gradientBg2": "var(--gradientBg2)",
        "darkBlue": "var(--darkBlue)",
        "veryDarkBlue": "var(--veryDarkBlue)",
        "darkGrayishBlue1": "var(--darkGrayishBlue1)",
        "veryDarkGrayishBlue1": "var(--veryDarkGrayishBlue1)",
        "veryDarkGrayishBlue2": "var(--veryDarkGrayishBlue2)",
        "lightBlue": "var(--lightBlue)",
        "lightBlueHover": "var(--lightBlueHover)",
        "veryLightGray": "var(--veryLightGray)",
        "veryLightGrayishBliue": "var(--veryLightGrayishBliue)",
        "lightGrayishBlue": "var(--lightGrayishBlue)",
        "darkGrayishBlue2": "var(--darkGrayishBlue2)",
        "veryDarkGrayishBlue3": "var(--veryDarkGrayishBlue3)",
      },

      backgroundImage: {
        "desktopBgDark": "url('/bg-desktop-dark.jpg')",
        "desktopBgLight": "url('/bg-desktop-light.jpg')",
        "mobileBgDark": "url('/bg-mobile-dark.jpg')",
        "mobileBgLight": "url('/bg-mobile-light.jpg')",
      }
    },
  },
  plugins: [],
};
