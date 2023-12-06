import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import './style.css';
import Showcase from './Components/Showcase';
const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Showcase />
      </Canvas>
    </Suspense>
  );
};

export default App;
