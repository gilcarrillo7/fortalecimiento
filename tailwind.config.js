/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
		container: {
			center: true,
			padding: {
				xl: "2rem",
				DEFAULT: "15px",
			},
		},
		fontFamily: {
			sans: ["Montserrat", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#6A2978",
				secundary: "#FFE66E",
				complementary: "#BCA6F4",
			},
		},
  },
  plugins: [],
}
