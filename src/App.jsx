import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <div>App</div>
      </Canvas>
    </Suspense>
  );
};

export default App;
