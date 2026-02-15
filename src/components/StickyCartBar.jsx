import { Link } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

/*
=====================================================
STICKY CART BAR
- Appears only when cart has items
- Fixed at bottom of screen
=====================================================
*/

function StickyCartBar() {
  const { cartItems } = useOrder();

  // If cart is empty, don't render anything
  if (cartItems.length === 0) return null;

  // Calculate total quantity & amount
  const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const totalAmount = cartItems.reduce(
    (sum, i) => sum + i.originalPrice * i.qty,
    0
  );

  return (
    <div
      className="
        fixed bottom-14 left-0 right-0
        z-50
        bg-white/90
        backdrop-blur-md
        border-t
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Summary */}
        <div className="text-right">
          <p className="text-sm text-gray-600">
            {totalQty} item{totalQty > 1 ? "s" : ""}
          </p>
          <p className="text-lg font-bold text-gray-800">
            ₹{totalAmount}
          </p>
        </div>

        {/* Right: go to cart */}

        <Link
          to="/cart"
          className="
            px-6 py-3
            rounded-xl
            bg-red-600
            text-white
            font-semibold
            transition-all duration-300
            hover:bg-red-700
            hover:scale-[1.02]
          "
        >
          Go to Cart
        </Link>

      </div>
    </div>
  );
}

export default StickyCartBar;
