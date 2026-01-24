import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/products";
import categoryImageMap from "../data/categoryImageMap";
import { useOrder } from "../context/OrderContext";
import StickyCartBar from "../components/StickyCartBar";
import SearchBar from "../components/SearchBar";

/*
=====================================================
PRODUCTS PAGE
- URL-based category filtering
- URL-based search filtering
- Mobile-first layout
- Add to Cart (+ / -)
=====================================================
*/

function Products() {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useOrder();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category");

  const [search, setSearch] = useState(searchQuery);

  // Sync search input when URL changes (Home → Products)
  useEffect(() => {
    setSearch(searchQuery);
  }, [searchQuery]);

  const getQty = (id) =>
    cartItems.find((p) => p.id === id)?.qty || 0;

  const categories = [...new Set(products.map((p) => p.category))];

  // Handle search change → update URL
  const handleSearchChange = (value) => {
    setSearch(value);

    const params = {};
    if (selectedCategory) params.category = selectedCategory;
    if (value) params.search = value;

    setSearchParams(params);
  };

  // Filter products (category + search)
  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory
      ? p.category === selectedCategory
      : true;

    const matchSearch = search
      ? p.name.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchCategory && matchSearch;
  });

  return (
    <section className="w-full py-12 glass-section">
      <div className="max-w-7xl mx-auto px-4 pb-24">

        {/* ==============================
            PRODUCTS HEADER
        ============================== */}
        <div className="mb-6 space-y-4">

          {/* Search Bar */}
          <SearchBar
            value={search}
            onChange={handleSearchChange}
            placeholder="Search crackers…"
          />

          {/* Title + Category Filter */}
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {selectedCategory || "All Products"}
            </h1>

            <select
              value={selectedCategory || ""}
              onChange={(e) => {
                const value = e.target.value;
                const params = {};
                if (value) params.category = value;
                if (search) params.search = search;
                setSearchParams(params);
              }}
              className="
                h-11
                px-4
                rounded-xl
                border
                border-gray-300
                bg-white
                text-sm
                focus:outline-none
              "
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ==============================
            PRODUCTS GRID
        ============================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const qty = getQty(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm p-3"
              >
                {/* Image */}
                <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                  <img
                    src={categoryImageMap[product.category]}
                    alt={product.name}
                    className="h-40 object-contain"
                  />
                </div>

                {/* Info */}
                <div className="mt-3">
                  <h3 className="font-medium text-gray-800 text-sm">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {product.category}
                  </p>

                  <p className="mt-2 text-lg font-bold text-red-600">
                    ₹{product.price}
                  </p>

                  {/* Cart Controls */}
                  {qty === 0 ? (
                    <button
                      onClick={() => addToCart(product)}
                      className="btn-primary mt-3 w-full py-2.5"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between mt-3">
                      <button
                        onClick={() => decreaseQty(product.id)}
                        className="px-5 py-2 bg-gray-200 rounded-lg text-lg"
                      >
                        −
                      </button>

                      <span className="font-semibold text-lg">
                        {qty}
                      </span>

                      <button
                        onClick={() => increaseQty(product.id)}
                        className="px-5 py-2 bg-gray-200 rounded-lg text-lg"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && (
            <p className="text-gray-600">
              No products found.
            </p>
          )}
        </div>
      </div>

      <StickyCartBar />
    </section>
  );
}

export default Products;
