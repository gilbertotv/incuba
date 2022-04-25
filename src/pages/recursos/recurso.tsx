import React from "react";
import {
	FacebookShareButton,
	TwitterShareButton,
	LinkedinShareButton,
} from "react-share";

import Layout from "../../components/layout/Layout";

import Sideimg from "../../images/recursos/sideimg.svg";
import Sideimg2 from "../../images/recursos/sideimg2.svg";
import Content1 from "../../images/recursos/content.svg";
import Twitter from "../../images/recursos/twitter.svg";
import Facebook from "../../images/recursos/fb.svg";
import Linkedin from "../../images/recursos/linkedin.svg";

const Recurso = () => {
	return (
		<Layout title="Recursos">
			<div className="w-screen">
				<div className="container">
					<div className="flex flex-col md:flex-row mt-28 sm:mt-32">
						<div className="md:w-1/2 md:pr-32">
							<p className="text-xl sm:text-3xl font-benton700 text-orange1">
								Otros recursos
							</p>
							<p className="text-darkgray1 text-xl sm:text-3xl font-benton700">
								Iniciativas comunitarias: semillas de desarrollo económico
							</p>
						</div>
						<div className="md:w-1/2">
							<p className="text-xl text-darkgray1 sm:text-3xl mb-8 mt-8 md:mt-0">
								En síntesis, sin una baja en la pobreza y en la inequidad, no
								puede hablarse de desarrollo, y sin una mayor conciencia por el
								cuidado de los recursos naturales, tampoco.
							</p>
						</div>
					</div>
					<div className="relative flex items-center mb-8">
						<p className="text-darkgray1 text-base shrink-0 pr-8">
							por <span className="font-benton700">Ana Laura Goszko</span>
							<br /> @analauragoszko
						</p>
						<div className="border-orange1 border-t w-full h-1"></div>
					</div>
					<div className="flex flex-col md:flex-row text-lg">
						<div className="md:order-2 md:w-1/5">
							<img
								src={Sideimg}
								alt="Recursos"
								className="w-full hidden md:block"
							/>
							<img
								src={Sideimg2}
								alt="Recursos"
								className="w-full block md:hidden mb-12"
							/>
						</div>
						<div className="md:order-1 md:w-4/5 text-darkgray1 md:pr-36">
							<p className="mb-4">
								Las criptomonedas son monedas digitales con las cuales es
								posible realizar operaciones o transacciones de manera inmediata
								y segura, ya que utilizan un cifrado digital llamado
								criptografía. En la actualidad existen miles de criptomonedas,
								las más populares son el Bitcoin y Ethereum, que ahora
								representan una alternativa real al dinero tradicional.
							</p>
							<p className="mb-4">
								En los últimos años han ganado popularidad y hacerse con algún
								tipo de criptomoneda se ha convertido en una nueva tendencia,
								por lo que cada vez es más común comprar o pagar bienes y
								servicios con ellas. Así, empresas en EE.UU como Microsoft,
								Amazon, AT&T, entre otras, han innovado aceptando como método de
								pago algún tipo de criptodivisa. Incluso organizaciones sin
								fines de lucro como Save the Children ahora aceptan donaciones
								de Bitcoin.
							</p>
							<p className="mb-4">
								Así como cualquier empresa, las organizaciones sin fines de
								lucro pueden adaptarse a este boom de las criptomonedas al
								permitir aceptarlas como donativos. Al ser una moneda virtual,
								las criptomonedas son intangibles, por lo tanto, para poder
								aceptar y realizar transacciones es necesario contar con una
								cartera virtual o wallet.
							</p>
							<p className="mb-4">
								Algunas ventajas de aceptar criptomonedas son: las tarifas por
								comisión son más bajas; al ser monedas virtuales globales, se
								puede realizar una operación desde cualquier parte del mundo,
								inmediatamente y de una manera segura; son un activo muy
								líquido, que puede cambiar por efectivo rápidamente; son
								consideradas "activo virtual" de acuerdo al art. 30 de la Ley
								Fintech en México; y el bitcoin posibilita las microdonaciones.
							</p>
							<p className="mb-4">
								Además de esto, ahora también existen páginas especializadas
								para la compra-venta de criptomonedas, como exchanges, que
								apoyan a las organizaciones a aceptar monedas virtuales y
								publican aquellas que aceptan criptomonedas. Pero también hay
								que tener especial cuidado si se decide conservar las
								criptomonedas y no convertirlas en efectivo, debido a que el
								mercado de las criptodivisas es muy volátil, es decir, que el
								precio valor de una moneda virtual puede subir y bajar
								repentinamente lo que puede ocasionar pérdidas. A pesar de ser
								reconocido como un “activo virtual”, no pueden considerarse como
								una moneda de curso legal, ni como una divisa. Una primera
								opción para aceptar criptos es tener alguna cartera virtual, por
								ejemplo en aplicaciones como Bitpay, en donde se puede crear una
								cuenta para la organización. Esta opción es recomendable si se
								tiene alguna experiencia con las criptomonedas y carteras
								virtuales.
							</p>
							<img
								src={Content1}
								alt="Incuba Recurso"
								className="w-full mt-4 mb-12"
							/>
							<p className="mb-4">
								Otra opción es utilizar los servicios de alguna plataforma
								online. Una página web que orienta y con la cual una
								organización puede empezar a aceptar cripto es The Giving Block
								(No disponible en México). Otra plataforma similar es la de
								Engiven. También en plataformas de crowdfunding, como Givetrack
								de Bit Give , es posible crear un proyecto en donde es posible
								recibir bitcoin. Las criptomonedas, son relativamente recientes,
								y por ahora, en México son pocos los lugares en donde aceptan
								cripto. Pero poco a poco más usuarios, empresas y organizaciones
								han adoptado alguna criptomoneda, y su futuro es muy prometedor.
								Por tanto, adelantarse y adaptarse a esta alternativa permitirá
								a las organizaciones tener una nueva forma de obtener fondos y
								acceder a otro tipo de donaciones.
							</p>
							<div className="border-orange1 border-b my-12 w-full h-1"></div>
						</div>
					</div>
					<div className="">
						<p className="text-darkgray1 break-all">
							<span className="font-benton700">Referencia:</span>
							<br />
							<a href="https://www.capterra.mx/software/218787/engiven-cryptocurrency-donation-platform">
								https://www.capterra.mx/software/218787/engiven-cryptocurrency-donation-platform
							</a>
						</p>
						<div className="font-benton700 flex flex-col sm:flex-row justify-between text-darkgray1 sm:w-2/3 lg:w-1/3 my-12">
							<div className="mb-4">Compartir</div>
							<div className="flex gap-4 justify-between px-8 sm:px-0">
								<TwitterShareButton url={`https://www.incuba.ong/`}>
									<img
										src={Twitter}
										alt="Twitter"
										className="cursor-pointer w-12"
									/>
								</TwitterShareButton>
								<FacebookShareButton url={`https://www.incuba.ong/`}>
									<img
										src={Facebook}
										alt="Facebook"
										className="cursor-pointer w-12"
									/>
								</FacebookShareButton>
								<LinkedinShareButton url={`https://www.incuba.ong/`}>
									<img
										src={Linkedin}
										alt="Twitter"
										className="cursor-pointer w-12"
									/>
								</LinkedinShareButton>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Recurso;
