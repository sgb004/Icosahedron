'use-client';

import Face from '../face/face';
import Polygon from '../polygon/polygon';
import './house.css';

const House = () => {
	return (
		<div className="house">
			<Polygon
				faces={[
					{ width: 162, height: 142, color: '#00f' },
					{ width: 120, height: 182, color: '#0ff' },
					{ width: 220, height: 102, color: '#f0f' },
				]}
			/>
			{/* 
			<div className="cube">
				<Face
					className="front"
					width={162}
					height={142}
					transform="rotateY( 0deg) translateZ(0)"
				/>
				<Face
					className="right"
					width={120}
					height={142}
					color="#00f"
					transform="rotateY( 90deg) translateZ(0)"
					transformOrigin="81px 71px"
				/>
			</div>
			*/}
		</div>
	);
};

export default House;
