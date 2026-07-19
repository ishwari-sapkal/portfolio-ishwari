import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999]"
      style={{
        left: position.x - 16,
        top: position.y - 16,
        border: "2px solid #ff8c1a",
        boxShadow: "0 0 25px #ff8c1a",
      }}
    />
  );
}