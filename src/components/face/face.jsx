const Face = ({ width, height, color = '#f0f', texture = '', transform, transformOrigin }) => {
	return (
		<div
			className="face"
			style={{
				width: `${width}px`,
				height: `${height}px`,
				backgroundColor: color,
				backgroundImage: texture ? `url(${texture})` : '',
				transform,
				transformOrigin,
			}}
		></div>
	);
};

export default Face;
