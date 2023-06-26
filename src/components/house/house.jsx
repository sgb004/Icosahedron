'use-client';

import Polygon from '../polygon/polygon';
import './house.css';

const House = () => {
	return (
		<div className="house">
			<Polygon
				faces={[
					{
						width: 162,
						height: 142,
						color: '#00f',
						position: { x: 110 },
						rotation: { y: '90deg' },
					},
					{
						width: 120,
						height: 182,
						color: '#0ff',
						rotation: { x: '90deg' },
						position: { y: -91 },
					},
					{ width: 220, height: 102, color: '#f0f', position: { z: 81 } },
				]}
			/>
		</div>
	);
};

export default House;
