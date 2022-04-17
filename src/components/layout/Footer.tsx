import React from "react";

import red1 from "../../images/layout/spotify.svg";
import red2 from "../../images/layout/twitter.svg";
import red3 from "../../images/layout/linkedin.svg";
import red4 from "../../images/layout/instagram.svg";
import red5 from "../../images/layout/facebook.svg";

const Footer = () => {
	return (
		<div className="bg-darkgray1 mt-auto flex p-2 sm:p-6">
			<div className="w-screen py-4 text-white text-sm flex flex-col sm:flex-row">
				<div className="w-full sm:w-1/3 flex justify-center order-1 sm:order-2">
					<a
						href="https://open.spotify.com/show/6SWcQHS9BUu3eTBkxyNHRD?si=3ef5574a452447ab&nd=1"
						className="mx-2"
						target="_blank"
					>
						<img src={red1} className="w-7" alt="Spotify" />
					</a>
					<a
						href="https://twitter.com/IncubaONG"
						target="_blank"
						className="mx-2"
					>
						<img src={red2} className="w-7" alt="Twitter" />
					</a>
					<a
						href="https://www.linkedin.com/company/incuba-ong/"
						target="_blank"
						className="mx-2"
					>
						<img src={red3} className="w-7" alt="Linkedin" />
					</a>
					<a
						href="https://www.instagram.com/incubaong/?hl=es"
						target="_blank"
						className="mx-2"
					>
						<img src={red4} className="w-7" alt="Instagram" />
					</a>
					<a
						href="https://www.facebook.com/IncubaONGs/"
						target="_blank"
						className="mx-2"
					>
						<img src={red5} className="w-7" alt="Facebook" />
					</a>
				</div>
				<div className="w-full sm:w-1/3 pt-4 sm:pt-0 order-2 sm:order-1 text-center sm:text-left">
					© Incuba 2022. Todos los derechos reservados
				</div>
				<div className="w-full sm:w-1/3 text-center sm:text-right pt-2 sm:pt-0 order-3 sm:order-3">
					Diseño y desarollo web por{" "}
					<a
						className="underline"
						href="https://www.trazovivo.com"
						target="_blank"
					>
						Trazo Vivo
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
