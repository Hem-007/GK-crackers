import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useOrder } from "../context/OrderContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

import SearchBar from "../components/SearchBar";
import StickyCartBar from "../components/StickyCartBar";
import FilterSidebar from "../components/FilterSidebar";
import MobileFilterDrawer from "../components/MobileFilterDrawer";
import ProductGrid from "../components/ProductGrid";

function Products() {
  const { cartItems } = useOrder();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState(searchQuery);
  const [activeCategory, setActiveCategory] = useState(selectedCategory);
  const [minPrice, setMinPrice] = useState(0);

  const [priceLimit, setPriceLimit] = useState(2000); // fixed max
  const [maxPrice, setMaxPrice] = useState(2000); // selected max

  const [sortOrder, setSortOrder] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  useEffect(() => {
    setSearch(searchQuery);
    setActiveCategory(selectedCategory);
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [currentPage]);


  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, "products"));

      const productList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(productList);

      const prices = productList.map(
        (p) => p.originalPrice || p.price
      );
      const highestPrice = Math.max(...prices);

      setPriceLimit(highestPrice);
      setMaxPrice(highestPrice);

      setLoading(false);
    };

    fetchProducts();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const handleSearchChange = (value) => {
    setSearch(value);

    const params = {};
    if (activeCategory) params.category = activeCategory;
    if (value) params.search = value;

    setSearchParams(params);
  };

  const handleCategoryChange = (value) => {
    setActiveCategory(value);

    const params = {};
    if (value) params.category = value;
    if (search) params.search = search;

    setSearchParams(params);
  };

  const clearFilters = () => {
    setActiveCategory("");
    setMinPrice(0);
    setMaxPrice(priceLimit);
    setSortOrder("");
    setSearch("");
    setSearchParams({});
  };

  const filteredProducts = products
    .filter((p) => {
      if (!p.isAvailable) return false;

      const matchCategory = activeCategory
        ? p.category === activeCategory
        : true;

      const matchSearch = search
        ? p.name?.toLowerCase().includes(search.toLowerCase())
        : true;

      const price = p.originalPrice || p.price;

      return (
        matchCategory &&
        matchSearch &&
        price >= minPrice &&
        price <= maxPrice
      );
    })
    .sort((a, b) => {
      const priceA = a.originalPrice || a.price;
      const priceB = b.originalPrice || b.price;

      if (sortOrder === "az")
        return a.name.localeCompare(b.name);
      if (sortOrder === "za")
        return b.name.localeCompare(a.name);
      if (sortOrder === "low-high")
        return priceA - priceB;
      if (sortOrder === "high-low")
        return priceB - priceA;

      return 0;
    });

    const totalPages = Math.ceil(
      filteredProducts.length / productsPerPage
    );

    const paginatedProducts = filteredProducts.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );


  return (
    <section className="w-full py-10 glass-section">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="mb-6 space-y-4">
          <SearchBar
            value={search}
            onChange={handleSearchChange}
            placeholder="Search crackers…"
          />

          <div className="flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              {activeCategory || "All Products"}
            </h1>

            {/* Mobile Filter Icon */}
            <button
              onClick={() => setShowFilters(true)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4h18M6 10h12M10 16h4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          <FilterSidebar
            activeCategory={activeCategory}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
            minPrice={minPrice}
            maxPrice={maxPrice}
            priceLimit={priceLimit}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            clearFilters={clearFilters}
          />

          <div className="md:w-3/4">
            <ProductGrid
              products={paginatedProducts}
              loading={loading}
            />
          </div>

        </div>
        {/* PAGINATION */}
{totalPages > 1 && (
  <div className="flex justify-center items-center gap-3 mt-8">

    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(prev => prev - 1)}
      className="px-3 py-1 bg-red-500 rounded disabled:opacity-50"
    >
      Prev
    </button>

    <span className="text-sm font-semibold">
      Page {currentPage} of {totalPages}
    </span>

    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(prev => prev + 1)}
      className="px-3 py-1 bg-red-500 rounded disabled:opacity-50"
    >
      Next
    </button>

  </div>
)}

      </div>

      <MobileFilterDrawer
        showFilters={showFilters}
        setShowFilters={setShowFilters}
        activeCategory={activeCategory}
        handleCategoryChange={handleCategoryChange}
        categories={categories}
        minPrice={minPrice}
        maxPrice={maxPrice}
        priceLimit={priceLimit}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <StickyCartBar />
    </section>
  );
}

export default Products;
