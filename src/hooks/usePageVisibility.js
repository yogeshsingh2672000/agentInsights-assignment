// visibilityHandler.js
import { useState, useEffect } from "react";

const usePageVisibility = () => {
  const [isPageActive, setIsPageActive] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPageActive(false);
        setCount((prevCount) => prevCount + 1);
        if (count < 1) {
          alert(
            "Cheating is not allowed. If this is a mistake, this is your last and final warning. After this, you will be disqualified."
          );
          // If count is greater than or equal to 1, remove the event listener

          //   document.removeEventListener(
          //     "visibilitychange",
          //     handleVisibilityChange
          //   );
        }
      } else {
        setIsPageActive(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [count]); // Include count as a dependency

  return [isPageActive, count];
};

export default usePageVisibility;
