/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'bg-gray': '#282828',
				'menu-text': '#c8c8c8'
			}
		}
	},
	plugins: []
};
