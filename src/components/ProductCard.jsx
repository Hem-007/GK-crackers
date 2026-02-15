import { useOrder } from "../context/OrderContext";

function ProductCard({ product }) {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useOrder();

  const qty =
    cartItems.find((p) => p.id === product.id)?.qty || 0;

  const price = product.originalPrice || product.price;

  return (
    <div
      className="
        bg-white rounded-2xl shadow-sm p-3
        flex flex-row md:flex-col gap-4
      "
    >
      {/* IMAGE */}
      <div className="
        w-28 h-28 md:w-full md:h-40
        bg-gray-50 rounded-xl
        flex items-center justify-center
        flex-shrink-0
      ">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="object-contain w-full h-full"
        />
      </div>

      {/* DETAILS */}
      <div className="flex flex-col justify-between flex-1">

        <div>
          <h3 className="text-sm font-medium text-gray-800">
            {product.name}
          </h3>

          <p className="text-xs text-gray-500 mt-1">
            {product.category}
          </p>

          <div className="mt-2 flex items-center gap-2">
            {product.price && (
              <span className="text-sm line-through text-gray-400">
                ₹{product.price}
              </span>
            )}
            <span className="text-lg font-bold text-red-600">
              ₹{price}
            </span>
          </div>
        </div>

        {/* CART CONTROLS */}
        <div className="mt-3">
          {qty === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="btn-primary w-full py-2 text-sm"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-between">
              <button
                onClick={() => decreaseQty(product.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                −
              </button>
              <span>{qty}</span>
              <button
                onClick={() => increaseQty(product.id)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default ProductCard;
