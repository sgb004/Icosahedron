const Face = ({ width, height, color = '#f0f', transform, transformOrigin }) => {
	return (
		<div
			className="face"
			style={{
				width: `${width}px`,
				height: `${height}px`,
				backgroundColor: color,
				transform,
				transformOrigin,
			}}
		></div>
	);
};

export default Face;