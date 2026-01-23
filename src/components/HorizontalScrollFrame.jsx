/*
=====================================================
HORIZONTAL SCROLL FRAME
- Shows exactly 4 cards
- Scrolls horizontally
- Adds border / frame effect
=====================================================
*/

function HorizontalScrollFrame({ children }) {
  return (
    <div
      className="
        relative
        border border-white/40
        rounded-2xl
        bg-white/10
        backdrop-blur-md
        p-4
        overflow-x-auto
        scroll-smooth
        scrollbar-hide
      "
    >
      {children}
    </div>
  );
}

export default HorizontalScrollFrame;
