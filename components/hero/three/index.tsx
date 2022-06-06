import React, { Suspense } from "react";
import * as THREE from "three";
import { LayerMaterial, Depth } from "lamina";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";

const Three = () => {
  function Bg() {
    return (
      <mesh scale={100}>
        <boxGeometry args={[1, 1, 1]} />
        <LayerMaterial side={THREE.BackSide}>
          <Depth
            colorA="#f66b2a"
            colorB="skyblue"
            alpha={1}
            mode="normal"
            near={130}
            far={200}
            origin={[100, 100, -100]}
          />

          {/* <Noise
            mapping="local"
            type="white"
            scale={1000}
            colorA="white"
            colorB="black"
            mode="subtract"
            alpha={0.2}
          /> */}
        </LayerMaterial>
      </mesh>
    );
  }

  function Rig({ v = new THREE.Vector3() }) {
    return useFrame((state) => {
      state.camera.position.lerp(
        v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
        0.05
      );
    });
  }

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
      <fog attach="fog" args={["black", 0, 130]} />

      <directionalLight color="black" position={[0, 0, 5]} />

      <Suspense fallback={null}>
        <Rig />

        <Cloud
          opacity={0.5}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={0.1} // Z-dir depth
          segments={20} // Number of particles
        />
      </Suspense>

      <Bg />
    </Canvas>
  );
};

export default Three;
