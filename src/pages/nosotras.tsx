import React from "react";
import Layout from "../components/layout/Layout";

import Team1 from "../images/nosotras/team1.svg";
import Consejo1 from "../images/nosotras/consejo1.svg";

const Member = ({
	img,
	name,
	role,
	resume,
}: {
	img: any;
	name: string;
	resume: string;
	role?: string;
}) => {
	return (
		<div className="w-full text-darkgray1 mb-6">
			<img alt={name} src={img} className="m-auto w-full" />
			<p className="text-2xl font-benton700 my-6">{name}</p>
			{role && (
				<p className="text-base font-benton700 text-orange1 my-6">{role}</p>
			)}
			<p className="text-xl my-6">{resume}</p>
		</div>
	);
};

const Nosotras = () => {
	const team = [
		{
			group: "Equipo",
			members: [
				{
					img: Team1,
					name: "Susana Donaire",
					role: "Fundadora y Directora de INCUBA ONG",
					resume:
						"Fundé Incuba porque creo que necesitamos más organizaciones y mejor preparadas para poder incrementar el alcance de su labor. Las organizaciones comunitarias son el centro de la estrategia dado que son quienes pueden tener un mayor impacto, sostenible en el tiempo.",
				},
				{
					img: Team1,
					name: "Susana Donaire",
					role: "Fundadora y Directora de INCUBA ONG",
					resume:
						"Fundé Incuba porque creo que necesitamos más organizaciones y mejor preparadas para poder incrementar el alcance de su labor. Las organizaciones comunitarias son el centro de la estrategia dado que son quienes pueden tener un mayor impacto, sostenible en el tiempo.",
				},
				{
					img: Team1,
					name: "Susana Donaire",
					role: "Fundadora y Directora de INCUBA ONG",
					resume:
						"Fundé Incuba porque creo que necesitamos más organizaciones y mejor preparadas para poder incrementar el alcance de su labor. Las organizaciones comunitarias son el centro de la estrategia dado que son quienes pueden tener un mayor impacto, sostenible en el tiempo.",
				},
				{
					img: Team1,
					name: "Susana Donaire",
					role: "Fundadora y Directora de INCUBA ONG",
					resume:
						"Fundé Incuba porque creo que necesitamos más organizaciones y mejor preparadas para poder incrementar el alcance de su labor. Las organizaciones comunitarias son el centro de la estrategia dado que son quienes pueden tener un mayor impacto, sostenible en el tiempo.",
				},
				{
					img: Team1,
					name: "Susana Donaire",
					role: "Fundadora y Directora de INCUBA ONG",
					resume:
						"Fundé Incuba porque creo que necesitamos más organizaciones y mejor preparadas para poder incrementar el alcance de su labor. Las organizaciones comunitarias son el centro de la estrategia dado que son quienes pueden tener un mayor impacto, sostenible en el tiempo.",
				},
			],
		},
		{
			group: "Consejo",
			members: [
				{
					img: Consejo1,
					name: "Amanda Gigler",
					resume:
						"Es consultora independiente. Cuenta con 20 años de experiencia en movilización de recursos y dirección de organizaciones feministas. Anteriormente, fue directora de alianzas y comunicaciones en Mama Cash, directora ejecutiva de Calala Fondo de Mujeres, y coordinadora de movilización de recursos de Fondo Semillas y el Fondo Centroamericano de Mujeres. Su trabajo actual incluye asesoría estratégica, facilitación de procesos y acompañamiento de liderazgos, con fundaciones privadas y grupos activistas.",
				},
				{
					img: Consejo1,
					name: "Amanda Gigler",
					resume:
						"Es consultora independiente. Cuenta con 20 años de experiencia en movilización de recursos y dirección de organizaciones feministas. Anteriormente, fue directora de alianzas y comunicaciones en Mama Cash, directora ejecutiva de Calala Fondo de Mujeres, y coordinadora de movilización de recursos de Fondo Semillas y el Fondo Centroamericano de Mujeres. Su trabajo actual incluye asesoría estratégica, facilitación de procesos y acompañamiento de liderazgos, con fundaciones privadas y grupos activistas.",
				},
				{
					img: Consejo1,
					name: "Amanda Gigler",
					resume:
						"Es consultora independiente. Cuenta con 20 años de experiencia en movilización de recursos y dirección de organizaciones feministas. Anteriormente, fue directora de alianzas y comunicaciones en Mama Cash, directora ejecutiva de Calala Fondo de Mujeres, y coordinadora de movilización de recursos de Fondo Semillas y el Fondo Centroamericano de Mujeres. Su trabajo actual incluye asesoría estratégica, facilitación de procesos y acompañamiento de liderazgos, con fundaciones privadas y grupos activistas.",
				},
				{
					img: Consejo1,
					name: "Amanda Gigler",
					resume:
						"Es consultora independiente. Cuenta con 20 años de experiencia en movilización de recursos y dirección de organizaciones feministas. Anteriormente, fue directora de alianzas y comunicaciones en Mama Cash, directora ejecutiva de Calala Fondo de Mujeres, y coordinadora de movilización de recursos de Fondo Semillas y el Fondo Centroamericano de Mujeres. Su trabajo actual incluye asesoría estratégica, facilitación de procesos y acompañamiento de liderazgos, con fundaciones privadas y grupos activistas.",
				},
				{
					img: Consejo1,
					name: "Amanda Gigler",
					resume:
						"Es consultora independiente. Cuenta con 20 años de experiencia en movilización de recursos y dirección de organizaciones feministas. Anteriormente, fue directora de alianzas y comunicaciones en Mama Cash, directora ejecutiva de Calala Fondo de Mujeres, y coordinadora de movilización de recursos de Fondo Semillas y el Fondo Centroamericano de Mujeres. Su trabajo actual incluye asesoría estratégica, facilitación de procesos y acompañamiento de liderazgos, con fundaciones privadas y grupos activistas.",
				},
				{
					img: Consejo1,
					name: "Amanda Gigler",
					resume:
						"Es consultora independiente. Cuenta con 20 años de experiencia en movilización de recursos y dirección de organizaciones feministas. Anteriormente, fue directora de alianzas y comunicaciones en Mama Cash, directora ejecutiva de Calala Fondo de Mujeres, y coordinadora de movilización de recursos de Fondo Semillas y el Fondo Centroamericano de Mujeres. Su trabajo actual incluye asesoría estratégica, facilitación de procesos y acompañamiento de liderazgos, con fundaciones privadas y grupos activistas.",
				},
				{
					img: Consejo1,
					name: "Amanda Gigler",
					resume:
						"Es consultora independiente. Cuenta con 20 años de experiencia en movilización de recursos y dirección de organizaciones feministas. Anteriormente, fue directora de alianzas y comunicaciones en Mama Cash, directora ejecutiva de Calala Fondo de Mujeres, y coordinadora de movilización de recursos de Fondo Semillas y el Fondo Centroamericano de Mujeres. Su trabajo actual incluye asesoría estratégica, facilitación de procesos y acompañamiento de liderazgos, con fundaciones privadas y grupos activistas.",
				},
			],
		},
	];
	return (
		<Layout title="Incubadora">
			<div className="w-screen">
				<div className="container">
					<div className="flex flex-col md:flex-row mt-28 sm:mt-32">
						<p className="text-xl text-orange1 font-benton700 sm:text-3xl">
							Nosotras
						</p>
					</div>
					{team.map((group) => (
						<>
							<p className="mt-8 text-darkgray1 font-benton700 text-lg sm:text-3xl">
								{group.group}
							</p>
							<div className="mt-8 mb-20 flex grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-16">
								{group.members.map((member) => (
									<Member
										img={member.img}
										name={member.name}
										resume={member.resume}
										role={member.role}
									/>
								))}
							</div>
						</>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Nosotras;
