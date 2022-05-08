const path = require("path");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;
	// Query for markdown nodes to use in creating pages.
	const query = await graphql(
		`
			{
				allWpPost(
					filter: {
						categories: { nodes: { elemMatch: { slug: { eq: "recurso" } } } }
					}
				) {
					nodes {
						resource {
							author
							authorurl
							authorusr
							content
							headtext
							order
							reference
							sideimage {
								altText
								mediaItemUrl
							}
							summary
							title
							thumb {
								altText
								mediaItemUrl
							}
							path
							content2
							inlineimage {
								altText
								mediaItemUrl
							}
						}
					}
				}
			}
		`
	);
	// Handle errors
	if (query.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}
	// Create pages for each markdown file.
	const template = path.resolve("./src/components/resource.tsx");
	query.data.allWpPost.nodes.forEach((node) => {
		if (node.resource.path) {
			const path = node.resource.path;
			createPage({
				path: `/recursos/${path}`,
				component: template,
				// In your blog post template's graphql query, you can use pagePath
				// as a GraphQL variable to query for data from the markdown file.
				context: {
					data: node.resource,
				},
			});
		}
	});
};
