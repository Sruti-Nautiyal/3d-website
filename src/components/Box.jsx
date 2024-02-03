import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  return (
    <>
      <Canvas /*camera={{ position: [5, 10, -1] }} */>
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={1}
        />
        <directionalLight />
        <pointLight
          position={[-10, -10, -5]}
          intensity={2}
          decay={0}
          distance={0}
        />
        <Square />
      </Canvas>
    </>
  );
};

const Square = () => {
  const meshref = useRef();
  useFrame((state, delta) => {
    meshref.current.rotation.x += delta;
  });
  return (
    <mesh ref={meshref}>
      <OrbitControls
        enablePan={false}
        enableDamping={true}
        enableZoom={false}
      />
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Box;
