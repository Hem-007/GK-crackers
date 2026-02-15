import { useEffect, useState } from "react";
import banners from "../data/banners";

function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (banners.length < 2) return;

    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative overflow-hidden h-[280px] sm:h-[380px] md:h-[550px]">

      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`
            absolute inset-0
            transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <img
            src={banner.image}
            alt={banner.alt}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Optional Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {banners.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default BannerSlider;
