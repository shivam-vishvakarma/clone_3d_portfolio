import { useDarkMode } from "../context/contexts";
import { sunicon } from "../assets/icons"; // Assuming you have the SVG files in the icons folder
import { moonicon } from "../assets/icons"; // Assuming you have the SVG files in the icons folder
import gsap from "gsap/gsap-core";
import { useEffect, useRef } from "react";

export default function DarkModeBTN() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const btnRef = useRef(null);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  useEffect(() => {
    gsap.from(btnRef.current, {
      duration: 1,
      rotate: 360,
      ease: "elastic",
    });
  }, [isDarkMode]);
  return (
    <div
      className="fixed bottom-2 right-2 bg-blue-400 cursor-pointer p-3 pb-2 rounded-full"
      onClick={toggleDarkMode}
    >
      <img
        ref={btnRef}
        src={isDarkMode ? sunicon : moonicon}
        className="w-5 h-5 cursor-pointer object-contain"
        alt=""
      />
    </div>
  );
}
