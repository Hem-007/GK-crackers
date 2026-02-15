import logoIcon from "../assets/logo/secondaryLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 pt-16 pb-10 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* ================= BRAND SECTION ================= */}
        <div>
          <img 
            src={logoIcon} 
            alt="GK Crackers Logo"
            className="h-12 object-contain mb-4"
          />
          <p className="text-sm text-slate-300 leading-relaxed">
            Premium quality crackers directly from Sivakasi.
            Safe, reliable and perfect for every celebration 🎆
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-red-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-red-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-red-400 transition">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-red-400 transition">
                Order Now
              </Link>
            </li>
            <li>
               <Link to="/about" className="hover:text-red-400 transition">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-400 transition">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-red-400 transition">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-red-400 transition">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        

        {/* ================= CONTACT US ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          <div className="text-sm space-y-2">
            <a href="tel:9600419087" className="block hover:text-red-400">
              📞 9600419087
            </a>
            <a href="tel:9940861382" className="block hover:text-red-400">
              📞 9940861382
            </a>
            <a href="tel:8012442724" className="block hover:text-red-400">
              📞 8012442724
            </a>
          </div>
        </div>

        {/* ================= ADDRESS ================= */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Our Location
          </h3>
          <p className="text-sm leading-relaxed">
            GK Crackers <br />
            Vanamoorthilingapuram <br />
            Vembakkottai (Taluk & Post) <br />
            Sivakasi, Virudhunagar - 626131 <br />
            Tamil Nadu, India
          </p>

          <a
            href="https://maps.app.goo.gl/Sp6Y2sf2qU3zyKcZ9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-red-400 text-sm hover:underline"
          >
            📍 View on Google Maps
          </a>
        </div>
      </div>

      {/* ================= BOTTOM COPYRIGHT ================= */}
      <div className="text-center text-xs text-slate-400 mt-10 border-t border-slate-700 pt-6">
        © {new Date().getFullYear()} GK Crackers. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
