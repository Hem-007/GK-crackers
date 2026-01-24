import { useOrder } from "../context/OrderContext";
import categoryImageMap from "../data/categoryImageMap";

/*
=====================================================
HORIZONTAL PRODUCT SECTION (MOBILE-FIRST)
Used for:
- Best Sellers
- Limited Time Offers
=====================================================
*/

function HorizontalProductSection({ title, products }) {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useOrder();

  const getQty = (id) =>
    cartItems.find((item) => item.id === id)?.qty || 0;

  return (
    <section className="w-full py-5 sm:py-10 bg-[#FFF1E6]">
      <div className="max-w-7xl mx-auto px-3">

        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          {title}
        </h2>

        {/* Horizontal scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">

            {products.map((product) => {
              const qty = getQty(product.id);

              return (
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
                  {/* Image */}
                  <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-center">
                    <img
                      src={categoryImageMap[product.category]}
                      alt={product.name}
                      className="h-32 object-contain"
                    />
                  </div>

                  {/* Info */}
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

                    {/* CART CONTROLS (RESTORED) */}
                    {qty === 0 ? (
                      <button
                        onClick={() => addToCart(product)}
                        className="btn-primary mt-3 w-full py-2.5 text-sm"
                      >
                        Add to Cart
                      </button>
                    ) : (
                      <div className="flex items-center justify-between mt-3">
                        <button
                          onClick={() => decreaseQty(product.id)}
                          className="px-4 py-2 bg-gray-200 rounded-lg text-lg"
                        >
                          −
                        </button>

                        <span className="font-semibold text-lg">
                          {qty}
                        </span>

                        <button
                          onClick={() => increaseQty(product.id)}
                          className="px-4 py-2 bg-gray-200 rounded-lg text-lg"
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
