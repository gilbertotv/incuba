import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout/Layout";

import Team1 from "../images/nosotras/team1.svg";
import Consejo1 from "../images/nosotras/consejo1.svg";

interface Img {
	altText: string;
	mediaItemUrl: string;
}

interface Equipo {
	group: string;
	order: number;
	name: string;
	resume: string;
	role: string;
	img: Img;
}

interface WPResp {
	equipo: Equipo;
}

const Member = ({
	img,
	name,
	role,
	resume,
}: {
	img: Img;
	name: string;
	resume: string;
	role?: string;
}) => {
	return (
		<div className="w-full text-darkgray1 mb-6">
			<img
				alt={img ? img.altText : name}
				src={img ? img.mediaItemUrl : ""}
				className="m-auto w-full"
			/>
			<p className="text-xl font-benton700 my-6">{name}</p>
			{role && (
				<p className="text-base font-benton700 text-orange1 my-6">{role}</p>
			)}
			<p className="text-lg my-6">{resume}</p>
		</div>
	);
};

const Nosotras = () => {
	const data = useStaticQuery(graphql`
		query {
			allWpPost(
				filter: {
					categories: { nodes: { elemMatch: { slug: { eq: "equipo" } } } }
				}
			) {
				nodes {
					equipo {
						group
						order
						name
						resume
						role
						img {
							altText
							mediaItemUrl
						}
					}
				}
			}
		}
	`);

	const {
		allWpPost: { nodes },
	} = data;

	const team: Equipo[] = nodes
		.filter((node: WPResp) => node.equipo)
		.map((node) => node.equipo);

	const groups: string[] = team
		.map((node) => node.group)
		.filter((value, index, self) => self.indexOf(value) === index)
		.sort()
		.reverse();

	return (
		<Layout title="Incubadora">
			<div className="w-screen">
				<div className="container md:px-24">
					<div className="flex flex-col md:flex-row mt-28 sm:mt-32">
						<p className="text-xl text-orange1 font-benton700 sm:text-3xl">
							Nosotras
						</p>
					</div>
					{groups &&
						groups.map((group, i) => (
							<React.Fragment key={`group${i}`}>
								<p className="mt-8 text-darkgray1 font-benton700 text-lg sm:text-3xl capitalize">
									{group}
								</p>
								<div className="mt-8 mb-20 flex grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-16 lg:gap-32">
									{team
										.filter(
											(member) =>
												member.group === group &&
												member.name &&
												member.img &&
												member.resume
										)
										.sort((a, b) => a.order - b.order)
										.map((member, indx) => (
											<Member
												key={`member${i}${indx}`}
												img={member.img}
												name={member.name}
												resume={member.resume}
												role={member.role}
											/>
										))}
								</div>
							</React.Fragment>
						))}
				</div>
			</div>
		</Layout>
	);
};

export default Nosotras;
