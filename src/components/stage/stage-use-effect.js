const stageUseEffect = (stage) => {
	const rotation = { X: 0, Y: 0, Z: 0 };

	for (const axis in rotation) {
		rotation[axis] = parseInt(localStorage.getItem(`rotation${axis}`));
		isNaN(rotation[axis]) && (rotation[axis] = 0);
		stage.style.setProperty(`--rotationAxis${axis}`, `${rotation[axis]}deg`);
	}

	const rotationKeyDown = (event) => {
		if (event.key === 'F5') return;

		event.preventDefault();

		switch (event.key) {
			case 'ArrowUp':
				rotation.X++;
				break;
			case 'ArrowDown':
				rotation.X--;
				break;
			case 'ArrowLeft':
				rotation.Z++;
				break;
			case 'ArrowRight':
				rotation.Z--;
				break;
			case 'PageUp':
				rotation.Y++;
				break;
			case 'PageDown':
				rotation.Y--;
				break;
			case 'Home':
			case 'r':
			case 'R':
				rotation.X = 0;
				rotation.Z = 0;
				rotation.Y = 0;
				break;
			default:
				break;
		}

		for (const axis in rotation) {
			stage.style.setProperty(`--rotationAxis${axis}`, `${rotation[axis]}deg`);
			localStorage.setItem(`rotation${axis}`, rotation[axis]);
		}
	};

	document.addEventListener('keydown', rotationKeyDown);

	return () => {
		document.removeEventListener('keydown', rotationKeyDown);
	};
};

export default stageUseEffect;
