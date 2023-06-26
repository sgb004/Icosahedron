import Face from '../face/face';
import maxSize from './max-size';
import './polygon.css';

const Polygon = ({ faces }) => {
	console.log(faces);

	const size = maxSize(faces);

	return (
		<div className="polygon" style={{ width: size.width, height: size.height }}>
			{faces.map((face, index) => {
				const x = (size.width - face.width) / 2 + (face.position?.x || 0);
				const y = (size.height - face.height) / 2 + (face.position?.y || 0);
				const z = face.position?.z || 0;
				const rotationX = face.rotation?.x ? `rotateX(${face.rotation?.x})` : '';
				const rotationY = face.rotation?.y ? `rotateY(${face.rotation?.y})` : '';
				const rotationZ = face.rotation?.z ? `rotateZ(${face.rotation?.z})` : '';

				return (
					<Face
						key={index}
						width={face.width}
						height={face.height}
						color={face.color}
						texture={face.texture}
						transform={`translate3d(${x}px, ${y}px, ${z}px) ${rotationX} ${rotationY} ${rotationZ}`}
						transformOrigin={face.origin}
					/>
				);
			})}
		</div>
	);
};

export default Polygon;
