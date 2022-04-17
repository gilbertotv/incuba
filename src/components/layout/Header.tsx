import React from "react";
import { Link } from "gatsby";

import Menu from "./Menu";

import logo from "../../images/layout/logo.svg";

interface IProps {}

const Header = (props: IProps) => {
	return (
		<header>
			<div className="p-4 absolute top-0 left-0 w-screen z-10">
				<Link className="inline-flex" to="/">
					<img src={logo} alt="Incuba ONG Logo" className="w-48" />
				</Link>
			</div>
			<Menu />
		</header>
	);
};

export default Header;
