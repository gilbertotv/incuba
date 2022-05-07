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
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: "https://susdon4.dreamhosters.com/graphql",
				// Indicates whether the site is hosted on wordpress.com.
				// If false, then the assumption is made that the site is self hosted.
				// If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
				// If your site is hosted on wordpress.org, then set this to false.
				// If useACF is true, then the source plugin will try to import the WordPress ACF Plugin contents.
				// This feature is untested for sites hosted on wordpress.com.
				// Defaults to true.
				useACF: true,
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
	],
};
