import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

/*
=====================================================
HORIZONTAL PRODUCT SECTION (DYNAMIC)
- Best Sellers
- Limited Sales
=====================================================
*/

function HorizontalProductSection({ title, type }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let q;

        if (type === "best") {
          q = query(
            collection(db, "products"),
            where("isBestSeller", "==", true),
            limit(5)
          );
        } else if (type === "limited") {
          q = query(
            collection(db, "products"),
            where("isLimitedSales", "==", true),
            limit(5)
          );
        }

        const snapshot = await getDocs(q);

        const fetchedProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [type]);

  return (
    <section className="w-full py-5 sm:py-10 bg-[#FFF1E6]">
      <div className="max-w-7xl mx-auto px-3">

        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          {title}
        </h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">

            {products.map((product) => (
              <div
                key={product.id}
                className="
                  flex-shrink-0
                  w-[62%]
                  sm:w-[32%]
                  md:w-[24%]
                  bg-white
                  rounded-2xl
                  shadow-sm
                  p-3
                "
              >
                <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-center">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-32 object-contain"
                  />
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {product.category}
                  </p>

                  <p className="mt-2 text-lg font-bold text-red-600">
                    ₹{product.price}
                  </p>

                  <button
                    onClick={() =>
                      navigate(
                        `/products?category=${encodeURIComponent(product.category)}`
                      )
                    }
                    className="btn-primary mt-3 w-full py-2.5 text-sm"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default HorizontalProductSection;
