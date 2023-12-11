import React, { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';
import { redirect } from 'react-router-dom';

const CarModel = ({ path }) => {
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loader = new GLTFLoader();
        const gltf = await new Promise((resolve, reject) => {
          loader.load(
            `../../public/models/car/${path}/scene.gltf`,
            resolve,
            undefined,
            reject
          );
        });

        gltf.scene.position.set(0, -0.1, 0);

        gltf.scene.traverse((object) => {
          if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            object.material.envMapIntensity = 0;
          }
        });

        setModel(gltf.scene);
      } catch (error) {
        console.error(`Error loading model for path: ${path}`, error);
        redirect('/models');
      }
    };

    loadModel();
  }, [path]);

  if (!model) {
    redirect('/models');
    return null;
  }

  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={model} />;
};

export default CarModel;
