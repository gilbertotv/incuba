import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Section from "../layout/Section";

export interface OrganizacionesResponse {
	organizaciones: OrganizacionesClass;
	alianzas: OrganizacionesClass;
}

export interface OrganizacionesClass {
	nodes: Node[];
}

export interface Node {
	alianzas: NodeAlianzas;
}

export interface NodeAlianzas {
	image: Image;
	order: number;
}

export interface Image {
	altText: string;
	mediaItemUrl: string;
}

const Convocatoria = ({ id, convocatoria }) => {
	const data: OrganizacionesResponse = useStaticQuery(graphql`
		query {
			organizaciones: allWpPost(
				filter: {
					categories: {
						nodes: { elemMatch: { slug: { eq: "organizaciones" } } }
					}
				}
				sort: { fields: alianzas___order }
			) {
				nodes {
					alianzas {
						image {
							altText
							mediaItemUrl
						}
						order
					}
				}
			}
			alianzas: allWpPost(
				filter: {
					categories: { nodes: { elemMatch: { slug: { eq: "alianzas" } } } }
				}
				sort: { fields: alianzas___order }
			) {
				nodes {
					alianzas {
						image {
							altText
							mediaItemUrl
						}
						order
					}
				}
			}
		}
	`);

	const { alianzas, organizaciones } = data;

	return (
		<Section id={id} className="bg-white sm:pt-32">
			<div className="flex flex-col sm:flex-row mt-12 sm:mt-0">
				<div className="sm:w-2/5">
					<p className="text-xl text-orange1 sm:text-3xl sm:-mt-24 mb-8">
						Convocatoria 2022
					</p>
				</div>
				<div className="sm:w-3/5 sm:pl-16">
					<p className="text-xl text-darkgray1 sm:text-3xl mb-8">
						{convocatoria
							? convocatoria
							: "El Modelo Incuba consiste en un acompañamiento de 12 meses para organizaciones sin fines de lucro que busquen fortalecimiento institucional."}
					</p>
				</div>
			</div>
			<p className="text-xl text-darkgray1 font-benton700 sm:text-3xl mb-8">
				Organizaciones incubadas
			</p>
			<div className="flex grid grid-cols-3 sm:grid-cols-8 mb-8">
				{organizaciones &&
					organizaciones.nodes &&
					organizaciones.nodes.map((org, i) => (
						<div key={`${i}Org`}>
							<img
								src={org.alianzas.image.mediaItemUrl}
								className="m-auto mb-4 sm:mb-0"
								alt={
									org.alianzas.image.altText
										? org.alianzas.image.altText
										: "Incuba Organización"
								}
							/>
						</div>
					))}
			</div>
			<p className="text-xl text-darkgray1 font-benton700 sm:text-3xl mb-8">
				Alianzas y colaboraciones
			</p>
			<div className="flex flex-row flex-wrap justify-between items-center gap-4 mb-8">
				{alianzas &&
					alianzas.nodes &&
					alianzas.nodes.map((org, i) => (
						<div key={`${i}Org`}>
							<img
								src={org.alianzas.image.mediaItemUrl}
								className="m-auto mb-4 sm:mb-0"
								alt={
									org.alianzas.image.altText
										? org.alianzas.image.altText
										: "Incuba Organización"
								}
							/>
						</div>
					))}
				{/*
				<div className="flex grid grid-cols-3 sm:gap-12 mb-4 sm:mb-0">
					<div className="flex items-center">
						<img src={ImgAl1} className="m-auto" alt="Incuba Organización" />
					</div>
					<div className="flex items-center">
						<img src={ImgAl2} className="m-auto" alt="Incuba Organización" />
					</div>
					<div className="flex items-center">
						<img src={ImgAl3} className="m-auto" alt="Incuba Organización" />
					</div>
				</div>
				<div className="flex grid grid-cols-2 mb-4 sm:mb-0">
					<div className="flex items-center">
						<img src={ImgAl4} className="m-auto" alt="Incuba Organización" />
					</div>
					<div className="flex items-center">
						<img src={ImgAl5} className="m-auto" alt="Incuba Organización" />
					</div>
				</div>
				<div className="flex grid grid-cols-2 mb-4 sm:mb-0">
					<div className="flex items-center">
						<img src={ImgAl6} className="m-auto" alt="Incuba Organización" />
					</div>
					<div className="flex items-center">
						<img src={ImgAl7} className="m-auto" alt="Incuba Organización" />
					</div>
							</div>*/}
			</div>
		</Section>
	);
};

export default Convocatoria;
