'use client';

import Polygon from '../polygon/polygon';
import Measures from './Measures';
import Half from './half';
import './icosahedron.scss';

const Icosahedron = () => {
	const size = 100;

	Measures.init(size);

	//const positionZ = Measures.penContainerSide + Measures.hexContainerSide;
	const positionZ = 136.60254037844388;

	console.log(positionZ);

	return (
		<div className="icosahedron" style={{ '--halfContainerPositionZ': `${positionZ}px` }}>
			<Polygon
				size={{ width: size, height: size }}
				faces={[
					{
						class: 'half-container',
						width: size,
						height: size,
						content: (
							<Half
								hexagons={{
									pen1: [],
									pen2: [],
									pen3: [],
									pen4: [],
									pen5: [],
								}}
							/>
						),
						position: { z: -positionZ },
					},
					{
						class: 'half-container',
						width: size,
						height: size,
						content: (
							<Half
								hexagons={{
									pen1: [2, 3, 4],
									pen2: [3, 4],
									pen3: [2, 3],
									pen4: [3, 4],
									pen5: [3],
								}}
							/>
						),
						rotation: { x: 180 },
						position: { z: positionZ },
					},
				]}
			/>
		</div>
	);
};

export default Icosahedron;
