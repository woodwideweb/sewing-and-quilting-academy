/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,js,jsx,ts,tsx}', './src/stories/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			'sm': '550px',
			'md': '700px',
			'lg': '1100px',
			'xl': '1500px',
		},
		extend: {
			fontFamily: {
				// sans: ["Inter", "sans-serif"],
				// this is what she used on the business card
				sans: ["Raleway", "sans-serif"],
				// test: ["Kalam"],
				test: ["Oooh Baby"],
				// test: ["Nothing You Could Do"],
			},
			colors: {
				'dark-pink': "#ce5593",
				'medium-pink': "#d16ba0",
				'light-pink': "#d883af",
				'gold': "#d3a031",
			},
			backgroundImage: {
				'grass': "url('src/images/grass.jpg')",
			},
		},
	},
	plugins: [],
}
