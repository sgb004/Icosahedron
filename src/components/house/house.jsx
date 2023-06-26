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
						color: 'transparent',
						position: { z: 59 },
						texture: '/imgs/house-front.png',
					},
					{
						width: 118,
						height: 104,
						color: '#f0f',
						rotation: { y: '90deg' },
						position: { x: 81, y: 19 },
						texture: '/imgs/house-right.png',
					},
					{
						width: 162,
						height: 142,
						color: 'transparent',
						position: { z: -59 },
						texture: '/imgs/house-back.png',
					},
					{
						width: 118,
						height: 104,
						color: '#0ff',
						rotation: { y: '90deg' },
						position: { x: -81, y: 19 },
						texture: '/imgs/house-left.png',
					},
					{
						width: 106,
						height: 144,
						color: '#ff0',
						rotation: { x: '90deg', y: '25deg' },
						position: { x: 53, y: -72 },
						origin: 'left center',
						texture: '/imgs/house-roof-right.png',
					},
					{
						width: 106,
						height: 144,
						color: '#ff0',
						rotation: { x: '-90deg', y: '25deg' },
						position: { x: -53, y: -72 },
						origin: 'right center',
						texture: '/imgs/house-roof-left.png',
					},
				]}
			/>
		</div>
	);
};

export default House;
