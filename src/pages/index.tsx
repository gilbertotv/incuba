import React, { useEffect, useRef, useState } from "react";
import { graphql, navigate, useStaticQuery } from "gatsby";

import Home from "../components/home/Home";
import Motivacion from "../components/home/Motivacion";
import Nosotras from "../components/home/Nosotras";
import Resultados from "../components/home/Resultados";

import Layout from "../components/layout/Layout";
import SectionEstrategia from "../components/home/SectionEstrategia";
import Convocatoria from "../components/home/Convocatoria";
import Contacto from "../components/home/Contacto";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import useWindowSize, { Size } from "../hooks/useWindowSize";

interface HomeRes {
	home: Home;
}

interface Home {
	urlFile: string;
	resultados: string;
	reporte: string;
	personasCapacitadas: number;
	orgIncubadas: number;
	orgFortalecidas: number;
	nosotras: string;
	motivacion: string;
	inversion: string;
	convocatoria: string;
	home: string;
}

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allWpPost(
				filter: {
					categories: { nodes: { elemMatch: { slug: { eq: "home" } } } }
				}
			) {
				nodes {
					home {
						urlFile
						resultados
						reporte
						personasCapacitadas
						orgIncubadas
						orgFortalecidas
						nosotras
						motivacion
						inversion
						convocatoria
						home
					}
				}
			}
		}
	`);

	const inicioRef = useRef(null);
	const motivacionRef = useRef(null);
	const resultadosRef = useRef(null);
	const herramientasRef = useRef(null);
	const convocatoriaRef = useRef(null);
	const nosotrasRef = useRef(null);
	const contactoRef = useRef(null);

	const size: Size = useWindowSize();

	const [homeShow, setHomeShow] = useState({
		inicio: false,
		motivacion: false,
		resultados: false,
		herramientas: false,
		convocatoria: false,
		nosotras: false,
		contacto: false,
	});
	const [greater, setGreater] = useState(false);
	const [heightEst, setHeightEst] = useState(0);
	{
		useEffect(() => {
			const offset = document.querySelector(
				"#herramientas-container"
				// @ts-ignore:next-line
			).offsetWidth;
			const scroll = document.querySelector(
				"#herramientas-container"
			).scrollWidth;
			setHeightEst(scroll - offset);
		}, []);

		useEffect(() => {
			const container = document.querySelector("#herramientas");
			const onScroll = (e) => {
				if (
					window.scrollY > herramientasRef.current.offsetTop &&
					window.scrollY <
						herramientasRef.current.offsetTop +
							herramientasRef.current.clientHeight
				) {
					const offset = document.querySelector(
						"#herramientas-container"
						// @ts-ignore:next-line
					).scrollWidth;
					setGreater(true);
					const delta = window.scrollY - herramientasRef.current.offsetTop;
					document.querySelector("#herramientas-container").scrollLeft = delta;
					console.log(delta);
					console.log(size);
					console.log(offset);
				} else setGreater(false);
			};

			window.addEventListener("scroll", onScroll);

			return () => {
				window.removeEventListener("scroll", onScroll);
			};
		}, []);
	}
	useIntersectionObserver({
		refs: [
			inicioRef,
			motivacionRef,
			resultadosRef,
			herramientasRef,
			convocatoriaRef,
			nosotrasRef,
			contactoRef,
		],
		callback: ({ isIntersecting, target }) => {
			const sectionData = target.getAttribute("data-section-id");
			if (isIntersecting) {
				switch (sectionData) {
					case "inicio":
						setHomeShow({ ...homeShow, inicio: true });
						break;
					case "motivacion":
						setHomeShow({ ...homeShow, motivacion: true });
						break;
					case "resultados":
						setHomeShow({ ...homeShow, resultados: true });
						break;
					case "herramientas":
						setHomeShow({ ...homeShow, herramientas: true });
						break;
					case "convocatoria":
						setHomeShow({ ...homeShow, convocatoria: true });
						break;
					case "nosotras":
						setHomeShow({ ...homeShow, nosotras: true });
						break;
					case "contacto":
						setHomeShow({ ...homeShow, contacto: true });
						break;
					default:
						break;
				}
			}
		},
		options: {
			rootMargin: "0px",
			root: inicioRef.current,
			threshold: [0.6],
		},
	});

	const {
		allWpPost: { nodes },
	} = data;

	const nodeFiltered: HomeRes = nodes.find((node) => node.home !== null);
	const home = nodeFiltered ? nodeFiltered.home : null;

	return (
		<Layout title="Home">
			<div data-section-id="inicio" ref={inicioRef}>
				<Home id="inicio" intersected={homeShow.inicio} home={home.home} />
			</div>
			<div data-section-id="motivacion" ref={motivacionRef}>
				<Motivacion
					id="motivacion"
					intersected={homeShow.motivacion}
					motivacion={home.motivacion}
				/>
			</div>
			<div data-section-id="resultados" ref={resultadosRef}>
				<Resultados
					id="resultados"
					intersected={homeShow.resultados}
					resultados={home.resultados}
					reporte={home.reporte}
					personasCapacitadas={home.personasCapacitadas}
					orgIncubadas={home.orgIncubadas}
					orgFortalecidas={home.orgFortalecidas}
					inversion={home.inversion}
					urlFile={home.urlFile}
				/>
			</div>
			<div
				id="herramientas"
				className={``}
				data-section-id="herramientas"
				ref={herramientasRef}
				style={{ height: `${size.width * 3}px` }}
			>
				<div
					id="herramientas-container"
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
			</div>
			<div data-section-id="convocatoria" ref={convocatoriaRef}>
				<Convocatoria id="convocatoria" convocatoria={home.convocatoria} />
			</div>
			<div id="nosotras" data-section-id="nosotras" ref={nosotrasRef}>
				<Nosotras intersected={homeShow.nosotras} nosotras={home.nosotras} />
			</div>
			<div data-section-id="contacto" ref={contactoRef}>
				<Contacto id="contacto" />
			</div>
		</Layout>
	);
};

export default IndexPage;
