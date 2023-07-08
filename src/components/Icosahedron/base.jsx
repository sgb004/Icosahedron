'use client';

import Polygon from '../polygon/polygon';
import Points from './points';

const Base = ({ penContainerSide, faces, id }) => {
  console.log(Points.penContainerSide);

	const MathSin = (angle) => Math.sin((angle * Math.PI) / 180);

	//const penContainerSide = 100;
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

	const penPoints = {
		p1: penSide - (hexContainerSide - penContainerSide) / 2,
		p2: hexApothem * MathSin(elevationAngle1),
	};

	console.log({ penSide, hexApothem, penPoints });

	for (let key in hexPoints) {
		hexPoints[key] = (hexPoints[key] * hexContainerSide) / 100;
	}

	const listFaces = [
		{
			class: 'pentagon-container',
			width: penContainerSide,
			height: penContainerSide,
			content: (
				<div className={`pentagon ${id}-0`}>
					<span>{id} - 0</span>
				</div>
			),
		},
		{
			class: 'hexagon-container',
			width: hexContainerSide,
			height: hexContainerSide,
			content: (
				<div className={`hexagon ${id}-1`}>
					<span>{id} - 1</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { z: 36, x: -elevationAngle1 },
			position: { x: hexPoints.p4, y: -hexPoints.p5 },
		},
		{
			class: 'hexagon-container',
			width: hexContainerSide,
			height: hexContainerSide,
			content: (
				<div className={`hexagon ${id}-2`}>
					<span>{id} - 2</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { z: 108, x: -elevationAngle1 },
			position: { x: hexPoints.p2, y: -hexPoints.p3 },
		},
		{
			class: 'hexagon-container',
			width: hexContainerSide,
			height: hexContainerSide,
			content: (
				<div className={`hexagon ${id}-3`}>
					<span>{id} - 3</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { x: elevationAngle1, y: 0, z: 180 },
			position: { x: 0, y: -hexPoints.p1 },
		},
		{
			class: 'hexagon-container',
			width: hexContainerSide,
			height: hexContainerSide,
			content: (
				<div className={`hexagon ${id}-4`}>
					<span>{id} - 4</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { z: 252, x: -elevationAngle1 },
			position: { x: -hexPoints.p2, y: -hexPoints.p3 },
		},
		{
			class: 'hexagon-container',
			width: hexContainerSide,
			height: hexContainerSide,
			content: (
				<div className={`hexagon ${id}-5`}>
					<span>{id} - 5</span>
				</div>
			),
			origin: '50% 93.30127019%',
			rotation: { z: 324, x: -elevationAngle1 },
			position: { x: -hexPoints.p4, y: -hexPoints.p5 },
		},
	];

	const facesSelected = [listFaces[0]];

	console.log({ listFaces });

	for (let i = 0; i < faces.length; i++) facesSelected.push(listFaces[faces[i]]);

	return <Polygon className="base" size={{ width: 100, height: 100 }} faces={facesSelected} />;
};

export default Base;
