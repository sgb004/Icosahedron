'use client';

import { useEffect, useRef } from 'react';
import stageUseEffect from './stage-use-effect';
import Icosahedron from '../Icosahedron/Icosahedron';
import House from '../house/house';

const Stage = () => {
  const stageRef = useRef();
  
  useEffect(() => stageUseEffect(stageRef.current), []);
  
	return (
		<div ref={stageRef} className="stage">
			<Icosahedron />
		</div>
	);
};

export default Stage;
