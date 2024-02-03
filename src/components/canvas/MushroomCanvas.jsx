import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

const Mushroom = ({ isMobile }) => {
  const mushroom = useGLTF("./stylized_mushrooms/scene.gltf");

  return (
    <mesh>
      <primitive
        object={mushroom.scene}
        scale={isMobile ? 1 : 1.4}
        position={isMobile ? [0, 0, 0.2] : [0, -1, 1]}
        // rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const MushroomCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQuery = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQuery);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [-1, 0, 15], fov: 25, near: 0.1, far: 1000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <hemisphereLight intensity={0.55} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={10} position={[4, -10, -15]} />
      <Suspense /*fallback={<CanvasLoader />}*/>
        <OrbitControls
          enableZoom={false}
          //   maxPolarAngle={Math.PI / 2}
          //   minPolarAngle={Math.PI / 2}
        />
        <Mushroom isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MushroomCanvas;
// export default Computers;
