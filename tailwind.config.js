/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				daysOne: ["Days One", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"],
			},

			screens: {
				sm: "300px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},

	plugins: [daisyui],

	daisyui: {
		themes: ["light"],
	},
};
