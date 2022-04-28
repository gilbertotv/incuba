import React from "react";
import Section from "../layout/Section";

import Img1 from "../../images/home/ilus2/ilus1.svg";
import Img2 from "../../images/home/ilus2/ilus2.svg";
import Img3 from "../../images/home/ilus2/ilus3.svg";
import Img4 from "../../images/home/ilus2/ilus4.svg";
import Img5 from "../../images/home/ilus2/ilus5.svg";
import Img6 from "../../images/home/ilus2/ilus6.svg";

const Motivacion = ({ id, intersected }) => {
	return (
		<Section id={id} className="bg-white">
			<div className="flex flex-col md:flex-row mt-12 md:mt-0">
				<div className="md:w-1/2 md:order-2 sm:h-auto">
					<p className="text-2xl font-benton700 text-orange1 mb-8 block md:hidden">
						Motivación
					</p>
					<div className="flex h-full items-center">
						<div className="relative w-full h-full">
							<div className="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
								<div className="relative m-auto w-80 h-80 sm:scale-110 lg:scale-125">
									<img
										alt="Incuba ONG"
										src={Img1}
										className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-20`}
									/>
									<img
										alt="Incuba ONG"
										src={Img2}
										className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-20 transition-all duration-1000 ease-in-out ${
											intersected ? "opacity-100" : "scale-x-0 opacity-0"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img3}
										className={`absolute h-96 left-1/2 -translate-x-1/2 -bottom-4 z-10 transition-all duration-1000 ease-in-out ${
											intersected ? "opacity-100" : "opacity-0"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img4}
										className={`absolute w-80 left-1/2 -translate-x-1/2 bottom-4 -ml-4 z-0 transition-all delay-500 duration-1000 ease-in-out ${
											intersected ? "opacity-100" : "opacity-0"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img5}
										className={`absolute w-72 left-1/2 -translate-x-1/2 -ml-4 z-20 transition-all delay-300 duration-1000 ease-in-out ${
											intersected ? "bottom-8 opacity-100" : "bottom-16 opacity-0"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img6}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-4 ml-4 `}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:w-1/2 md:order-1 py-8 md:py-36">
					<div className="xl:ml-24">
						<p className="textxl sm:text-3xl font-benton700 text-orange1 mb-8 hidden md:block">
							Motivación
						</p>
						<p className="text-xl text-darkgray1 sm:text-2xl lg:text-3xl  mb-8">
							Somos una organización sin fines de lucro que busca contribuir al
							fortalecimiento del espacio cívico local en México, a través de
							acciones que permitan la incubación, el desarrollo y
							sostenibilidad institucional de iniciativas de base comunitaria
							sin fines de lucro.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Motivacion;
