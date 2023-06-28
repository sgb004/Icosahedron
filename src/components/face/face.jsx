'use client';

const Face = ({
	className,
	width,
	height,
	color,
	texture = '',
	transform,
	transformOrigin,
	children,
}) => {
	let style = {
		width: `${width}px`,
		height: `${height}px`,
		backgroundImage: texture ? `url(${texture})` : '',
		transform,
		transformOrigin,
	};

	if (color) {
		style['backgroundColor'] = color;
	}

	return (
		<div
			className={`face ${className || ''}`}
			style={style}
			onClick={() => {
				console.log('CLICK EN FACE');
			}}
		>
			{children}
		</div>
	);
};

export default Face;
