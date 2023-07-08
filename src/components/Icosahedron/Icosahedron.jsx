'use client';

import Polygon from '../polygon/polygon';
import Measures from './Measures';
import Base from './base';
import './icosahedron.css';

const Icosahedron = () => {
	const size = 100;

	Measures.init(size);

	return (
		<div className="icosahedron">
			<Polygon
				size={{ width: size, height: size }}
				faces={[
					{
						class: 'base-container',
						width: Measures.penContainerSide,
						height: Measures.penContainerSide,
						content: <Base id="0" faces={[1, 2, 3, 4, 5]} />,
					},
					{
						class: 'pentagon-container',
						width: Measures.penContainerSide,
						height: Measures.penContainerSide,
						content: <Base id="1" faces={[]} />,
						origin: '50% 0%',
						rotation: { z: 180, x: Measures.elevationAngle2 },
						position: { y: -Measures.penPoints.p1, z: Measures.penPoints.p2 },
					},
					{
						class: 'pentagon-container',
						width: Measures.penContainerSide,
						height: Measures.penContainerSide,
						content: <Base id="2" faces={[]} />,
						origin: '50% 0%',
						rotation: { z: 252, x: Measures.elevationAngle2 },
						position: {
							x: 47.552825815 + 47.552825795,
							y: 34.54915028 - 15.450849712,
							z: Measures.penPoints.p2,
						},
					},
					{
						class: 'pentagon-container',
						width: Measures.penContainerSide,
						height: Measures.penContainerSide,
						content: <Base id="3" faces={[]} />,
						origin: '50% 0%',
						rotation: { z: 108, x: Measures.elevationAngle2 },
						position: {
							x: -47.552825815 - 47.552825795,
							y: 34.54915028 - 15.450849712,
							z: Measures.penPoints.p2,
						},
					},
				]}
			/>
		</div>
	);
};

export default Icosahedron;
