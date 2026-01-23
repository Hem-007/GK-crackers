import { useOrder } from "../context/OrderContext";
import { Link } from "react-router-dom";

/*
=====================================================
CART PAGE
- Shows selected items
- Order Now → Order Page
=====================================================
*/

function Cart() {
  const { cartItems, increaseQty, decreaseQty } = useOrder();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
  return (
    <section className="w-full py-24 glass-section">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Friendly heading */}
        <h2 className="text-3xl font-bold text-gray-800">
          Your celebration hasn’t started yet 🎆
        </h2>

        <p className="mt-4 text-gray-600">
          Add some crackers to your cart and make your festival brighter!
        </p>

        {/* CTA */}
        <a
          href="/products"
          className="btn-primary inline-block mt-8 px-8 py-4"
        >
          Explore Crackers
        </a>

        {/* Trust hint */}
        <p className="mt-6 text-sm text-gray-500">
          Safe • Certified • Trusted by families
        </p>

      </div>
    </section>
  );
}


  return (
    <section className="w-full py-24 glass-section">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-8">
          Your Cart
        </h1>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/85 rounded-xl p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ₹{item.price} × {item.qty}
                </p>
              </div>

              <div className="flex gap-3">
                <button onClick={() => decreaseQty(item.id)} 
                    className="w-9 h-9 rounded-full bg-slate-200 text-2xl font-bold hover:bg-slate-300">−</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}
                    className="w-9 h-9 rounded-full bg-slate-200 text-2xl font-bold hover:bg-slate-300">+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-right font-bold">
          Total: ₹{total}
        </div>

        <Link
          to="/order"
          className="btn-primary mt-6 inline-block"
        >
          Order Now
        </Link>

      </div>
    </section>
  );
}

export default Cart;
