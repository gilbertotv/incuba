import React from "react";
import { navigate, useStaticQuery, graphql } from "gatsby";
import { useInView } from "react-intersection-observer";

import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";

import Img1 from "../images/investigacion/ilus1.svg";
import Img2 from "../images/investigacion/ilus2.svg";
import Img3 from "../images/investigacion/ilus3.svg";
import Img4 from "../images/investigacion/ilus4.svg";
import Img5 from "../images/investigacion/ilus5.svg";

interface InvestigacionResponse {
	investigacion: Investigacion;
}
interface RecursoResponse {
	resource: Recurso;
}

interface Investigacion {
	order: number;
	button: null | string;
	button2text: null | string;
	title: null | string;
	url1: null | string;
	url2: null | string;
}

interface Recurso {
	order: number;
	summary: string;
	title: string;
	thumb: Thumb;
	path: string;
}

interface Thumb {
	altText: string;
	mediaItemUrl: string;
}

const Recurso = ({ thumb, title, summary, link }) => {
	return (
		<div className="w-full text-darkgray1 mb-6 flex flex-col">
			<img
				alt={thumb.altText ? thumb.altText : "Incuba ONG"}
				src={thumb.mediaItemUrl}
				className="mx-auto w-full"
				onClick={() => navigate(`/recursos/${link}`)}
			/>
			<p className="text-lg font-benton700 my-6">{title}</p>
			<p className="text-base my-6">{summary}</p>
			<Button
				text="Leer completo"
				variant="orange"
				className="mt-auto"
				action={() => navigate(`/recursos/${link}`)}
			/>
		</div>
	);
};

const InvestigacionButtons = ({ title, btn1Text, url1, btn2Text, url2 }) => (
	<>
		<ul className="pl-4 list-disc marker:text-purple1 marker:font-bold marker:text-3xl">
			<li className="text-xl sm:text-2xl mb-8 mt-8">{title}</li>
		</ul>
		<div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
			{btn1Text && (
				<Button
					text={btn1Text}
					variant="orange"
					action={() => window.open(url1)}
				/>
			)}
			{btn2Text && (
				<Button
					text={btn2Text}
					variant="orange"
					action={() => window.open(url2)}
				/>
			)}
		</div>
	</>
);

const Investigacion = () => {
	const data = useStaticQuery(graphql`
		query {
			investigacion: allWpPost(
				filter: {
					categories: {
						nodes: { elemMatch: { slug: { eq: "investigacion" } } }
					}
				}
			) {
				nodes {
					investigacion {
						order
						button
						button2text
						title
						url1
						url2
					}
				}
			}
			recursos: allWpPost(
				filter: {
					categories: { nodes: { elemMatch: { slug: { eq: "recurso" } } } }
				}
			) {
				nodes {
					resource {
						order
						summary
						title
						thumb {
							altText
							mediaItemUrl
						}
						path
					}
				}
			}
		}
	`);

	const [refIlus, inViewIlus] = useInView({
		threshold: 0,
	});

	const {
		investigacion: { nodes },
		recursos: { nodes: nodesRecursos },
	} = data;

	const investigaciones: InvestigacionResponse[] = nodes
		.filter((node: InvestigacionResponse) => node.investigacion !== null)
		.filter((node: InvestigacionResponse) => node.investigacion.title !== null)
		.sort(
			(a: InvestigacionResponse, b: InvestigacionResponse) =>
				a.investigacion.order - b.investigacion.order
		);

	const recursos: RecursoResponse[] = nodesRecursos
		.filter(
			({ resource }) =>
				resource.path && resource.path !== null && resource.path !== ""
		)
		.sort(
			(a: RecursoResponse, b: RecursoResponse) =>
				a.resource.order - b.resource.order
		);

	return (
		<Layout title="Conoce nuestras investigaciones">
			<div className="w-screen">
				<div className="container">
					<div className="flex flex-col md:flex-row my-28 sm:my-32">
						<div className="md:order-2 md:w-1/3">
							<p className="block md:hidden text-xl text-orange1 font-benton700 sm:text-3xl">
								Incubadora de organizaciones sin fines de lucro
							</p>
							<div className="flex h-full items-center">
								<div className="relative w-full h-full">
									<div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
										<div
											className="relative m-auto w-80 h-80 md:scale-125"
											ref={refIlus}
										>
											<img
												alt="Incuba ONG"
												src={Img1}
												className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-10 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "w-0 opacity-0"
												}`}
											/>
											<img
												alt="Incuba ONG"
												src={Img2}
												className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-0 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "opacity-0"
												}`}
											/>
											<img
												alt="Incuba ONG"
												src={Img3}
												className={`absolute w-80 left-1/2 -translate-x-1/2 bottom-0 z-10 transition-all duration-1000 ease-in-out delay-300 ${
													inViewIlus ? "opacity-100" : "opacity-0"
												}`}
											/>
											<img
												alt="Incuba ONG"
												src={Img4}
												className={`absolute w-72 left-1/2 -translate-x-1/2 bottom-0 z-20 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "opacity-0 -bottom-4"
												}`}
											/>
											<img
												alt="Incuba ONG"
												src={Img5}
												className={`absolute w-72 left-1/2 -translate-x-1/2 bottom-0 -ml-4 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "opacity-0 rotate-45"
												}`}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="text-darkgray1 md:order-1 md:w-2/3 md:pr-28 ">
							<p className="hidden md:block text-xl text-orange1 font-benton700 sm:text-3xl mb-8">
								Conoce nuestras investigaciones
							</p>
							{investigaciones.map((inv, indx) => (
								<InvestigacionButtons
									key={`inv${indx}`}
									title={inv.investigacion.title}
									btn1Text={inv.investigacion.button}
									url1={inv.investigacion.url1}
									btn2Text={inv.investigacion.button2text}
									url2={inv.investigacion.url2}
								/>
							))}
						</div>
					</div>
					<p className="mt-8 text-darkgray1 font-benton700 text-lg sm:text-3xl">
						Otros recursos
					</p>
					<div className="mt-8 mb-20 flex grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-16 lg:gap-32">
						{recursos.map(({ resource }, i) => (
							<Recurso
								key={`${i}resource`}
								thumb={resource.thumb}
								title={resource.title}
								summary={resource.summary}
								link={resource.path}
							/>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Investigacion;
