import React from "react";
import { navigate } from "gatsby";
import { useInView } from "react-intersection-observer";

import Layout from "../components/layout/Layout";
import Button from "../components/shared/Button";

import Img1 from "../images/investigacion/ilus1.svg";
import Img2 from "../images/investigacion/ilus2.svg";
import Img3 from "../images/investigacion/ilus3.svg";
import Img4 from "../images/investigacion/ilus4.svg";
import Img5 from "../images/investigacion/ilus5.svg";

import ImgRecurso from "../images/investigacion/recurso1.svg";

const Recurso = ({ img, title, summary, link }) => {

	return (
		<div className="w-full text-darkgray1 mb-6">
			<img
				alt={title}
				src={img}
				className="m-auto w-full"
				onClick={() => navigate(link)}
			/>
			<p className="text-lg font-benton700 my-6">{title}</p>
			<p className="text-base my-6">{summary}</p>
			<Button
				text="Leer completo"
				variant="orange"
				action={() => navigate(link)}
			/>
		</div>
	);
};

const Investigacion = () => {
	const recursos = [
		{
			img: ImgRecurso,
			title: "¿Recibir donativos en criptomonedas?",
			summary:
				"Las criptomonedas son monedas digitales con las cuales es posible realizar operaciones o transacciones de manera inmediata y segura.",
			link: "/recursos/recurso",
		},
		{
			img: ImgRecurso,
			title: "¿Recibir donativos en criptomonedas?",
			summary:
				"Las criptomonedas son monedas digitales con las cuales es posible realizar operaciones o transacciones de manera inmediata y segura.",
			link: "/recursos/recurso",
		},
		{
			img: ImgRecurso,
			title: "¿Recibir donativos en criptomonedas?",
			summary:
				"Las criptomonedas son monedas digitales con las cuales es posible realizar operaciones o transacciones de manera inmediata y segura.",
			link: "/recursos/recurso",
		},
		{
			img: ImgRecurso,
			title: "¿Recibir donativos en criptomonedas?",
			summary:
				"Las criptomonedas son monedas digitales con las cuales es posible realizar operaciones o transacciones de manera inmediata y segura.",
			link: "/recursos/recurso",
		},
		{
			img: ImgRecurso,
			title: "¿Recibir donativos en criptomonedas?",
			summary:
				"Las criptomonedas son monedas digitales con las cuales es posible realizar operaciones o transacciones de manera inmediata y segura.",
			link: "/recursos/recurso",
		},
	];
	const [refIlus, inViewIlus] = useInView({
		threshold: 0,
	});

	return (
		<Layout title="Incubadora">
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
							<ul className="pl-4 list-disc marker:text-purple1 marker:font-bold marker:text-3xl">
								<li className="text-xl sm:text-2xl mb-8 mt-8">
									Cambios en el panorama de las organizaciones y el
									financiamiento a raíz del COVID-19.
								</li>
							</ul>
							<div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
								<Button text="Descarga el estudio completo" variant="orange" />
								<Button text="Descarga el resumen ejecutivo" variant="orange" />
							</div>
							<ul className="pl-4 list-disc marker:text-purple1 marker:font-bold marker:text-3xl">
								<li className="text-xl sm:text-2xl mb-8 mt-8">
									International Landscape Scans on the Current State of the
									Feedback Field in Mexico.
								</li>
							</ul>
							<div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
								<Button
									text="Descarga el estudio en español"
									variant="orange"
								/>
								<Button text="Descarga el estudio en inglés" variant="orange" />
							</div>
						</div>
					</div>
					<p className="mt-8 text-darkgray1 font-benton700 text-lg sm:text-3xl">
						Otros recursos
					</p>
					<div className="mt-8 mb-20 flex grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-16 lg:gap-32">
						{recursos.map((recurso, i) => (
							<Recurso
								key={`${i}${recurso.title}`}
								img={recurso.img}
								title={recurso.title}
								summary={recurso.summary}
								link={recurso.link}
							/>
						))}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Investigacion;
