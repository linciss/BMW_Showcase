import Car from './Car';
import Ground from './Ground';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
const Showcase = () => {
  return (
    <>
      <OrbitControls target0={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={1} />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={200}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={350}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
      <Car />
    </>
  );
};
export default Showcase;
