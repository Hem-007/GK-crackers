function SearchBar({
  value,
  onChange,
  onEnter,
  placeholder = "Search products…",
}) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onEnter) {
            onEnter();
          }
        }}
        placeholder={placeholder}
        className="
          w-full
          h-11 sm:h-12
          px-4 sm:px-5
          rounded-xl
          border border-gray-200
          text-sm sm:text-base
          bg-white
          focus:outline-none
          focus:ring-2
          focus:ring-red-500/30
        "
      />
    </div>
  );
}

export default SearchBar;
