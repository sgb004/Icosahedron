'use client';

import { useEffect, useRef } from 'react';
import './meteorite.css';

const Meteorite = () => {
	const meteoriteRef = useRef(null);
	const coreClickedRef = useRef(null);

	useEffect(() => {
		const coreClickedAniEnd = () => {
			meteoriteRef.current.style.setProperty('--rings-color', 'var(--rings-color-normal)');
			coreClickedRef.current.classList.remove('show');
		};

		coreClickedRef.current.addEventListener('animationend', coreClickedAniEnd);

		return () => {
			coreClickedRef.current.removeEventListener('animationend', coreClickedAniEnd);
		};
	}, []);

	return (
		<div ref={meteoriteRef} className="meteorite">
			<div className="core"></div>
			<div ref={coreClickedRef} className="core-clicked"></div>
			<div className="circle circle-1"></div>
			<div className="circle circle-2"></div>
			<div className="circle circle-3"></div>
			<div className="circle circle-4"></div>
			<div
				className="core-clickable"
				onClick={() => {
					meteoriteRef.current.style.setProperty(
						'--rings-color',
						'var(--rings-color-clicked)'
					);
					coreClickedRef.current.classList.add('show');
				}}
			></div>
		</div>
	);
};

export default Meteorite;
