import PageContainer from "../components/PageContainer";

function About() {
  return (
    <PageContainer title="About GK Crackers">

      {/* =========================
          TOP SECTION – DETAILED ABOUT
          ========================= */}
      <div className="space-y-6">

        <p>
          GK Crackers is a trusted fireworks seller based in Sivakasi,
          Tamil Nadu — the fireworks capital of India.
          We proudly serve customers across regions with high-quality,
          safe, and affordable crackers for every celebration.
        </p>

        <p>
          With years of experience in the fireworks industry,
          we carefully select products from reputed Sivakasi manufacturers
          to ensure safety, quality, and reliability.
        </p>

        <p>
          Whether you are purchasing for Diwali, weddings,
          temple festivals, or bulk corporate events,
          GK Crackers guarantees competitive pricing,
          proper packaging, and dependable customer support.
        </p>

        <h2 className="text-xl font-semibold text-[#1F2937] mt-8">
          Why Choose Us?
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc pl-6">
          <li>Direct supply from Sivakasi manufacturers</li>
          <li>Safe & secure packaging</li>
          <li>Wholesale & retail orders accepted</li>
          <li>Transparent pricing</li>
          <li>Timely communication</li>
          <li>Customer-first service</li>
        </ul>

      </div>

      {/* =========================
          DIVIDER
          ========================= */}
      <div className="border-t border-gray-200 my-10"></div>

      {/* =========================
          BOTTOM SECTION – LOCATION & DETAILS
          ========================= */}
      <div className="space-y-6">

        <h2 className="text-2xl font-semibold text-[#1F2937]">
          Our Location
        </h2>

        <p>
          <strong>Er. M. Sundaramoorthy</strong><br />
          GK Crackers<br />
          Vanamoorthilingapuram<br />
          Vembakkottai (Taluk & Post)<br />
          Sivakasi, Virudhunagar - 626131<br />
          Tamil Nadu, India
        </p>

        <h3 className="text-lg font-semibold">
          Contact Numbers
        </h3>

        <div className="space-y-2">
          <a href="tel:9600419087" className="block text-[#DC2626] font-medium">
            9600419087
          </a>
          <a href="tel:9940861382" className="block text-[#DC2626] font-medium">
            9940861382
          </a>
          <a href="tel:8012442724" className="block text-[#DC2626] font-medium">
            8012442724
          </a>
        </div>

        {/* BIG GOOGLE MAP BUTTON */}
        <a
          href="https://maps.app.goo.gl/Sp6Y2sf2qU3zyKcZ9"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-[#DC2626]
            hover:bg-[#B91C1C]
            text-white
            font-semibold
            px-6
            py-3
            rounded-xl
            shadow-md
            transition
            mt-4
          "
        >
          📍 View Our Location on Google Maps
        </a>

      </div>

    </PageContainer>
  );
}

export default About;
