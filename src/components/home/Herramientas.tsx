import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import SectionEstrategia from "./SectionEstrategia";

const Herramientas = ({ intersected, greater }) => {
	//console.log(intersected);
	const [scrollY, setScrollY] = useState(0);
	/*
	useEffect(() => {
		const onScroll = (event) => {
			event.preventDefault();
			if (greater)
				container.scrollBy({
					left: event.deltaY < 0 ? -30 : 30,
				});
		};
		const container = document.querySelector("#herramientas");

		container.addEventListener("wheel", (event) => onScroll(event));
		return () => {
			container.removeEventListener("scroll", onScroll);
		};
	}, []);*/

	useEffect(() => {
		console.log(greater);
		if (greater) {
			//document.body.style.overflow = "hidden";
			const onScroll = (event) => {
				event.preventDefault();
				if (greater)
					container.scrollBy({
						left: event.deltaY < 0 ? -30 : 30,
					});
			};
			const container = document.querySelector("#herramientas");

			container.addEventListener("scroll", (event) => onScroll(event));
		}
	}, [greater]);

	return (
		<div
			id="herramientas"
			className={`flex flex-row w-screen overflow-x-auto ${
				greater ? "fixed top-0 left-0" : ""
			}`}
		>
			<SectionEstrategia
				className="bg-beige1"
				title="Estrategias de intervención"
				subtitle="Incubadora de organizaciones sin fines de lucro"
				content="La Incubadora de organizaciones sin fines de lucro es un proceso de acompañamiento de 12 meses para colectivos que se quieren formalizar y organizaciones de reciente creación."
				button="Conoce más"
				action={() => navigate("/incubadora")}
			/>
			<SectionEstrategia
				className=""
				title="Estrategias de intervención"
				subtitle="Patrocinio ﬁscal"
				content="Con el programa de Patrocinio Fiscal brindamos la estructura institucional de Incuba a iniciativas comunitarias de alto impacto, que están diseñadas para el cumplimiento de objetivos específicos, acotados en el tiempo."
				button="Conoce más"
				action={() => navigate("/estrategias")}
			/>
			<SectionEstrategia
				className="bg-beige1"
				title="Estrategias de intervención"
				subtitle="Investigación"
				content="Realizamos investigaciones y análisis del contexto social, con la finalidad de brindar información útil para el desarrollo proactivo del tercer sector en México."
				button="Conoce más"
				action={() => navigate("/investigacion")}
			/>
		</div>
	);
};

export default Herramientas;
