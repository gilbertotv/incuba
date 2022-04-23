import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

const HamburgerMenu = () => {
	const { menuOpen, setMenuOpen } = useContext(AppContext);

	return (
		<button
			className={`fixed right-6 top-6 z-40 w-10 h-10 focus:outline-none bg-transparent transition duration-200 ease-in-out ${
				menuOpen ? "text-white" : "text-black"
			}`}
			onClick={() => setMenuOpen(!menuOpen)}
		>
			<span className="sr-only">Menu</span>
			<div className="block w-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<span
					aria-hidden="true"
					className={`block absolute h-1 w-10 bg-darkgray1 transform transition duration-500 ease-in-out ${
						menuOpen ? "rotate-45" : "-translate-y-4"
					}`}
				></span>
				<span
					aria-hidden="true"
					className={`block absolute h-1 w-10 bg-darkgray1 transform transition duration-500 ease-in-out ${
						menuOpen && "opacity-0"
					}`}
				></span>
				<span
					aria-hidden="true"
					className={`block absolute h-1 w-10 bg-darkgray1 transform  transition duration-500 ease-in-out ${
						menuOpen ? "-rotate-45" : "translate-y-4"
					}`}
				></span>
			</div>
		</button>
	);
};

export default HamburgerMenu;
