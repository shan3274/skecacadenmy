import { useState, useEffect } from "react";

const useElementYPosition = (ref) => {
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setYPosition(rect.top);
      }
    };

    updatePosition();

    const resizeHandler = () => {
      updatePosition();
    };

    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [ref]);

  return yPosition;
};

export default useElementYPosition;
