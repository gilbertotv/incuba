import React, { useContext } from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { AppContext } from "../../context/AppContext";
import HamburgerMenu from "./HamburgerMenu";

const Option = ({
	text,
	onClick,
	linkAnchor,
	link,
}: {
	text: string;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
	linkAnchor?: string;
	link?: string;
}) =>
	linkAnchor ? (
		<li className="py-4 sm:py-0">
			<AnchorLink
				to={linkAnchor}
				title={text}
				onAnchorLinkClick={() => onClick(false)}
				className="cursor-pointer hover:font-benton400"
			/>
		</li>
	) : link ? (
		<li className="py-4 sm:py-0">
			<Link
				to={link}
				onClick={() => onClick(false)}
				className="cursor-pointer hover:font-benton400"
			>
				{text}
			</Link>
		</li>
	) : (
		<li className="cursor-pointer hover:font-benton400 py-4 sm:py-0">{text}</li>
	);

const Menu = () => {
	const { menuOpen, setMenuOpen } = useContext(AppContext);
	return (
		<>
			<HamburgerMenu />
			<nav
				className={`w-screen h-screen fixed top-0 left-0 z-30 transition duration-500 ease-in-out bg-white ${
					menuOpen ? "visible opacity-1" : "invisible opacity-0"
				}`}
			>
				<div className="flex h-full items-center justify-center justify-center text-left">
					<ul className="flex flex-col sm:justify-between sm:h-full sm:p-24 p-12 text-darkgray1 text-3xl font-benton300">
						<Option
							text="Inicio"
							link="/#inicio"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Motivación"
							link="/#motivacion"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Resultados"
							link="/#resultados"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Herramientas"
							link="/#herramientas"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Convocatoria"
							link="/#convocatoria"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Nosotras"
							link="/#nosotras"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Contacto"
							onClick={() => setMenuOpen(false)}
							link="/#contacto"
						/>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Menu;
