import React, { Suspense } from "react";
import * as THREE from "three";
import { LayerMaterial, Depth, Noise } from "lamina";
import { Canvas, useFrame } from "@react-three/fiber";
import { Cloud } from "@react-three/drei";

const Three = () => {
  function Bg() {
    return (
      <mesh scale={100}>
        <boxGeometry args={[1, 1, 1]} />
        <LayerMaterial side={THREE.BackSide}>
          {/* <Color color="black" alpha={1} /> */}

          <Depth
            colorA="#171514"
            colorB="#515151"
            // colorA="#8D3E18"
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
        {/* <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={180}
        /> */}
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
      {/* <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial />
      </mesh> */}

      <fog attach="fog" args={["black", 0, 130]} />

      <directionalLight color="white" position={[0, 0, 5]} />

      <Suspense fallback={null}>
        <Rig />

        {/* <Cloud
          opacity={0.5}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20} // Number of particles
        /> */}

        <Cloud
          opacity={0.8}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={18} // Number of particles
        />
      </Suspense>

      <Bg />
    </Canvas>
  );
};

export default Three;
