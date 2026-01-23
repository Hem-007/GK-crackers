import BannerSlider from "../components/BannerSlider";
import HorizontalProductSection from "../components/HorizontalProductSection";
import categories from "../data/categories";
import { bestSellers, limitedSales } from "../data/homeSections";
import TrustMessage from "../components/TrustMessage";
import StickyCartBar from "../components/StickyCartBar";

/*
=====================================================
HOME PAGE
Sections order:
1. Banner / Advertisement (AUTO SLIDER)
2. Product Categories (image + horizontal scroll)
3. Best Sellers (horizontal scroll)
4. Limited Time Offers (horizontal scroll)
5. Why Choose Us (final section)
=====================================================
*/

function Home() {
  return (
    <main className="w-full">

        {/* =====================================================
            HERO TEXT SECTION
            - Brand-focused heading
            - Animated trust badge below
            ===================================================== */}
        <section className="w-full py-12 glass-section">
        <div className="max-w-7xl mx-auto px-6">

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            Celebrate with{" "}
            <span className="text-red-600">EG Crackers</span>
            </h1>

            {/* Animated trust message */}
            <div className="mt-5">
            <TrustMessage />
            </div>

            {/* Description */}
            <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-3xl">
            Premium quality crackers and fireworks for every celebration.
            <br />
            Safe, reliable, and joyful moments guaranteed 🎆
            </p>

        </div>
        </section>


      {/* =====================================================
          BANNER / ADVERTISEMENT SECTION (MISSING EARLIER)
          - Auto sliding banners
          - Full width
          ===================================================== */}
      <section className="w-full">
        <BannerSlider />
      </section>

      {/* =====================================================
          PRODUCT CATEGORIES SECTION
          - Image + text
          - 4 cards visible
          - Horizontal scroll
          ===================================================== */}
      <section className="w-full pt-3 pb-3 glass-section">

        {/* Content container */}
        <div className="max-w-9xl mx-auto px-6">

          {/* Section title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Product Categories
          </h2>

          {/* Scroll frame */}
          <div
            className="
              border border-white/40
              rounded-2xl
              bg-white/10
              backdrop-blur-md
              p-4
              overflow-x-auto
              scroll-smooth
              scrollbar-hide
            "
          >
            {/* Horizontal row */}
            <div className="flex gap-6 min-w-max">

              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="
                    min-w-[260px]
                    bg-white/85
                    backdrop-blur-sm
                    rounded-xl
                    shadow-md
                    overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  {/* Category image */}
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-40 object-cover"
                  />

                  {/* Category name */}
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-gray-800">
                      {cat.name}
                    </h3>
                  </div>
                </a>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* =====================================================
          BEST SELLERS SECTION
          ===================================================== */}
      <HorizontalProductSection
        title="🔥 Best Sellers"
        products={bestSellers}
      />

      {/* =====================================================
          LIMITED TIME OFFERS SECTION
          ===================================================== */}
      <HorizontalProductSection
        title="⏰ Limited Time Offers"
        products={limitedSales}
      />

      {/* =====================================================
          WHY CHOOSE US SECTION
          ===================================================== */}
      <section className="w-full pt-3 pb-5 bg-gradient-to-r from-red-50 via-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center">
            Why Choose EG Crackers 🎆✨
            </h2>

            {/* Trust content */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                {
                title: "Premium Quality ✅",
                desc: "Certified and safe crackers only 🧨",
                },
                {
                title: "Best Prices 💰",
                desc: "Affordable rates for all families 👨‍👩‍👧‍👦",
                },
                {
                title: "Wide Variety 🎉",
                desc: "Kids, fancy & sound crackers 🎇",
                },
                {
                title: "Trusted Seller 🤝",
                desc: "Serving customers for years 🏆",
                },
            ].map((item) => (
                <div
                key={item.title}
                className="
                    bg-white/80
                    backdrop-blur-sm
                    rounded-xl
                    p-6
                    text-center
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                "
                >
                <h3 className="font-semibold text-gray-800">
                    {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                    {item.desc}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
        <StickyCartBar />

    </main>
  );
}

export default Home;
