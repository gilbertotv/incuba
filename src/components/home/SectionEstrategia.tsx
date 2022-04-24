import React from "react";
import Button from "../shared/Button";
import Section from "../layout/Section";

const SectionEstrategia = ({
	className,
	title,
	subtitle,
	content,
	button,
	action,
}) => {
	return (
		<Section className={`${className}`}>
			<div className="flex flex-col md:flex-row my-12 md:my-0">
				<div className="md:w-2/5">
					<p className="text-xl text-orange1 sm:text-3xl md:-mt-24 mb-8">
						{title}
					</p>
					<p className="text-xl font-benton700 text-darkgray1 sm:text-3xl mb-8 sm:pr-36">
						{subtitle}
					</p>
				</div>
				<div className="md:w-3/5 md:pl-16">
					<p className="text-xl text-darkgray1 sm:text-4xl mb-8">{content}</p>
					<Button text={button} variant="orange" action={action} />
				</div>
			</div>
		</Section>
	);
};

export default SectionEstrategia;
