require("ts-node").register({
	compilerOptions: {
		module: "commonjs",
		target: "es2017",
	},
});

module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-postcss",
		`gatsby-plugin-sass`,
	],
};
