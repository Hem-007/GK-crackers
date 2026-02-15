import { Link, useLocation } from "react-router-dom";
import { Home as HomeIcon, Package, ShoppingCart } from "lucide-react";
import logoIcon from "../assets/logo/navbarLogo.png";


function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-red-600"
      : "text-gray-500";

  return (
    <>
      {/* =========================
          DESKTOP NAVBAR
          ========================= */}
      <nav className="hidden md:block bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
            src={logoIcon} 
            alt="Logo"
            className="h-10 sm:h-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-red-600">
            Crackers
          </h1>

          </div>
           
          

          <div className="space-x-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
            <Link to="/products" className="hover:text-red-600">
              Products
            </Link>
            <Link to="/cart" className="btn-primary">
              Cart
            </Link>
          </div>
        </div>
      </nav>

      {/* =========================
          MOBILE BOTTOM NAVBAR
          ========================= */}
      <nav
        className="
          md:hidden
          fixed bottom-0 left-0 right-0
          bg-white
          border-t
          shadow-lg
          z-50
        "
      >
        <div className="flex justify-around items-center py-2">

          <Link
            to="/"
            className={`flex flex-col items-center text-xs ${isActive("/")}`}
          >
            <HomeIcon size={22} />
            <span>Home</span>
          </Link>

          <Link
            to="/products"
            className={`flex flex-col items-center text-xs ${isActive("/products")}`}
          >
            <Package size={22} />
            <span>Products</span>
          </Link>

          <Link
            to="/cart"
            className={`flex flex-col items-center text-xs ${isActive("/cart")}`}
          >
            <ShoppingCart size={22} />
            <span>Cart</span>
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
