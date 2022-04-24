import React from "react";
import Layout from "../components/layout/Layout";

import Img1 from "../images/estrategias/ilus1.svg";
import Img2 from "../images/estrategias/ilus2.svg";
import Img3 from "../images/estrategias/ilus3.svg";
import Img4 from "../images/estrategias/ilus4.svg";
import Img5 from "../images/estrategias/ilus5.svg";
import Img6 from "../images/estrategias/ilus6.svg";
import Img7 from "../images/estrategias/ilus7.svg";

const Incubadora = () => {
	return (
		<Layout title="Incubadora">
			<div className="w-screen">
				<div className="container">
					<p className="text-xl text-orange1 font-benton700 sm:text-3xl mb-8 md:mb-16 mt-28 sm:mt-32">
						Estrategias de intervención
						<br />
						Patrocinio fiscal
					</p>

					<div className="flex h-full items-center">
						<div className="relative w-full h-full">
							<div className="">
								<div className="relative m-auto w-80 h-80 md:scale-150 md:mb-24">
									<img
										alt="Incuba ONG"
										src={Img1}
										className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-10`}
									/>
									<img
										alt="Incuba ONG"
										src={Img2}
										className={`absolute w-96 left-1/2 -translate-x-1/2 bottom-0 z-0`}
									/>
									<img
										alt="Incuba ONG"
										src={Img3}
										className={`absolute w-80 left-1/2 -translate-x-1/2 bottom-0 z-10`}
									/>
									<img
										alt="Incuba ONG"
										src={Img4}
										className={`absolute w-80 left-1/2 -translate-x-1/2 bottom-0 z-20`}
									/>
									<img
										alt="Incuba ONG"
										src={Img5}
										className={`absolute w-80 left-1/2 -translate-x-1/2 bottom-0 `}
									/>
									<img
										alt="Incuba ONG"
										src={Img6}
										className={`absolute w-80 left-1/2 -translate-x-1/2 bottom-0 `}
									/>
									<img
										alt="Incuba ONG"
										src={Img7}
										className={`absolute w-80 left-1/2 -translate-x-1/2 bottom-0 `}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="md:w-2/3 text-xl text-darkgray1 sm:text-3xl mb-32 mt-8">
						<p>
							En Incuba, entendemos que no todos los colectivos que luchan por
							una mejor comunidad buscan constituirse o trabajar en el largo
							plazo.
						</p>
						<p className="mt-4">
							Sin embargo, requieren una estructura legal-fiscal, una
							procuración de fondos sólida y evaluaciones que demuestren que
							cuentan con la capacidad técnica, operativa y administrativa para
							la operación de sus iniciativas sociales.
						</p>
						<p className="mt-4">
							Es por eso, que ofrecemos el servicio de patrocinio fiscal, bajo
							el cual brindamos la estructura institucional de Incuba a
							iniciativas comunitarias de alto impacto, que están diseñadas para
							el cumplimiento de objetivos específicos y acotados en el tiempo.
							Así permitimos que la organización o el colectivo pueda
							implementar su proyecto, sin necesidad de conformar una
							organización formal, mientras Incuba se ocupa de lo demás.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Incubadora;
