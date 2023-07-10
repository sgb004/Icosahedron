'use client';

import Polygon from '../polygon/polygon';
import Measures from './Measures';

const Base = ({ faces, id }) => {
	const listFaces = [
		{
			class: 'pentagon-container',
			width: Measures.penContainerSide,
			height: Measures.penContainerSide,
			content: (
				<div className={`pentagon pen-${id}-0`}>
					<span>{id} - 0</span>
				</div>
			),
		},
		{
			class: 'hexagon-container',
			width: Measures.hexContainerSide,
			height: Measures.hexContainerSide,
			content: (
				<div className={`hexagon hex-${id}-1`}>
					<span>{id} - 1</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { z: 36, x: -Measures.elevationAngle1 },
			position: { x: Measures.hexPoints.p4, y: -Measures.hexPoints.p5 },
		},
		{
			class: 'hexagon-container',
			width: Measures.hexContainerSide,
			height: Measures.hexContainerSide,
			content: (
				<div className={`hexagon hex-${id}-2`}>
					<span>{id} - 2</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { z: 108, x: -Measures.elevationAngle1 },
			position: { x: Measures.hexPoints.p2, y: -Measures.hexPoints.p3 },
		},
		{
			class: 'hexagon-container',
			width: Measures.hexContainerSide,
			height: Measures.hexContainerSide,
			content: (
				<div className={`hexagon hex-${id}-3`}>
					<span>{id} - 3</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { x: Measures.elevationAngle1, y: 0, z: 180 },
			position: { x: 0, y: -Measures.hexPoints.p1 },
		},
		{
			class: 'hexagon-container',
			width: Measures.hexContainerSide,
			height: Measures.hexContainerSide,
			content: (
				<div className={`hexagon hex-${id}-4`}>
					<span>{id} - 4</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { z: 252, x: -Measures.elevationAngle1 },
			position: { x: -Measures.hexPoints.p2, y: -Measures.hexPoints.p3 },
		},
		{
			class: 'hexagon-container',
			width: Measures.hexContainerSide,
			height: Measures.hexContainerSide,
			content: (
				<div className={`hexagon hex-${id}-5`}>
					<span>{id} - 5</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { z: 324, x: -Measures.elevationAngle1 },
			position: { x: -Measures.hexPoints.p4, y: -Measures.hexPoints.p5 },
		},
	];

	const facesSelected = [listFaces[0]];

	console.log({ listFaces });

	for (let i = 0; i < faces.length; i++) facesSelected.push(listFaces[faces[i]]);

	return (
		<Polygon
			className="base"
			size={{ width: Measures.penContainerSide, height: Measures.penContainerSide }}
			faces={facesSelected}
		/>
	);
};

export default Base;
