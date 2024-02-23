import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const result = new Date(secondsRemaining * 1000).toISOString().slice(14, 19);

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );
  return <div className="timer">{result}</div>;
}

export default Timer;
