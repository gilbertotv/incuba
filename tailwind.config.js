module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "45px",
				sm: "1rem",
				lg: "2rem",
				xl: "3rem",
				"2xl": "4rem",
			},
		},
		extend: {
			colors: {
				darkgray1: "#686868",
				beige1: "#E9EBE0",
				orange1: "#FF8500",
				purple1: "#BCA6F4",
			},
			fontFamily: {
				benton300: ["BentonSans300", "sans-serif"],
				benton400: ["BentonSans", "sans-serif"],
				benton700: ["BentonSans700", "sans-serif"],
			},
		},
	},
	plugins: [],
};
