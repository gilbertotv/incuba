import React from "react";
import Section from "../layout/Section";
import Button from "../shared/Button";

const Circle = ({ children, number, className, classCircle }) => (
	<div className={`absolute  ${className}`}>
		<div className="relative">
			<div
				className={`rounded-full text-center flex flex-col items-center justify-center font-benton700 ${classCircle}`}
			>
				{number}
				{number === "1.4" && <p className="text-lg">millones</p>}
			</div>
			<div className="text-darkgray1 text-base text-center w-full absolute left-0 -bottom-12">
				{children}
			</div>
		</div>
	</div>
);

const Home = ({id}) => {
	return (
		<Section id={id} className="bg-white">
			<div className="flex flex-col lg:flex-row mt-12 sm:mt-0">
				<div className="lg:w-1/2 lg:order-2 lg:h-auto mb-64 sm:mb-0">
					<p className="block sm:hidden text-xl text-darkgray1 sm:text-4xl mb-4">
						Nuestro modelo de fortalecimiento enfocado en el desarrollo
						comunitario nos permite impactar en la vida de muchas personas.
					</p>
					<div className="relative w-full h-full flex items-center justify-center">
						<div className="relative lg:absolute w-72 sm:w-full h-96 sm:h-72">
							<Circle
								className="left-0 sm:left-8 top-0"
								classCircle="bg-beige1 text-black w-36 h-36 text-5xl"
								number="76"
							>
								Personas
								<br />
								Capacitadas
							</Circle>
							<Circle
								className="right-0 sm:right-auto sm:left-40 sm:bottom-0 top-36 sm:top-auto"
								classCircle="bg-black text-white w-24 h-24 text-6xl"
								number="9"
							>
								Organizaciones
								<br />
								incubadas
							</Circle>
							<Circle
								className="left-0 sm:left-auto sm:right-56  top-56 sm:top-auto"
								classCircle="bg-orange1 text-white w-28 h-28 text-6xl"
								number="16"
							>
								Organizaciones
								<br />
								fortalecidas
							</Circle>
							<Circle
								className="right-0 sm:bottom-0  top-96 sm:top-auto"
								classCircle="bg-purple1 text-white w-48 h-48 text-5xl"
								number="1.4"
							>
								de pesos de inversión
								<br />
								en servicios probono
							</Circle>
						</div>
					</div>
				</div>
				<div className="lg:w-1/2 lg:order-1 py-8 sm:py-36">
					<p className="hidden sm:block text-xl text-darkgray1 sm:text-4xl mb-4">
						Nuestro modelo de fortalecimiento enfocado en el desarrollo
						comunitario nos permite impactar en la vida de muchas personas.
					</p>
					<p className="text-lg text-darkgray1 sm:text-2xl  mb-8">
						Conoce más sobre nosotras, descarga nuestro reporte anual.
					</p>
					<Button text="Descargar" variant="orange" />
				</div>
			</div>
		</Section>
	);
};

export default Home;
