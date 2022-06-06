import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import Header from "./Header";
import Footer from "./Footer";

//import defaultImg from "../../images/layout/thumbincuba.jpg";

interface IProps {
	title: string;
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal;
	description?: string;
	ogtitle?: string;
	image?: any;
	url?: string;
}

const Layout = (props: IProps) => {
	const { title, ogtitle, description, image, url } = props;
	const defaultImg =
		"https://susdon4.dreamhosters.com/wp-content/uploads/2022/06/thumbincuba.jpg";
	const defaultDescr =
		"Somos una organización sin fines de lucro que busca contribuir al fortalecimiento del espacio cívico local en México";
	const defaultTitle =
		"Incuba ONG Empoderamos organizaciones sociales comprometidas con el desarrollo comunitario.";
	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Incuba ONG {title && title !== "" && `- ${title}`}</title>
				<link rel="canonical" href="https://www.incuba.ong/" />
				<meta property="og:site_name" content="Incuba ONG" />
				<meta
					name="description"
					content={
						description && description !== "" ? description : defaultDescr
					}
				/>
				<meta name="image" content={image ? image : defaultImg} />
				<meta
					property="og:url"
					content={`https://www.incuba.ong${url ? url : ""}`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={ogtitle && ogtitle !== "" ? ogtitle : defaultTitle}
				/>
				<meta
					property="og:description"
					content={
						description && description !== "" ? description : defaultDescr
					}
				/>
				<meta property="og:image" content={image ? image : defaultImg} />
				<meta
					property="og:image:secure_url"
					content={image ? image : defaultImg}
				/>
				<meta property="og:image:type" content="image/png" />
				<meta
					property="og:description"
					content={
						description && description !== "" ? description : defaultDescr
					}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content={ogtitle && ogtitle !== "" ? ogtitle : defaultTitle}
				/>
				<meta
					name="twitter:description"
					content={
						description && description !== "" ? description : defaultDescr
					}
				/>
				<meta name="twitter:image" content={image ? image : defaultImg} />
			</Helmet>
			<Header />
			<motion.main
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{
					type: "spring",
					mass: 0.35,
					stiffness: 50,
					duration: 0.5,
				}}
				className="flex overflow-hidden"
			>
				<div className="">{props.children}</div>
			</motion.main>
			<Footer />
		</>
	);
};

export default Layout;
