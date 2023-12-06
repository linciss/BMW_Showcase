import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import Showcase from '../../Components/Showcase';

const ModelPage = () => {
  const { modelPath } = useParams();

  return (
    <>
      <div>ModelPage for {modelPath} </div>
      <Suspense fallback={<div>Loading....</div>}>
        <Canvas>
          <Showcase path={modelPath} />
        </Canvas>
      </Suspense>
    </>
  );
};

export default ModelPage;
