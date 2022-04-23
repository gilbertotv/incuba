import React from "react";
import Section from "../layout/Section";
import Button from "../shared/Button";

import Img1 from "../../images/home/ilus1/ilus1.svg";
import Img2 from "../../images/home/ilus1/ilus2.svg";
import Img3 from "../../images/home/ilus1/ilus3.svg";
import Img4 from "../../images/home/ilus1/ilus4.svg";
import Img5 from "../../images/home/ilus1/ilus5.svg";

const Home = () => {
	return (
		<Section className="bg-beige1">
			<div className="flex flex-col sm:flex-row mt-32 sm:mt-0">
				<div className="sm:w-1/2 sm:order-2 sm:h-auto">
					<div className="flex h-full items-center">
						<div className="relative w-full h-full">
							<div className="sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
								<div className="relative m-auto w-80 h-80 sm:scale-150">
									<img
										alt="Incuba ONG"
										src={Img1}
										className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-20`}
									/>
									<img
										alt="Incuba ONG"
										src={Img2}
										className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-20`}
									/>
									<img
										alt="Incuba ONG"
										src={Img3}
										className={`absolute h-80 left-1/2 -translate-x-1/2 bottom-0 z-10 ml-2`}
									/>
									<img
										alt="Incuba ONG"
										src={Img4}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-4 ml-4 z-0`}
									/>
									<img
										alt="Incuba ONG"
										src={Img5}
										className={`absolute w-64 left-1/2 -translate-x-1/2 bottom-4 ml-4 bottom-40 `}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:w-1/2 sm:order-1 py-8 sm:py-36">
					<p className="text-xl text-darkgray1 sm:text-4xl  mb-8">
						Empoderamos organizaciones sociales comprometidas con el desarrollo
						comunitario.
					</p>
					<Button text="Conoce más" variant="orange" />
				</div>
			</div>
		</Section>
	);
};

export default Home;
