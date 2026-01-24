import { useEffect, useState } from "react";

const messages = [
  "Safe & certified crackers 🛡️",
  "Reliable service you can trust 🤝",
  "Joyful moments guaranteed 🎆",
  "Celebrations made brighter ✨",
];

function TrustMessage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="abs right-6 pointer-events-none">
      <span
        key={index}
        className="
            block
            text-2xl sm:text-4xl lg:text-5xl
            font-bold
            bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
            bg-clip-text text-transparent
            animate-fadeInOut
            whitespace-nowrap
        "
      >
        {messages[index]}
      </span>
    </div>
  );
}

export default TrustMessage;
