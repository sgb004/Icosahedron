'use client';

import { useEffect, useRef } from 'react';
import Face from '../face/face';
import maxSize from './max-size';
import './polygon.css';

const Polygon = ({ faces }) => {
	console.log(faces);

	const size = maxSize(faces);
	const polygonRef = useRef();

	useEffect(() => {
		let rotationX = parseInt(localStorage.getItem('rotationX'));
		let rotationY = parseInt(localStorage.getItem('rotationY'));
		let rotationZ = parseInt(localStorage.getItem('rotationZ'));

		if (isNaN(rotationX)) {
			rotationX = 0;
		}

		if (isNaN(rotationY)) {
			rotationY = 0;
		}

		if (isNaN(rotationZ)) {
			rotationZ = 0;
		}

		polygonRef.current.style.setProperty('--rotationAxisX', `${rotationX}deg`);
		polygonRef.current.style.setProperty('--rotationAxisY', `${rotationY}deg`);
		polygonRef.current.style.setProperty('--rotationAxisZ', `${rotationZ}deg`);

		const rotationKeyDown = (event) => {
			if (event.key === 'F5') return;

			event.preventDefault();

			switch (event.key) {
				case 'ArrowUp':
					polygonRef.current.style.setProperty('--rotationAxisX', `${rotationX++}deg`);
					break;
				case 'ArrowDown':
					polygonRef.current.style.setProperty('--rotationAxisX', `${rotationX--}deg`);
					break;
				case 'ArrowLeft':
					polygonRef.current.style.setProperty('--rotationAxisZ', `${rotationZ++}deg`);
					break;
				case 'ArrowRight':
					polygonRef.current.style.setProperty('--rotationAxisZ', `${rotationZ--}deg`);
					break;
				case 'PageUp':
					polygonRef.current.style.setProperty('--rotationAxisY', `${rotationY++}deg`);
					break;
				case 'PageDown':
					polygonRef.current.style.setProperty('--rotationAxisY', `${rotationY--}deg`);
					break;
				case 'Home':
				case 'r':
				case 'R':
					rotationX = 0;
					rotationY = 0;
					rotationZ = 0;
					polygonRef.current.style.setProperty('--rotationAxisX', `${rotationX}deg`);
					polygonRef.current.style.setProperty('--rotationAxisY', `${rotationY}deg`);
					polygonRef.current.style.setProperty('--rotationAxisZ', `${rotationZ}deg`);
					break;
				default:
					break;
			}

			localStorage.setItem('rotationX', rotationX);
			localStorage.setItem('rotationY', rotationY);
			localStorage.setItem('rotationZ', rotationZ);
		};

		document.addEventListener('keydown', rotationKeyDown);

		return () => {
			document.removeEventListener('keydown', rotationKeyDown);
		};
	}, []);

	return (
		<div
			ref={polygonRef}
			className="polygon"
			style={{ width: size.width, height: size.height }}
		>
			{faces.map((face, index) => {
				console.log(face.rotation);

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

				console.log(rotation);

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
