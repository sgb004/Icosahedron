import Face from '../face/face';
import maxSize from './max-size';
import './polygon.css';

const Polygon = ({ faces }) => {
	console.log(faces);

	const size = maxSize(faces);

	return (
		<div className="polygon" style={{ width: size.width, height: size.height }}>
			{faces.map((face, index) => {
				//console.log(size.width - face.width / 2, size.height - face.height);
				return (
					<Face
						key={index}
						width={face.width}
						height={face.height}
						color={face.color}
						transform={`translate(${(size.width - face.width) / 2}px, ${
							(size.height - face.height) / 2
						}px)`}
					/>
				);
			})}
		</div>
	);
};

export default Polygon;
