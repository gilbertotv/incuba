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
				className="cursor-pointer hover:font-medium"
			/>
		</li>
	) : link ? (
		<li className="py-4 sm:py-0">
			<Link
				to={link}
				onClick={() => onClick(false)}
				className="cursor-pointer hover:font-medium"
			>
				{text}
			</Link>
		</li>
	) : (
		<li className="cursor-pointer hover:font-medium py-4 sm:py-0">
			{text}
		</li>
	);

const Menu = () => {
	const { menuOpen, setMenuOpen } = useContext(AppContext);
	return (
		<>
			<HamburgerMenu />
			<nav
				className={`w-screen h-screen absolute sm:fixed top-0 left-0 z-30 transition duration-500 ease-in-out bg-white ${
					menuOpen ? "visible opacity-1" : "invisible opacity-0"
				}`}
			>
				<div className="flex h-full items-center justify-center justify-center text-left">
					<ul className="flex flex-col sm:justify-between sm:h-full sm:p-24 p-12 text-darkgray1 font-light text-3xl">
						<Option
							text="Inicio"
							onClick={() => setMenuOpen(false)}
							linkAnchor="/#inicio"
						/>
						<Option
							text="Motivación"
							link="/articulos"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Resultados"
							onClick={() => setMenuOpen(false)}
							linkAnchor="/#autorxs"
						/>
						<Option
							text="Herramientas"
							link="/recursos"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Convocatoria"
							link="/reflexiones"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Nosotras"
							link="/reflexiones"
							onClick={() => setMenuOpen(false)}
						/>
						<Option
							text="Contacto"
							onClick={() => setMenuOpen(false)}
							linkAnchor="/#contacto"
						/>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Menu;
