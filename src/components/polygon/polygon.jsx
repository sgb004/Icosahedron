'use client';

import { useEffect, useRef } from 'react';
import Face from '../face/face';
import maxSize from './max-size';
import './polygon.css';

const Polygon = ({ faces, size, className = '' }) => {
	console.log({ className });

	const sizePolygon = size || maxSize(faces);

	return (
		<div
			className={`polygon ${className}`}
			style={{ width: sizePolygon.width, height: sizePolygon.height }}
		>
			{faces.map((face, index) => {
				const x = (sizePolygon.width - face.width) / 2 + (face.position?.x || 0);
				const y = (sizePolygon.height - face.height) / 2 + (face.position?.y || 0);
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
