import React from "react";
import { navigate } from "gatsby";
import { useInView } from "react-intersection-observer";

import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";

import Img1 from "../images/incubadora/ilus/ilus1.svg";
import Img2 from "../images/incubadora/ilus/ilus2.svg";
import Img3 from "../images/incubadora/ilus/ilus3.svg";
import Img4 from "../images/incubadora/ilus/ilus4.svg";
import Img5 from "../images/incubadora/ilus/ilus5.svg";
import Img6 from "../images/incubadora/ilus/ilus6.svg";
import Img7 from "../images/incubadora/ilus/ilus7.svg";

import Mod1 from "../images/incubadora/01.svg";
import Mod2 from "../images/incubadora/02.svg";
import Mod3 from "../images/incubadora/03.svg";
import Mod4 from "../images/incubadora/04.svg";
import Mod5 from "../images/incubadora/05.svg";
import Mod6 from "../images/incubadora/06.svg";
import Mod7 from "../images/incubadora/07.svg";
import Mod8 from "../images/incubadora/08.svg";
import Mod9 from "../images/incubadora/09.svg";
import Mod10 from "../images/incubadora/10.svg";

const Modulo = ({
	innerRef,
	ilus,
	text1,
	text2,
	intersect,
}: {
	innerRef;
	ilus: any;
	text1: string;
	text2: string;
	intersect: boolean;
}) => {
	return (
		<div ref={innerRef} className="flex flex-col mb-8">
			<div
				className={`rounded-full flex items-center justify-center mx-auto bg-purple1 w-28 h-28 transition-all duration-1000 ease-in-out ${
					intersect ? "opacity-100" : "opacity-0 scale-0"
				}`}
			>
				<img src={ilus} alt="Incuba Modulo" className="" />
			</div>
			<p className="text-black text-center font-benton700 text-lg my-4">
				{text1}
			</p>
			<p className="text-black text-center text-xl lg:px-8">{text2}</p>
		</div>
	);
};

