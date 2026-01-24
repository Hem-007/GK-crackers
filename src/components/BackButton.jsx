import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide back button on Home page
  if (location.pathname === "/") return null;

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        md:hidden
        fixed
        top-3 left-3
        z-50
        bg-white
        shadow
        rounded-full
        p-2
        flex items-center justify-center
        active:scale-95
      "
      aria-label="Go back"
    >
      <ArrowLeft size={20} className="text-gray-700" />
    </button>
  );
}

export default BackButton;
