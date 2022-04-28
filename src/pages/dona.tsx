import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Section from "../components/layout/Section";
import Button from "../components/shared/Button";

const RadioForm = ({ text, value, click }) => {
	return (
		<div className="text-darkgray1 text-lg sm:text-2xl mb-8">
			<label className="flex relative radio-form-control">
				<input type="radio" value={value} onClick={click} name="donacion" />
				<div className="flex ml-6">
					<div className="relative flex">
						{text}
						<div className="absolute w-full bottom-0 h-1 border-b border-orange1"></div>
					</div>
				</div>
			</label>
		</div>
	);
};

const Dona = () => {
	const opciones = [
		{
			text: "Promoción de redes comunitarias de mujeres",
			value: 0,
		},
		{
			text: "Prevención y atención de violencia contra las mujeres",
			value: 1,
		},
		{
			text: "Desarrollo económico sostenible",
			value: 2,
		},
		{
			text: "Protección del medio ambiente y gestión de los recursos naturales",
			value: 3,
		},
	];
	const [opcion, setOpcion] = useState(0);
	return (
		<Layout title="Dona Ahora">
			<Section>
				<div className="text-darkgray1 my-28 md:my-40">
					<p className="text-lg sm:text-2xl">
						Se parte de la semilla del cambio
					</p>
					<p className="text-xl sm:text-4xl text-orange1 my-8">¡Dona ahora!</p>
					<p className="text-lg sm:text-2xl">
						¿Qué tipo de iniciativa te gustaría apoyar?
					</p>
					<div className="mt-12 mb-16">
						{opciones.map((opc, i) => (
							<RadioForm
								key={`${i}${opc.value}`}
								text={opc.text}
								value={opc.value}
								click={() => setOpcion(opc.value)}
							/>
						))}
					</div>
					<Button text="Dona ahora" variant="orange" />
				</div>
			</Section>
		</Layout>
	);
};

export default Dona;
