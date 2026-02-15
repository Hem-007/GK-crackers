function MobileFilterDrawer({
  showFilters,
  setShowFilters,
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
}) {
  if (!showFilters) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setShowFilters(false)}
      />

      {/* Drawer */}
      <div className="relative w-full bg-white rounded-t-2xl p-5 max-h-[80vh] overflow-y-auto">

        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-lg">Filters</h2>
          <button onClick={() => setShowFilters(false)}>
            Close
          </button>
        </div>

        {/* Category */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Category</h3>
          <select
            value={activeCategory}
            onChange={(e) =>
              handleCategoryChange(e.target.value)
            }
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">All</option>
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Price */}
<div className="mt-6">
  <h3 className="font-semibold mb-2">Price Range</h3>

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

  {/* Live Display */}
  <div className="flex justify-between text-xs mt-2 text-gray-600">
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


        {/* Sort */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Sort By</h3>
          <select
            value={sortOrder}
            onChange={(e) =>
              setSortOrder(e.target.value)
            }
            className="w-full border rounded-md px-3 py-2"
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
    </div>
  );
}

export default MobileFilterDrawer;
