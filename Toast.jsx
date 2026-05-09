import { useEffect } from "react";

function Toast({ msg, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);

  return <div className="toast">{msg}</div>;
}

export default Toast;
