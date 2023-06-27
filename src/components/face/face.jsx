'use client';

const Face = ({
	className,
	width,
	height,
	color = '#f0f',
	texture = '',
	transform,
	transformOrigin,
	children,
}) => {
	return (
		<div
			className={`face ${className || ''}`}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				backgroundColor: color,
				backgroundImage: texture ? `url(${texture})` : '',
				transform,
				transformOrigin,
			}}
			onClick={() => {
				console.log('CLICK EN FACE');
			}}
		>
			{children}
		</div>
	);
};

export default Face;
