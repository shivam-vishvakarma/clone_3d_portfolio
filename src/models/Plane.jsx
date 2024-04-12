import { useEffect, useRef } from "react";
import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function Plane({ isRotating, ...props }) {
  const { scene, animations } = useGLTF(planeScene);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [isRotating, actions]);

  //   plane arival animations
  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("screen and (min-width: 426px)", () => {
      let tl = gsap.timeline({
        onStart: () => actions["Take 001"].play(),
        onComplete: () => actions["Take 001"].stop(),
        defaults: {
          duration: 4,
          ease: "expo.inOut",
        },
      });
      tl.fromTo(
        ref.current.position,
        {
          x: 50,
          y: -8,
          z: 0,
          // duration: 5,
        },
        {
          x: 0,
          y: 10,
          z: -50,
        },
        "start"
      );
      tl.fromTo(
        ref.current.rotation,
        {
          x: 0,
          y: -4,
          z: 0,
        },
        {
          x: 0,
          y: -1.5,
          z: -1.1,
        },
        "start"
      );
      tl.fromTo(
        ref.current.position,
        {
          x: 0,
          y: 10,
          z: -50,
        },
        {
          x: -35,
          y: 0,
          z: -30,
        },
        "step1"
      );
      tl.fromTo(
        ref.current.rotation,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: 0,
          y: 0.5,
          z: -1.1,
        },
        "step1"
      );
      tl.fromTo(
        ref.current.position,
        {
          // ease: "expo.inOut",
          x: -35,
          y: 0,
          z: -30,
        },
        {
          // ease: "expo.inOut",
          x: 0,
          y: -4,
          z: -5,
        },
        "step2"
      );
      tl.fromTo(
        ref.current.rotation,
        {
          x: 0,
          y: 0.5,
          z: -1.1,
        },
        {
          x: 0,
          y: 1.5,
          z: 0,
        },
        "step2"
      );
    });
    mm.add("screen and (max-width: 425px)", () => {
      let tl = gsap.timeline({
        onStart: () => actions["Take 001"].play(),
        onComplete: () => actions["Take 001"].stop(),
        defaults: {
          duration: 4,
          ease: "expo.inOut",
        },
      });
      tl.fromTo(
        ref.current.position,
        {
          x: 50,
          y: -8,
          z: 0,
          // duration: 5,
        },
        {
          x: 0,
          y: 6,
          z: -40,
        },
        "start"
      );
      tl.fromTo(
        ref.current.rotation,
        {
          x: 0,
          y: -4,
          z: 0,
        },
        {
          x: 0,
          y: -1.5,
          z: -1.1,
        },
        "start"
      );
      tl.fromTo(
        ref.current.position,
        {
          x: 0,
          y: 6,
          z: -40,
        },
        {
          x: -35,
          y: 0,
          z: -30,
        },
        "step1"
      );
      tl.fromTo(
        ref.current.rotation,
        {
          x: 0,
          y: -1.5,
          z: -1.1,
        },
        {
          x: 0,
          y: 0.5,
          z: -1.1,
        },
        "step1"
      );
      tl.fromTo(
        ref.current.position,
        {
          // ease: "expo.inOut",
          x: -35,
          y: 0,
          z: -30,
        },
        {
          // ease: "expo.inOut",
          x: 0,
          y: -4,
          z: -10,
        },
        "step2"
      );
      tl.fromTo(
        ref.current.rotation,
        {
          x: 0,
          y: 0.5,
          z: -1.1,
        },
        {
          x: 0,
          y: 1.5,
          z: 0,
        },
        "step2"
      );
    });
  }, []);
  //   requestAnimationFrame(() => console.log(ref.current.rotatation));
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}
