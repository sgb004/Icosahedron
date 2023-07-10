'use client';

import Polygon from '../polygon/polygon';
import Measures from './Measures';
import Base from './base';

const Half = ({ hexagons }) => {
	return (
		<Polygon
			className="half"
			size={{ width: Measures.penContainerSide, height: Measures.penContainerSide }}
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
					content: <Base id="1" faces={hexagons.pen1} />,
					origin: '50% 0%',
					rotation: { z: 180, x: Measures.elevationAngle2 },
					position: { y: -Measures.penPoints.p1, z: Measures.penPoints.p2 },
				},
				{
					class: 'pentagon-container',
					width: Measures.penContainerSide,
					height: Measures.penContainerSide,
					content: <Base id="2" faces={hexagons.pen2} />,
					origin: '50% 0%',
					rotation: { z: 252, x: Measures.elevationAngle2 },
					position: {
						x: Measures.penPoints.p3,
						y: Measures.penPoints.p4,
						z: Measures.penPoints.p2,
					},
				},
				{
					class: 'pentagon-container',
					width: Measures.penContainerSide,
					height: Measures.penContainerSide,
					content: <Base id="3" faces={hexagons.pen3} />,
					origin: '50% 0%',
					rotation: { z: 108, x: Measures.elevationAngle2 },
					position: {
						x: -Measures.penPoints.p3,
						y: Measures.penPoints.p4,
						z: Measures.penPoints.p2,
					},
				},
				{
					class: 'pentagon-container',
					width: Measures.penContainerSide,
					height: Measures.penContainerSide,
					content: <Base id="4" faces={hexagons.pen4} />,
					origin: '50% 0%',
					rotation: { z: 324, x: Measures.elevationAngle2 },
					position: {
						x: Measures.penPoints.p5,
						y: Measures.penPoints.p6,
						z: Measures.penPoints.p2,
					},
				},
				{
					class: 'pentagon-container',
					width: Measures.penContainerSide,
					height: Measures.penContainerSide,
					content: <Base id="5" faces={hexagons.pen5} />,
					origin: '50% 0%',
					rotation: { z: 36, x: Measures.elevationAngle2 },
					position: {
						x: -Measures.penPoints.p5,
						y: Measures.penPoints.p6,
						z: Measures.penPoints.p2,
					},
				},
			]}
		/>
	);
};

export default Half;
