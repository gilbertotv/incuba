import React from "react";
import { Link } from "gatsby";

import Menu from "./Menu";

import logo from "../../images/layout/logo.svg";

interface IProps {}

const Header = (props: IProps) => {
	return (
		<header>
			<div className="w-screen absolute">
				<div className="sm:container p-4 z-10">
					<Link className="inline-flex" to="/">
						<img src={logo} alt="Incuba ONG Logo" className="w-48" />
					</Link>
				</div>
				<Menu />
			</div>
		</header>
	);
};

export default Header;
