import React, { useState, useLayoutEffect } from "react";

function useScroll() {
  const [scrollLength, setScrollLength] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setScrollLength(window.pageYOffset);
    }

    // Add event listener on mount
    window.addEventListener("scroll", updatePosition);

    // Call updatePosition once to get initial scroll position
    updatePosition();

    // Remove event listener on unmount
    return () => window.removeEventListener("scroll", updatePosition);
  }, []); // Empty dependency array means it only runs on mount and unmount

  return scrollLength;
}

export default useScroll;
