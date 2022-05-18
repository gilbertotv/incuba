require("ts-node").register({
	compilerOptions: {
		module: "commonjs",
		target: "es2017",
	},
});

module.exports = {
	siteMetadata: {
		siteUrl: `https://www.incuba.ong`,
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-postcss",
		`gatsby-plugin-sass`,
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "https://susdon4.dreamhosters.com/graphql",
				auth: {
					htaccess: {
						// If auth.user and auth.pass are filled, then the source plugin will be allowed
						// to access endpoints that are protected with .htaccess.
						username: "susdon4_plj356",
						password: "Incubaong1108*",
					},
				},
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/layout/favicon.png",
			},
		},
	],
};
