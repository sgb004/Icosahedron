'use client';

import Polygon from '../polygon/polygon';
import './icosahedron.css';

const Icosahedron = () => {
	return (
		<div className="icosahedron">
			<Polygon
				faces={[
					{
						class: 'pentagon-container',
						width: 100,
						height: 100,
						content: <div className="pentagon" />,
					},
					{
						class: 'hexagon-container',
						width: 117.55705046,
						height: 117.55705046,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { x: 0, y: 0, z: '180deg' },
						position: { x: 0, y: -10.452846352 },
					},
					{
						class: 'hexagon-container',
						width: 117.55705046,
						height: 117.55705046,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { x: 0, y: 0, z: '108deg' },
						position: { x: 38.471044215, y: -38.403696071 },
					},
					{
						class: 'hexagon-container',
						width: 117.55705046,
						height: 117.55705046,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { x: 0, y: 0, z: '252deg' },
						position: { x: -38.471044215, y: -38.403696071 },
					},
					{
						class: 'hexagon-container',
						width: 117.55705046,
						height: 117.55705046,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { x: 0, y: 0, z: '324deg' },
						position: { x: -23.776412907, y: -83.62912093 },
					},
					{
						class: 'hexagon-container',
						width: 117.55705046,
						height: 117.55705046,
						content: <div className="hexagon" />,
						origin: '50% 93.30127019%',
						rotation: { x: 0, y: 0, z: '36deg' },
						position: { x: 23.776412907, y: -83.62912093 },
					},
				]}
			/>
		</div>
	);
};

export default Icosahedron;
