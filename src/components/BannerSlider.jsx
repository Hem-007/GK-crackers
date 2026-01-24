import { useEffect, useState } from "react";
import banners from "../data/banners";

/*
========================================
ADVERTISEMENT BANNER SLIDER
- Horizontal slide animation
- Mobile-first height
- Auto sliding
========================================
*/

function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!banners || banners.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        w-full
        overflow-hidden
        relative
        h-[200px]
        sm:h-[320px]
        md:h-[420px]
      "
    >
      {/* Slider Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="w-full flex-shrink-0 h-full"
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BannerSlider;
