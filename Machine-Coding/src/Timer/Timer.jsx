import React, { useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    },1000);
  }
  function stop() {
    clearInterval(intervalRef.current);

    intervalRef.current = null;
  }
  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSeconds(0);
  }
  return (
    <div>
      <h1>{seconds}s</h1>
      <h1>
        {Math.trunc(seconds / 60)} mins {seconds % 60} secs
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
