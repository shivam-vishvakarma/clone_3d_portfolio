import { useRef } from "react";
import { useGLTF, Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";
import { TextureLoader } from "three";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export default function Sky({ isRotating, isDarkMode }) {
  const skyMap = new TextureLoader().load(
    "../assets/images/material_emissive.png"
  );
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  //   skyRef.current.material.type = "MeshStandardMaterial";
//   console.log(skyRef.current);

  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  // It ensures smooth animations by making the rotation frame rate-independent.
  // 'delta' represents the time in seconds since the last frame.
  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });


  return (
    <mesh ref={skyRef} scale={0.1}>
      {isDarkMode ? (
        <mesh>
          <sphereGeometry args={[800, 32, 32]} />
          <meshStandardMaterial color={0x353935} side={2} />
        </mesh>
      ) : (
        <primitive object={sky.scene} />
      )}
      {isDarkMode ? (
        <Stars
          radius={320} // Radius of the sphere that the stars are scattered on
          depth={40} // Number of layers of stars
          count={5000} // Number of stars
          factor={7} // Randomness of star placement
          saturation={0} // Saturation of colors (0: white, 1: full color)
          fade // Fading effect on stars' brightness towards the center
          speed={2} // Speed of star movement
        />
      ) : (
        ""
      )}
    </mesh>
  );
}
