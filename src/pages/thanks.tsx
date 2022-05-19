import React from "react";
import Layout from "../components/layout/Layout";
import Section from "../components/layout/Section";

const Thanks = () => {
	return (
		<Layout title="Gracias">
			<Section>
				<p className="mt-36 sm:mt-8 text-lg sm:text-2xl text-center mb-8">
					Con tu donativo estás contribuyendo al desarrollo del espacio cívico
					en México. Cada aporte que recibimos permite que organizaciones
					continuen trabajando en sus comunidades.
				</p>
				<p className="text-lg sm:text-2xl text-center">
					Para solicitar tu recibo fiscal, escribe a{" "}
					<a className="text-orange1" href="mailto:admon@incuba.ong">admon@incuba.ong</a>
				</p>
			</Section>
		</Layout>
	);
};

export default Thanks;
