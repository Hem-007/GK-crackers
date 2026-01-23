import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-festive-primary">
          EG Crackers
        </h1>

        <div className="space-x-6 text-festive-body font-medium">
            <Link to="/" className="hover:text-festive-primary">
                Home
            </Link>
            <Link to="/products" className="hover:text-festive-primary">
                Products
            </Link>
            <Link to="/order" className="btn-primary">
            Order Now
            </Link>
            <Link to="/cart" className="btn-primary">
            Cart
            </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
