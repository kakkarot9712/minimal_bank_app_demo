import { useEffect, useState } from "react";

const useTimer = (minuntes, seconds) => {
  const [min, setMin] = useState(minuntes);
  const [sec, setSec] = useState(seconds);
  const [isEnded, setIsEnded] = useState(false);

  useEffect(() => {
    let intervalId;
    if (!isEnded) {
      intervalId = setInterval(() => {
        if (sec > 0) {
          setSec(sec - 1);
          return;
        }
        if (sec === 0 && min !== 0) {
          setSec(59);
          setMin(min - 1);
          return;
        }
        if (min === 0 && sec === 0) {
          setIsEnded(true);
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [min, sec, isEnded]);
  return { min, sec, isEnded };
};

export default useTimer;
