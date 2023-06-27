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
						width: 200,
						height: 200,
						color: '#ff0',
						content: <div className="pentagon" />,
					},
					/*
					{
						class: 'pentagon-container',
						width: 100,
						height: 100,
						color: '#f0f',
						content: <div className="pentagon" />,
					},
					*/
				]}
			/>
		</div>
	);
};

export default Icosahedron;
