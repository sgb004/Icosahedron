'use client';

import Polygon from '../polygon/polygon';
import Measures from './Measures';
import Half from './half';
import './icosahedron.scss';

const Icosahedron = () => {
	const size = 100;

	Measures.init(size);

	return (
		<div className="icosahedron">
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
						position: { z: -Measures.icosahedronHalfHeight },
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
						position: { z: Measures.icosahedronHalfHeight },
					},
				]}
			/>
		</div>
	);
};

export default Icosahedron;
