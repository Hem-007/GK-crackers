import { useOrder } from "../context/OrderContext";

/*
=====================================================
ORDER PAGE
- Collect customer details
- Show order summary
- Send WhatsApp message
=====================================================
*/

function Order() {
  const { cartItems } = useOrder();

  if (cartItems.length === 0) {
  return (
    <section className="w-full py-24 glass-section">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-800">
          Almost there! 🧨
        </h2>

        <p className="mt-4 text-gray-600">
          Please add products to your cart before placing an order.
        </p>

        {/* CTA */}
        <a
          href="/products"
          className="btn-primary inline-block mt-8 px-8 py-4"
        >
          Browse Products
        </a>

        {/* Trust message */}
        <p className="mt-6 text-sm text-gray-500">
          Premium quality • On-time service • Happy customers
        </p>

      </div>
    </section>
  );
}


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

    const handleOrder = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    let message = ` New Order from EG Crackers\n\n`;

    message += ` Name: ${name}\n`;
    message += ` Phone: ${phone}\n`;
    message += ` Address:\n${address}\n\n`;

    message += ` Order Items:\n`;
    cartItems.forEach((item) => {
      message += `• ${item.name} × ${item.qty} = ₹${item.price * item.qty}\n`;
    });

    message += `\n💰 Total: ₹${total}`;

    const whatsappURL = `https://wa.me/918778737906?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };


  return (
    <section className="w-full py-24 glass-section">
      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-8">
          Place Your Order
        </h1>

        {/* Order summary */}
        <div className="mb-8 bg-white/85 p-6 rounded-xl shadow">
          {cartItems.map((item) => (
            <p key={item.id}>
              {item.name} × {item.qty} = ₹{item.price * item.qty}
            </p>
          ))}
          <p className="mt-4 font-bold">
            Total: ₹{total}
          </p>
        </div>

        {/* Customer form */}
        <form onSubmit={handleOrder} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="address"
            placeholder="Delivery Address"
            required
            className="w-full p-3 border rounded"
          />

          <button type="submit" className="btn-primary w-full">
            Place Order via WhatsApp
          </button>
        </form>

      </div>
    </section>
  );
}

export default Order;
