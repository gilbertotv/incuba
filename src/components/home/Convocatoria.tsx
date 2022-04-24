import React from "react";
import Section from "../layout/Section";

import Img1 from "../../images/home/organizaciones/org1.svg";
import Img2 from "../../images/home/organizaciones/org2.svg";
import Img3 from "../../images/home/organizaciones/org3.svg";
import Img4 from "../../images/home/organizaciones/org4.svg";
import Img5 from "../../images/home/organizaciones/org5.svg";
import Img6 from "../../images/home/organizaciones/org6.svg";
import Img7 from "../../images/home/organizaciones/org7.svg";
import Img8 from "../../images/home/organizaciones/org8.svg";

import ImgAl1 from "../../images/home/organizaciones/al1.svg";
import ImgAl2 from "../../images/home/organizaciones/al2.svg";
import ImgAl3 from "../../images/home/organizaciones/al3.svg";
import ImgAl4 from "../../images/home/organizaciones/al4.svg";
import ImgAl5 from "../../images/home/organizaciones/al5.svg";
import ImgAl6 from "../../images/home/organizaciones/al6.svg";
import ImgAl7 from "../../images/home/organizaciones/al7.svg";

const Convocatoria = ({ id }) => {
	return (
		<Section id={id} className="bg-white sm:pt-32">
			<div className="flex flex-col sm:flex-row mt-12 sm:mt-0">
				<div className="sm:w-2/5">
					<p className="text-xl text-orange1 sm:text-3xl sm:-mt-24 mb-8">
						Convocatoria 2022
					</p>
				</div>
				<div className="sm:w-3/5 sm:pl-16">
					<p className="text-xl text-darkgray1 sm:text-4xl mb-8">
						El Modelo Incuba consiste en un acompañamiento de 12 meses para
						organizaciones sin fines de lucro que busquen fortalecimiento
						institucional.
					</p>
				</div>
			</div>
			<p className="text-xl text-darkgray1 font-benton700 sm:text-3xl mb-8">
				Organizaciones incubadas
			</p>
			<div className="flex grid grid-cols-3 sm:grid-cols-8 mb-8">
				<div>
					<img
						src={Img1}
						className="m-auto mb-4 sm:mb-0"
						alt="Incuba Organización"
					/>
				</div>
				<div>
					<img
						src={Img2}
						className="m-auto mb-4 sm:mb-0"
						alt="Incuba Organización"
					/>
				</div>
				<div>
					<img
						src={Img3}
						className="m-auto mb-4 sm:mb-0"
						alt="Incuba Organización"
					/>
				</div>
				<div>
					<img
						src={Img4}
						className="m-auto mb-4 sm:mb-0"
						alt="Incuba Organización"
					/>
				</div>
				<div>
					<img
						src={Img5}
						className="m-auto mb-4 sm:mb-0"
						alt="Incuba Organización"
					/>
				</div>
				<div>
					<img
						src={Img6}
						className="m-auto mb-4 sm:mb-0"
						alt="Incuba Organización"
					/>
				</div>
				<div>
					<img
						src={Img7}
						className="m-auto mb-4 sm:mb-0"
						alt="Incuba Organización"
					/>
				</div>
				<div>
					<img
						src={Img8}
						className="m-auto mb-4 sm:mb-0"
						alt="Incuba Organización"
					/>
				</div>
			</div>
			<p className="text-xl text-darkgray1 font-benton700 sm:text-3xl mb-8">
				Alianzas y colaboraciones
			</p>
			<div className="flex flex-col sm:flex-row justify-between mb-8">
				<div className="flex grid grid-cols-3 sm:gap-12 mb-4 sm:mb-0">
					<div className="flex items-center">
						<img src={ImgAl1} className="m-auto" alt="Incuba Organización" />
					</div>
					<div className="flex items-center">
						<img src={ImgAl2} className="m-auto" alt="Incuba Organización" />
					</div>
					<div className="flex items-center">
						<img src={ImgAl3} className="m-auto" alt="Incuba Organización" />
					</div>
				</div>
				<div className="flex grid grid-cols-2 mb-4 sm:mb-0">
					<div className="flex items-center">
						<img src={ImgAl4} className="m-auto" alt="Incuba Organización" />
					</div>
					<div className="flex items-center">
						<img src={ImgAl5} className="m-auto" alt="Incuba Organización" />
					</div>
				</div>
				<div className="flex grid grid-cols-2 mb-4 sm:mb-0">
					<div className="flex items-center">
						<img src={ImgAl6} className="m-auto" alt="Incuba Organización" />
					</div>
					<div className="flex items-center">
						<img src={ImgAl7} className="m-auto" alt="Incuba Organización" />
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Convocatoria;
