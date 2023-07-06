'use client';

import Polygon from '../polygon/polygon';
import Base from './base';
import './icosahedron.css';

const Icosahedron = () => {
	const MathSin = (angle) => Math.sin((angle * Math.PI) / 180);

	const penContainerSide = 100;
	const penSide = MathSin(36) * (penContainerSide / 2) * 2;
	const hexContainerSide = penContainerSide * 1.175570505;
	const hexApothem = Math.sqrt(penSide ** 2 - (penSide / 2) ** 2);
	const hexPoints = {
		p1: 8.891722196,
		p2: 32.725424848,
		p3: 32.668135095,
		p4: 20.225424852,
		p5: 71.139179296,
	};

	const elevationAngle1 = 37.377368143;
	const elevationAngle2 = (90 - elevationAngle1) / 2 + elevationAngle1;

	const penPoints = {
		p1: penSide - (hexContainerSide - penContainerSide) / 2,
		p2: hexApothem * MathSin(elevationAngle1),
	};

	console.log({ penSide, hexApothem, penPoints });

	//const elevationAngle1 = 0;
	//const elevationAngle1 = elevationAngle1 * -1;

	for (let key in hexPoints) {
		hexPoints[key] = (hexPoints[key] * hexContainerSide) / 100;
	}

	return (
		<div className="icosahedron">
			<Polygon
				size={{ width: 100, height: 100 }}
				faces={[
					{
						class: 'base-container',
						width: penContainerSide,
						height: penContainerSide,
						content: (
							<Base
								penContainerSide={penContainerSide}
								id="0"
								faces={[1, 2, 3, 4, 5]}
							/>
						),
					},
					{
						class: 'pentagon-container',
						width: penContainerSide,
						height: penContainerSide,
						content: <Base penContainerSide={penContainerSide} id="1" faces={[]} />,
						origin: '50% 0%',
						rotation: { z: 180, x: elevationAngle2 },
						position: { y: -penPoints.p1, z: penPoints.p2 },
					},
					{
						class: 'pentagon-container',
						width: penContainerSide,
						height: penContainerSide,
						content: <Base penContainerSide={penContainerSide} id="2" faces={[]} />,
						origin: '50% 0%',
						rotation: { z: 252, x: elevationAngle2 },
						position: {
							x: 47.552825815 + 47.552825795,
							y: 34.54915028 - 15.450849712,
							z: penPoints.p2,
						},
					},
					{
						class: 'pentagon-container',
						width: penContainerSide,
						height: penContainerSide,
						content: <Base penContainerSide={penContainerSide} id="3" faces={[]} />,
						origin: '50% 0%',
						rotation: { z: 108, x: elevationAngle2 },
						position: {
							x: -47.552825815 - 47.552825795,
							y: 34.54915028 - 15.450849712,
							z: penPoints.p2,
						},
					},
				]}
			/>
		</div>
	);
};

export default Icosahedron;
