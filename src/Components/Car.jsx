import React, { useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh, MeshStandardMaterial } from 'three';

const Car = () => {
  const gltf = useLoader(GLTFLoader, './public/models/car/scene.gltf');

  useEffect(() => {
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    gltf.scene.position.set(0, -0.1, 0);

    const objectToColor = gltf.scene.getObjectByName('Object_11');
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        if (objectToColor.material instanceof MeshStandardMaterial) {
          objectToColor.material.color.set(0x000000);
        }
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 0;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
};
export default Car;
