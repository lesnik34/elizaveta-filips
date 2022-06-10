import React, { Suspense } from "react";
import * as THREE from "three";
import { LayerMaterial, Depth, Noise } from "lamina";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";
import useWindowSize from "@hooks/device_size";

const Three = () => {
  const { device } = useWindowSize();
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

          <Noise
            mapping="local"
            type="white"
            scale={1000}
            colorA="white"
            colorB="black"
            mode="subtract"
            alpha={0.2}
          />
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
      {/* <directionalLight color="black" position={[0, 0, 5]} /> */}
      <pointLight position={[0, 60, -10]} color="black" intensity={10} />
      {/* <pointLight position={[-50, 0, -50]} color="#A69EF8" intensity={2} /> */}

      <Suspense fallback={null}>
        <Rig />

        <fog attach="fog" args={["black", 0, 200]} />

        {/* <mesh position={[0, 4.5, -10]}>
          <sphereBufferGeometry args={[2.9, 32, 32]} />
          <meshBasicMaterial transparent color="#A7A2FD" opacity={0.5} />
        </mesh> */}

        <Cloud
          opacity={0.65}
          speed={0.4} // Rotation speed
          width={5} // Width of the full cloud
          depth={10} // Z-dir depth
          segments={30} // Number of particles
        />

        <Cloud
          opacity={0.3}
          speed={0.1} // Rotation speed
          width={10} // Width of the full cloud
          depth={20} // Z-dir depth
          segments={30} // Number of particles
        />

        {device.isDesktopWidth && (
          <Cloud
            opacity={0.5}
            speed={0.4} // Rotation speed
            width={10} // Width of the full cloud
            depth={1} // Z-dir depth
            segments={20} // Number of particles
          />
        )}
      </Suspense>

      <Bg />
    </Canvas>
  );
};

export default Three;
