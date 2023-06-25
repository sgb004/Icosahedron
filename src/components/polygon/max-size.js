const maxSize = (faces) => {
	const maxDimensions = { width: 0, height: 0 };

	for (const current of faces) {
		maxDimensions.width = Math.max(current.width, maxDimensions.width);
		maxDimensions.height = Math.max(current.height, maxDimensions.height);
	}

	return maxDimensions;
};

export default maxSize;
