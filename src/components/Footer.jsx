/*
=====================================================
FOOTER (ATTACHED TO WHY CHOOSE US)
IMPORTANT:
=====================================================
*/

function Footer() {
  return (
    <footer className="w-full bg-slate-900 mt-0 pt-20 pb-10">
      
      {/* Footer content container */}
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h3 className="text-xl font-semibold text-white mb-3">
          EG Crackers
        </h3>

        <p className="mt-3 text-sm text-slate-200 mb-3">
          Quality crackers for every celebration 🎆
        </p>

        <p className="mt-3 text-xs text-slate-400">
          © {new Date().getFullYear()} EG Crackers. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
