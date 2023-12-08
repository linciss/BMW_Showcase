/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

const Car = ({ path }) => {
  const gltf = useLoader(
    GLTFLoader,
    `../../public/models/car/${path}/scene.gltf`
  );

  useEffect(() => {
    gltf.scene.position.set(0, -0.1, 0);

    //const objectToColor = gltf.scene.getObjectByName('Object_11');
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        // if (objectToColor.material instanceof MeshStandardMaterial) {
        //   objectToColor.material.color.set(0x000000);
        // }
        object.castShadow = true;
        object.receiveShadow = true;
        object.material.envMapIntensity = 0;
      }
    });
  }, [gltf]);

  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={gltf.scene} />;
};
export default Car;
