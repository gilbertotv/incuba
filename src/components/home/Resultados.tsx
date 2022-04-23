import React from "react";
import Section from "../layout/Section";
import Button from "../shared/Button";

const Circle = ({ children, number, text, className }) => (
	<div className="relstive">
		<div
			className={`rounded-full flex items-center justify-center font-benton700 ${className}`}
		>
			{number}
		</div>
		<p className="text-darkgray1 text-lg text-center == absolute -bottom-12">
			{children}
		</p>
	</div>
);

const Home = () => {
	return (
		<Section className="bg-white">
			<div className="flex flex-col sm:flex-row mt-24 sm:mt-0">
				<div className="sm:w-1/2 sm:order-2 sm:h-auto">
					<div className="flex items-center">
						<div className="relative w-full h-full">
							<div className="absolute w-full h-72">
								<Circle
									className="bg-beige1 text-black w-36 h-36 text-5xl absolute top-0 left-1/2 -translate-x-1/2 -ml-36"
									number="76"
									text="Personas capacitadas"
								>
									Personas
									<br />
									Capacitadas
								</Circle>
								<Circle
									className="bg-black text-white w-24 h-24 absolute text-6xl bottom-0 left-1/2 -translate-x-1/2 -ml-4"
									number="9"
									text="Personas capacitadas"
								>
									Organizaciones
									<br />
									incubadas
								</Circle>
								<Circle
									className="bg-orange1 text-white w-28 h-28 text-5xl absolute text-6xl top-0 left-1/2 -translate-x-1/2 ml-24"
									number="16"
									text="Personas capacitadas"
								>
									Organizaciones
									<br />
									fortalecidas
								</Circle>
								<Circle
									className="bg-purple1 text-white w-48 h-48 text-5xl absolute bottom-0 left-1/2 -translate-x-1/2 bottom-0 ml-72"
									number="1.4"
									text="Personas capacitadas"
								>
									de pesos de inversión
									<br />
									en servicios probono
								</Circle>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:w-1/2 sm:order-1 py-8 sm:py-36">
					<p className="text-xl text-darkgray1 sm:text-4xl mb-4">
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
