import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import WhatsAppFloat from "./components/WhatsAppFloat";
import BackButton from "./components/BackButton";




function App() {
  return (
    <BrowserRouter>

      <div className="background-particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              background: [
                "#cb00ea", // dark red
                "#fff703", // dark orange
                "#2504ff", // dark blue
                "#ff0000", // dark amber
              ][i % 4],
            }}
          />
        ))}
      </div>

      <div className="min-h-screen bg-festive-bg">
        <Navbar />
        <BackButton />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />     {/* ✅ CART PAGE */}
            <Route path="/order" element={<Order />} />   {/* ✅ ORDER PAGE */}
        </Routes>
        </div>  
        
      </div>
      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
