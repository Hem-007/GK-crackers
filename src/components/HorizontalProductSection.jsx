import { useOrder } from "../context/OrderContext";
import categoryImageMap from "../data/categoryImageMap";

/*
=====================================================
HORIZONTAL PRODUCT SECTION
Used for:
- Best Sellers (Home)
- Limited Time Offers (Home)

Features:
- Product image
- Add to Cart → + / − quantity control
- Syncs with global cart
=====================================================
*/

function HorizontalProductSection({ title, products }) {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useOrder();

  // Helper: get quantity of product in cart
  const getQty = (id) =>
    cartItems.find((item) => item.id === id)?.qty || 0;

  return (
    <section className="w-full py-3 glass-section">

      {/* Content container */}
      <div className="max-w-9xl mx-auto px-6">

        {/* Section title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          {title}
        </h2>

        {/* =====================================
            SCROLL FRAME
            ===================================== */}
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

            {products.map((product) => {
              const qty = getQty(product.id);

              return (
                <div
                  key={product.id}
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
                  {/* Product image (category placeholder) */}
                  <img
                    src={categoryImageMap[product.category]}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />

                  {/* Product info */}
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
                          className="
                            px-4 py-1
                            bg-gray-200
                            rounded
                            font-bold
                          "
                        >
                          −
                        </button>

                        <span className="font-semibold">
                          {qty}
                        </span>

                        <button
                          onClick={() => increaseQty(product.id)}
                          className="
                            px-4 py-1
                            bg-gray-200
                            rounded
                            font-bold
                          "
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}

export default HorizontalProductSection;
