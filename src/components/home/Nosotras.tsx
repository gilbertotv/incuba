import React from "react";
import { navigate } from "gatsby";
import Section from "../layout/Section";
import Button from "../shared/Button";

import Img1 from "../../images/home/ilus3/ilus1.svg";
import Img2 from "../../images/home/ilus3/ilus2.svg";
import Img3 from "../../images/home/ilus3/ilus3.svg";
import Img4 from "../../images/home/ilus3/ilus4.svg";
import Img5 from "../../images/home/ilus3/ilus5.svg";
import Img6 from "../../images/home/ilus3/ilus6.svg";
import Img7 from "../../images/home/ilus3/ilus7.svg";

const Home = ({ intersected, nosotras }) => {
	return (
		<Section className="bg-beige1">
			<div className="flex flex-col sm:flex-row mt-12 sm:mt-0">
				<div className="sm:w-1/2 sm:order-2 sm:h-auto">
					<p className="text-2xl font-benton700 text-orange1 mb-8 block sm:hidden">
						Nosotras
					</p>
					<div className="flex h-full items-center">
						<div className="relative w-full h-full">
							<div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
								<div className="relative m-auto w-80 h-80 md:scale-125">
									<img
										alt="Incuba ONG"
										src={Img1}
										className={`absolute w-72 left-1/2 -translate-x-1/2 bottom-0 z-20 transition-all duration-1000 ease-in-out ${
											intersected ? "opacity-100" : "opacity-0 -rotate-45"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img2}
										className={`absolute w-72 left-1/2 -translate-x-1/2 bottom-0 z-20 transition-all duration-1000 ease-in-out ${
											intersected ? "opacity-100" : "opacity-0 -rotate-45"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img3}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-0 z-10 transition-all duration-1000 ease-in-out delay-100 ${
											intersected ? "opacity-100" : "opacity-0 -bottom-8"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img4}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-0 z-10 transition-all duration-1000 ease-in-out delay-150 ${
											intersected ? "opacity-100" : "opacity-0 -bottom-8"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img5}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-0 z-0 transition-all duration-1000 ease-in-out delay-200 ${
											intersected ? "opacity-100" : "opacity-0 -bottom-8"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img6}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-0 transition-all duration-1000 ease-in-out delay-300 ${
											intersected ? "opacity-100" : "opacity-0 -bottom-8"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img7}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-4 transition-all duration-1000 ease-in-out delay-500 ${
											intersected ? "opacity-100 " : "opacity-0"
										}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:w-1/2 sm:order-1 py-8 sm:py-36">
					<p className="textxl sm:text-3xl font-benton700 text-orange1 mb-8 hidden sm:block">
						Nosotras
					</p>
					<p className="text-xl text-darkgray1 sm:text-3xl  mb-8">
						{nosotras
							? nosotras
							: "Somos un equipo de personas que busca contribuir al fortalecimiento del espacio c??vico local en M??xico."}
					</p>
					<Button
						text="Con??cenos"
						variant="orange"
						action={() => navigate("/nosotras")}
					/>
				</div>
			</div>
		</Section>
	);
};

export default Home;
