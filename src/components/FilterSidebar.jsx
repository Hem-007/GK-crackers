function FilterSidebar({
  activeCategory,
  handleCategoryChange,
  categories,
  minPrice,
  maxPrice,
  priceLimit,
  setMinPrice,
  setMaxPrice,
  sortOrder,
  setSortOrder,
  clearFilters,
}) {
  return (
    <div className="hidden md:block md:w-1/4 bg-white rounded-xl shadow-md p-5 h-fit sticky top-24 max-h-[85vh] overflow-y-auto">

      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-lg font-bold text-gray-800">Filters</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-red-600 hover:underline"
        >
          Clear All
        </button>
      </div>

      {/* ================= CATEGORY ================= */}
      <div className="mt-5">
        <h3 className="font-semibold text-gray-800 mb-3">
          Category
        </h3>

        <select
          value={activeCategory}
          onChange={(e) =>
            handleCategoryChange(e.target.value)
          }
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* ================= PRICE RANGE ================= */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-800 mb-3">
          Price Range
        </h3>

        {/* Slider */}
        <input
          type="range"
          min="0"
          max={priceLimit}
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(Number(e.target.value))
          }
          className="w-full accent-red-600"
        />

        {/* Live Value Display */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>₹{minPrice}</span>
          <span>₹{maxPrice}</span>
        </div>

        {/* Min / Max Inputs */}
        <div className="flex gap-3 mt-4">
          <input
            type="number"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Number(e.target.value))
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            placeholder="Min"
          />

          <input
            type="number"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Number(e.target.value))
            }
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            placeholder="Max"
          />
        </div>
      </div>

      {/* ================= SORT ================= */}
      <div className="mt-6 border-t pt-5">
        <h3 className="font-semibold text-gray-800 mb-3">
          Sort By
        </h3>

        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value)
          }
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 outline-none"
        >
          <option value="">Default</option>
          <option value="az">Name A–Z</option>
          <option value="za">Name Z–A</option>
          <option value="low-high">
            Price Low → High
          </option>
          <option value="high-low">
            Price High → Low
          </option>
        </select>
      </div>

    </div>
  );
}

export default FilterSidebar;
