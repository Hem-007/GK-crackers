
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BannerSlider from "../components/BannerSlider";
import HorizontalProductSection from "../components/HorizontalProductSection";
import categories from "../data/categories";
import { bestSellers, limitedSales } from "../data/homeSections";
import TrustMessage from "../components/TrustMessage";
import StickyCartBar from "../components/StickyCartBar";
import SearchBar from "../components/SearchBar";


/*
=====================================================
HOME PAGE (MOBILE-FIRST)
Order:
1. Banner
2. Hero Text
3. Categories
4. Best Sellers
5. Limited Offers
6. Why Choose Us
=====================================================
*/

function Home() {
    const [search, setSearch] = useState("");   
    const navigate = useNavigate(); 
    const handleSearch = () => {
    if (!search.trim()) return;

        navigate(`/products?search=${encodeURIComponent(search)}`);
        };

  return (
    <main className="w-full">

      {/* =====================================================
    HERO SECTION (MOBILE-FIRST, FIXED)
        ===================================================== */}
        <section className="w-full bg-[#FFF7ED]">
            <div className="max-w-7xl mx-auto px-4 pt-6 pb-4">

                {/* Heading */}
                <h1 className="text-2xl font-extrabold text-gray-800 leading-tight">
                Celebrate with{" "}
                <span className="text-red-600">EG Crackers</span>
                </h1>


                {/* Description */}
                <p className="mt-3 text-sm text-gray-700 max-w-xl">
                Premium quality crackers for every celebration.
                <span className="hidden sm:inline">
                    {" "}Safe, reliable & joyful moments 🎆
                </span>
                </p>

                {/* Trust message */}
                <div className="mt-2">
                <TrustMessage />
                </div>

                

                {/* CTA
                <div className="mt-4">
                <a
                    href="#categories"
                    className="inline-block bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm"
                >
                    Shop Crackers
                </a>
                </div> */}

            </div>
        </section>
        <section className="px-4 py-4">
            <SearchBar
                value={search}
                onChange={setSearch}
                onEnter={handleSearch}
                placeholder="Search crackers, sparklers…"
                />
        </section>


      
      {/* =====================================================
          BANNER / ADVERTISEMENT SECTION
          ===================================================== */}
      <section className="w-full">
        <BannerSlider />
      </section>


      {/* =====================================================
          PRODUCT CATEGORIES SECTION
          ===================================================== */}
      <section className="w-full sm:py-14 pt-3 pb-4  glass-section" id="categories">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
            Product Categories
          </h2>

          <div
            className="
              border border-white/40
              rounded-2xl
              bg-white/10
              backdrop-blur-md
              p-3 sm:p-4
              overflow-x-auto
              scroll-smooth
              scrollbar-hide
            "
          >
            <div className="flex gap-4 sm:gap-6 min-w-max "> 

              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href={`/products?category=${encodeURIComponent(cat.name)}`}
                  className="
                    min-w-[200px]
                    sm:min-w-[220px]
                    md:min-w-[260px]
                    bg-white/85
                    backdrop-blur-sm
                    rounded-xl
                    shadow-md
                    overflow-hidden
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    rounded-xl p-4  justify-center
                  "
                  
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-32 sm:h-36 md:h-40 object-cover "
                  />

                  <div className="p-3 sm:p-4 text-center">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
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
          BEST SELLERS
          ===================================================== */}
      <HorizontalProductSection
        title="🔥 Best Sellers"
        products={bestSellers}
      />

      {/* =====================================================
          LIMITED TIME OFFERS
          ===================================================== */}
      <HorizontalProductSection
        title="⏰ Limited Time Offers"
        products={limitedSales}
      />

      {/* =====================================================
          WHY CHOOSE US
          ===================================================== */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-r from-red-50 via-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Why Choose EG Crackers 🎆✨
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  p-5
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
      <StickyCartBar/>
      </section>
      
    </main>
  );
}

export default Home;
