import React from "react";
import { navigate } from "gatsby";
import Home from "../components/home/Home";
import Motivacion from "../components/home/Motivacion";
import Nosotras from "../components/home/Nosotras";
import Resultados from "../components/home/Resultados";

import Layout from "../components/layout/Layout";
import SectionEstrategia from "../components/home/SectionEstrategia";
import Convocatoria from "../components/home/Convocatoria";
import Contacto from "../components/home/Contacto";

const IndexPage = () => {
	return (
		<Layout title="Home">
			<Home id="inicio" />
			<Motivacion id="motivacion" />
			<Resultados id="resultados" />
			<div id="herramientas">
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
					action={() => navigate("/incubadora")}
				/>
				<SectionEstrategia
					className="bg-beige1"
					title="Estrategias de intervención"
					subtitle="Investigación"
					content="Realizamos investigaciones y análisis del contexto social, con la finalidad de brindar información útil para el desarrollo proactivo del tercer sector en México."
					button="Conoce más"
					action={() => navigate("/incubadora")}
				/>
			</div>
			<Convocatoria id="convocatoria" />
			<Nosotras />
			<Contacto id="contacto" />
		</Layout>
	);
};

export default IndexPage;
