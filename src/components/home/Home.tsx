import React from "react";
import Section from "../layout/Section";

import Img1 from "../../images/home/ilus1/ilus1.svg";
import Img2 from "../../images/home/ilus1/ilus2.svg";
import Img3 from "../../images/home/ilus1/ilus3.svg";
import Img4 from "../../images/home/ilus1/ilus4.svg";
import Img5 from "../../images/home/ilus1/ilus5.svg";

const Home = ({ id, intersected, home }) => {
	return (
		<Section id={id} className="bg-beige1">
			<div className="flex flex-col sm:flex-row mt-32 sm:mt-0">
				<div className="sm:w-1/2 sm:order-2 sm:h-auto">
					<div className="flex h-full items-center">
						<div className="relative w-full h-full">
							<div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
								<div className="relative m-auto w-80 h-80 sm:scale-125">
									<img
										alt="Incuba ONG"
										src={Img1}
										className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-20`}
									/>
									<img
										alt="Incuba ONG"
										src={Img2}
										className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-20 transition-all duration-1000 ease-in-out ${
											intersected ? "opacity-100" : "-rotate-45 opacity-0"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img3}
										className={`absolute h-80 left-1/2 -translate-x-1/2 bottom-0 z-10 ml-2 transition-all delay-300 duration-1000 ease-in-out ${
											intersected ? "opacity-100" : "opacity-0"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img4}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-4 ml-4 z-0 transition-all duration-1000 ease-in-out ${
											intersected ? "opacity-100" : "bottom-8 opacity-0"
										}`}
									/>
									<img
										alt="Incuba ONG"
										src={Img5}
										className={`absolute w-64 left-1/2 -translate-x-1/2 ml-4 transition-all delay-500 duration-1000 ease-in-out ${
											intersected
												? "bottom-4 opacity-100"
												: "bottom-12 opacity-0"
										}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:w-1/2 sm:order-1 py-8 sm:py-36">
					<p className="text-xl text-darkgray1 sm:text-3xl  mb-8">
						{home
							? home
							: "Empoderamos organizaciones sociales comprometidas con el desarrollo comunitario."}
					</p>
				</div>
			</div>
		</Section>
	);
};

export default Home;
