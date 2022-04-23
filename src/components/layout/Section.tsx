import React from "react";

const Section = ({ children, className }) => {
	return (
		<section>
			<div
				className={`min-h-screen w-screen flex sm:items-center ${className}`}
			>
				<div className="container">{children}</div>
			</div>
		</section>
	);
};

export default Section;
