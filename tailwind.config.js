module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		fontFamily: {
			sans: ["Graphik", "sans-serif"],
			serif: ["Merriweather", "serif"],
		},
		extend: {
			spacing: {
				128: "32rem",
				144: "36rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
			colors: {
				blue: "#1fb6ff",
				pink: "#ff49db",
				orange: "#ff7849",
				green: "#13ce66",
				"gray-dark": "#273444",
				gray: "#8492a6",
				"border-gray": "#D3D3D3",
				"gray-light": "#d3dce6",
				primary: "#7510F7",
			},
		},
	},
};
