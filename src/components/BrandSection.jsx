import brands from "../data/brands";

function BrandSection() {
  return (
    <section className="w-full py-5 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
          Trusted Brands We Sell 🔥
        </h2>

        <p className="text-center text-gray-600 mt-2 text-sm">
          We source only from certified and well-known manufacturers
        </p>

        <div
          className="
            mt-4
            flex
            gap-5
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            py-3
          "
        >
          {brands.map((brand) => (
            <div
                key={brand.id}
                >
              <img
                src={brand.image}
                alt={brand.name}
                className="h-24 sm:h-28 object-contain"
            />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BrandSection;
