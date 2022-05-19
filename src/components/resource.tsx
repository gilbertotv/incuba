import React, { useEffect, useState } from "react";
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
} from "react-share";

import Layout from "./layout/Layout";

import Twitter from "../images/recursos/twitter.svg";
import Facebook from "../images/recursos/fb.svg";
import Linkedin from "../images/recursos/linkedin.svg";

const Recurso = ({ pageContext }) => {
	const {
		author,
		authorurl,
		authorusr,
		content,
		headtext,
		reference,
		sideimage,
		title,
		path,
		thumb,
		content2,
		inlineimage,
	} = pageContext.data;

	const createMarkup = (html) => {
		return {
			__html: html,
		};
	};
	return (
		<Layout
			title={title}
			description={headtext}
			ogtitle={title}
			image={thumb}
			url={`https://www.incuba.ong/recursos/${path}`}
		>
			<div className="w-screen">
				<div className="container">
					<div className="flex flex-col md:flex-row mt-28 sm:mt-32">
						<div className="md:w-1/2 md:pr-32 mb-8">
							<p className="text-xl sm:text-3xl font-benton700 text-orange1">
								Otros recursos
							</p>
							<p className="text-darkgray1 text-xl sm:text-3xl font-benton700">
								{title}
							</p>
						</div>
						<div className="md:w-1/2 mb-8">
							<p className="text-xl text-darkgray1 sm:text-3xl mt-8 md:mt-0">
								{headtext}
							</p>
						</div>
					</div>
					<div className="relative flex items-center mb-8">
						{author && (
							<p className="text-darkgray1 text-base shrink-0 pr-8">
								<span className="font-benton700">{author}</span>
								<br />
								<span onClick={() => authorurl && window.open(authorurl)}>
									{authorusr}
								</span>
							</p>
						)}
						<div className="border-orange1 border-t w-full h-1"></div>
					</div>
					<div className="flex flex-col md:flex-row text-lg">
						<div className="md:order-2 md:w-1/5">
							{sideimage && (
								<img
									src={sideimage.mediaItemUrl}
									alt={sideimage.altText ? sideimage.altText : "Incuba ONG"}
									className="w-full hidden md:block"
								/>
							)}
							{thumb && (
								<img
									src={thumb.mediaItemUrl}
									alt={thumb.altText ? thumb.altText : "Incuba ONG"}
									className="w-full block md:hidden mb-12"
								/>
							)}
						</div>
						<div className="text-lg md:order-1 md:w-4/5 text-darkgray1 md:pr-36">
							{content && (
								<div
									dangerouslySetInnerHTML={createMarkup(content)}
									style={{ whiteSpace: "pre-wrap" }}
								></div>
							)}
							{inlineimage && (
								<img
									src={inlineimage.mediaItemUrl}
									alt={inlineimage.altText ? inlineimage.altText : "Incuba ONG"}
									className="w-full my-8"
								/>
							)}
							{content2 && (
								<div
									dangerouslySetInnerHTML={createMarkup(content2)}
									style={{ whiteSpace: "pre-wrap" }}
								></div>
							)}
						</div>
					</div>
					<div className="">
						<div
							className="text-lg text-darkgray1 break-all border-b border-orange1"
							dangerouslySetInnerHTML={{ __html: reference }}
							style={{ whiteSpace: "pre-wrap" }}
						></div>
						<div className="font-benton700 flex flex-col sm:flex-row justify-between text-darkgray1 sm:w-2/3 lg:w-1/3 my-12">
							<div className="mb-4">Compartir</div>
							<div className="flex gap-4 justify-between px-8 sm:px-0">
								<TwitterShareButton
									url={`https://www.incuba.ong/recursos/${path}`}
								>
									<img
										src={Twitter}
										alt="Twitter"
										className="cursor-pointer w-12"
									/>
								</TwitterShareButton>
								<FacebookShareButton
									url={`https://www.incuba.ong/recursos/${path}`}
								>
									<img
										src={Facebook}
										alt="Facebook"
										className="cursor-pointer w-12"
									/>
								</FacebookShareButton>
								<LinkedinShareButton
									url={`https://www.incuba.ong/recursos/${path}`}
								>
									<img
										src={Linkedin}
										alt="Twitter"
										className="cursor-pointer w-12"
									/>
								</LinkedinShareButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Recurso;
