import React from "react";

const HeadComponents = [
	<script
		key="paypal"
		src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
		type="text/javascript"
	/>,
];

const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents(HeadComponents);
};

export { onRenderBody };
