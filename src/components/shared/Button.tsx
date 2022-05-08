import React from "react";

interface IProps {
	text: string;
	variant: string;
	action?: () => void;
	disabled?: boolean;
	className?: string;
}

const Button = ({ text, variant, action, disabled, className }: IProps) => {
	return (
		<>
			{variant === "orange" && (
				<button
					className={`${className} w-full font-benton300 sm:w-52 bg-orange1 border-solid border border-orange1 text-lg p-2 text-white hover:bg-opacity-80`}
					onClick={action}
				>
					{text}
				</button>
			)}
		</>
	);
};

export default Button;
