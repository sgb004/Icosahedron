'use client';

import { useEffect, useRef } from 'react';
import Face from '../face/face';
import maxSize from './max-size';
import polygonUseEffect from './polygon-use-effect';
import './polygon.css';

const Polygon = ({ faces }) => {
	console.log(faces);

	const size = maxSize(faces);
	const polygonRef = useRef();

	useEffect(() => polygonUseEffect(polygonRef.current), []);

	return (
		<div
			ref={polygonRef}
			className="polygon"
			style={{ width: size.width, height: size.height }}
		>
			{faces.map((face, index) => {
				const x = (size.width - face.width) / 2 + (face.position?.x || 0);
				const y = (size.height - face.height) / 2 + (face.position?.y || 0);
				const z = face.position?.z || 0;

				let rotation = '';
				for (const axis in face.rotation) {
					const value = face.rotation[axis];
					rotation += `rotate${axis.toUpperCase()}(${
						typeof value === 'number' ? `${value}deg` : value
					}) `;
				}

				return (
					<Face
						className={face.class}
						key={index}
						width={face.width}
						height={face.height}
						color={face.color}
						texture={face.texture}
						transform={`translate3d(${x}px, ${y}px, ${z}px) ${rotation}`}
						transformOrigin={face.origin}
					>
						{face.content}
					</Face>
				);
			})}
		</div>
	);
};

export default Polygon;
