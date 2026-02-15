import { useEffect, useState } from "react";

export default function SimpleTyper({ texts = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!texts.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts]);

  if (!texts.length) return null;

  return (
    <span className="transition-all duration-300">
      {texts[index]}
    </span>
  );
}
