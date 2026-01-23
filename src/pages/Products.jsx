import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import categoryImageMap from "../data/categoryImageMap";
import { useOrder } from "../context/OrderContext";
import StickyCartBar from "../components/StickyCartBar";

/*
=====================================================
PRODUCTS PAGE
- Category filter
- URL-based filtering
- Add to Cart (+ / -)
=====================================================
*/

function Products() {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useOrder();

  // Read category from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  // Quantity helper
  const getQty = (id) =>
    cartItems.find((p) => p.id === id)?.qty || 0;

  // Filtered products
  const filteredProducts = selectedCategory
    ? products.filter(
        (p) => p.category === selectedCategory
      )
    : products;

  return (
    <section className="w-full py-24 glass-section">
      <div className="max-w-7xl mx-auto ">

        {/* Page title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Products
        </h1>

        {/* ================================
            CATEGORY FILTER DROPDOWN
            ================================ */}
        <div className="mb-10 max-w-xs">
          <select
            value={selectedCategory || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                setSearchParams({ category: value });
              } else {
                setSearchParams({});
              }
            }}
            className="w-full p-3 rounded-lg border"
          >
            <option value="">All Categories</option>

            {[...new Set(products.map(p => p.category))].map(
              (cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              )
            )}
          </select>
        </div>

        {/* ================================
            PRODUCTS GRID
            ================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredProducts.map((product) => {
            const qty = getQty(product.id);

            return (
              <div
                key={product.id}
                className="
                  bg-white/85
                  backdrop-blur-sm
                  rounded-xl
                  shadow-md
                  overflow-hidden
                "
              >
                {/* Product image */}
                <img
                  src={categoryImageMap[product.category]}
                  alt={product.name}
                  className="w-full h-44 object-cover"
                />

                <div className="p-5">
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {product.category}
                  </p>

                  <p className="mt-3 text-lg font-bold text-red-600">
                    ₹{product.price}
                  </p>

                  {/* ==========================
                      CART CONTROLS
                      ========================== */}
                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="btn-primary mt-4 w-full"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between mt-4">
                      <button
                        onClick={() => decreaseQty(product.id)}
                        className="px-4 py-1 bg-gray-200 rounded"
                      >
                        −
                      </button>

                      <span className="font-semibold">
                        {qty}
                      </span>

                      <button
                        onClick={() => increaseQty(product.id)}
                        className="px-4 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && (
            <p className="text-gray-600">
              No products found in this category.
            </p>
          )}

        </div>

      </div>
      <StickyCartBar />
    </section>
    
  );
}

export default Products;
