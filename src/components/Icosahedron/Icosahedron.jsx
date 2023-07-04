'use client';

import Polygon from '../polygon/polygon';
import './icosahedron.css';

const Icosahedron = () => {
	const pentagonSide = 100;
	const hexagonSide = pentagonSide * 1.175570505;
	const hexPoints = {
		p1: 8.891722196,
		p2: 32.725424848,
		p3: 32.668135095,
		p4: 20.225424852,
		p5: 71.139179296,
	};

	const elevationAngle = 37.377368143;
	//const elevationAngle = 0;
	const elevationAngleNeg = elevationAngle * -1;

	for (let key in hexPoints) {
		hexPoints[key] = (hexPoints[key] * hexagonSide) / 100;
	}

	return (
		<div className="icosahedron">
			<Polygon
				faces={[
					{
						class: 'pentagon-container',
						width: pentagonSide,
						height: pentagonSide,
						content: <div className="pentagon" />,
					},
					{
						class: 'hexagon-container',
						width: hexagonSide,
						height: hexagonSide,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { x: elevationAngle, y: 0, z: 180 },
						position: { x: 0, y: -hexPoints.p1 },
					},
					{
						class: 'hexagon-container',
						width: hexagonSide,
						height: hexagonSide,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { z: 108, x: elevationAngleNeg },
						position: { x: hexPoints.p2, y: -hexPoints.p3 },
					},
					{
						class: 'hexagon-container',
						width: hexagonSide,
						height: hexagonSide,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { z: 252, x: elevationAngleNeg },
						position: { x: -hexPoints.p2, y: -hexPoints.p3 },
					},
					{
						class: 'hexagon-container',
						width: hexagonSide,
						height: hexagonSide,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { z: 324, x: elevationAngleNeg },
						position: { x: -hexPoints.p4, y: -hexPoints.p5 },
					},
					{
						class: 'hexagon-container',
						width: hexagonSide,
						height: hexagonSide,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { z: 36, x: elevationAngleNeg },
						position: { x: hexPoints.p4, y: -hexPoints.p5 },
					},
					{
						class: 'pentagon-container',
						width: pentagonSide,
						height: pentagonSide,
						content: <div className="pentagon" />,
						origin: '50% 0%',
						rotation: { z: 180 },
						position: {y: -50.9036960461, z: -35.68220897968}
					},
				]}
			/>
		</div>
	);
};

export default Icosahedron;
