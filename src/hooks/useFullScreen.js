// useFullScreen.js
import { useEffect, useRef } from "react";

const useFullScreen = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    const requestFullScreen = () => {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    };

    const handleFullScreenRequest = () => {
      requestFullScreen();
    };

    element.addEventListener("click", handleFullScreenRequest);

    return () => {
      element.removeEventListener("click", handleFullScreenRequest);
    };
  }, [elementRef]);

  return elementRef;
};

export default useFullScreen;
