/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"]
			},
			colors: {
				'dark-pink': "#ce5593",
				'medium-pink': "#d16ba0",
				'light-pink': "#d883af",
				'gold': "#d3a031",
			}
		},
	},
	plugins: [],
}