const Incubadora = () => {
	const modulos = [
		{
			img: Mod1,
			text1: "Módulo 1",
			text2: "Diagnóstico de fortalecimiento institucional",
		},
		{
			img: Mod2,
			text1: "Módulo 2",
			text2: "Aspectos legales y fiscales",
		},
		{
			img: Mod3,
			text1: "Módulo 3",
			text2: "Planeación estratégica",
		},
		{
			img: Mod4,
			text1: "Módulo 4",
			text2: "Metodología de intervención",
		},
		{
			img: Mod5,
			text1: "Módulo 5",
			text2: "Planeación financiera",
		},
		{
			img: Mod6,
			text1: "Módulo 6",
			text2: "Estrategia de procuración de fondos",
		},
		{
			img: Mod7,
			text1: "Módulo 7",
			text2: "Comunicación estratégica",
		},
		{
			img: Mod8,
			text1: "Módulo 8",
			text2: "Gestión de recursos humanos",
		},
		{
			img: Mod9,
			text1: "Módulo 9",
			text2: "Monitoreo y evaluación",
		},
		{
			img: Mod10,
			text1: "Módulo 10",
			text2: "Planeación operativa",
		},
	];
	const [refIlus, inViewIlus] = useInView({
		threshold: 0,
	});
	const [refMod0, inViewMod0] = useInView({
		threshold: 0,
	});
	const [refMod1, inViewMod1] = useInView({
		threshold: 0,
	});
	const [refMod2, inViewMod2] = useInView({
		threshold: 0,
	});
	const [refMod3, inViewMod3] = useInView({
		threshold: 0,
	});
	const [refMod4, inViewMod4] = useInView({
		threshold: 0,
	});
	const [refMod5, inViewMod5] = useInView({
		threshold: 0,
	});
	const [refMod6, inViewMod6] = useInView({
		threshold: 0,
	});
	const [refMod7, inViewMod7] = useInView({
		threshold: 0,
	});
	const [refMod8, inViewMod8] = useInView({
		threshold: 0,
	});
	const [refMod9, inViewMod9] = useInView({
		threshold: 0,
	});

	const refs = [
		refMod0,
		refMod1,
		refMod2,
		refMod3,
		refMod4,
		refMod5,
		refMod6,
		refMod7,
		refMod8,
		refMod9,
	];

	const inview = [
		inViewMod0,
		inViewMod1,
		inViewMod2,
		inViewMod3,
		inViewMod4,
		inViewMod5,
		inViewMod6,
		inViewMod7,
		inViewMod8,
		inViewMod9,
	];

	return (
		<Layout
			title="Incubadora de organizacionescsin fines de lucro"
			description="Es un programa de acompañamiento a organizaciones sin fines de lucro durante 12 meses. Abordamos herramientas que les permitan la implementación de procesos de fortalecimiento institucional y recaudación de recursos para procurar su sostenibilidad en el tiempo y potenciar el impacto de su labor."
		>
			<div className="w-screen">
				<div className="container">
					<div className="flex flex-col md:flex-row mb-16 mt-28 sm:mt-32">
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
												className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-10`}
											/>
											<img
												alt="Incuba ONG"
												src={Img2}
												className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-0 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "-rotate-45 opacity-0"
												}`}
											/>
											<img
												alt="Incuba ONG"
												src={Img3}
												className={`absolute w-80 left-1/2 -translate-x-1/2 bottom-0 z-10`}
											/>
											<img
												alt="Incuba ONG"
												src={Img4}
												className={`absolute w-72 left-1/2 -translate-x-1/2 bottom-4 z-20 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "bottom-12 opacity-0"
												}`}
											/>
											<img
												alt="Incuba ONG"
												src={Img5}
												className={`absolute w-72 left-1/2 -translate-x-1/2 bottom-0 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "scale-0 opacity-0"
												}`}
											/>
											<img
												alt="Incuba ONG"
												src={Img6}
												className={`absolute w-72 left-1/2 -translate-x-1/2 bottom-4 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "scale-0 opacity-0"
												}`}
											/>
											<img
												alt="Incuba ONG"
												src={Img7}
												className={`absolute w-72 left-1/2 -translate-x-1/2 bottom-4 transition-all duration-1000 ease-in-out ${
													inViewIlus ? "opacity-100" : "scale-0 opacity-0"
												}`}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="md:order-1 md:w-2/3 md:pr-24">
							<p className="hidden md:block text-xl text-orange1 font-benton700 sm:text-3xl mb-8">
								Incubadora de organizaciones <br /> sin fines de lucro
							</p>
							<p className="text-xl text-darkgray1 sm:text-2xl mb-8 mt-8 md:mt-0">
								Es un programa de acompañamiento a organizaciones sin fines de
								lucro durante 12 meses. Abordamos herramientas que les permitan
								la implementación de procesos de fortalecimiento institucional y
								recaudación de recursos para procurar su sostenibilidad en el
								tiempo y potenciar el impacto de su labor.
							</p>
						</div>
					</div>
					<div className="text-darkgray1 pb-32">
						<p className="font-benton700 text-lg sm:text-3xl">
							La incubadora consta de 10 módulos.
						</p>
						<div className="w-full grid sm:grid-cols-3 md:grid-cols-4 my-16">
							{modulos.map((mod, i) => (
								<Modulo
									key={`${i}${mod.text1}`}
									innerRef={refs[i]}
									ilus={mod.img}
									text1={mod.text1}
									text2={mod.text2}
									intersect={inview[i]}
								/>
							))}
						</div>
						<p className="md:w-2/3 text-xl sm:text-4xl mb-16">
							Únete a nuestra Red Semilla para ayudar al desarrollo comunitario
							de México.
						</p>
						<Button
							text="Dona ahora"
							variant="orange"
							action={() => navigate("/dona")}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Incubadora;
