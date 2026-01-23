import { useEffect, useState } from "react";
import banners from "../data/banners";

/*
========================================
ADVERTISEMENT BANNER SLIDER
- Full width
- Auto cycles images
========================================
*/

function BannerSlider() {
  const [current, setCurrent] = useState(0);

  // Auto-change banner every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-[520px] relative overflow-hidden">
      {banners.map((banner, index) => (
        <img
          key={banner.id}
          src={banner.image}
          alt={banner.alt}
          className={`
            absolute inset-0
            w-full h-full object-cover object-center
            transition-opacity duration-1000
            ${index === current ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </section>
  );
}

export default BannerSlider;
