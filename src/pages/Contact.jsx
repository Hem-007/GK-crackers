import PageContainer from "../components/PageContainer";
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp redirect (simple working solution)
    const whatsappMessage = `Hello GK Crackers,%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Message: ${formData.message}`;

    window.open(
      `https://wa.me/919600419087?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <PageContainer title="Contact Us">

      {/* =========================
          GRID LAYOUT
          ========================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* =========================
            LEFT SIDE – CONTACT DETAILS
            ========================= */}
        <div className="space-y-6">

          <div>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">
              Contact Information
            </h2>

            <div className="space-y-2">
              <a href="tel:9600419087" className="block text-[#DC2626] font-medium">
                📞 9600419087
              </a>
              <a href="tel:9940861382" className="block text-[#DC2626] font-medium">
                📞 9940861382
              </a>
              <a href="tel:8012442724" className="block text-[#DC2626] font-medium">
                📞 8012442724
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-3">
              Address
            </h2>

            <p>
              Er. M. Sundaramoorthy <br />
              GK Crackers <br />
              Vanamoorthilingapuram <br />
              Vembakkottai (Taluk & Post) <br />
              Sivakasi, Virudhunagar - 626131 <br />
              Tamil Nadu, India
            </p>

            <a
              href="https://maps.app.goo.gl/Sp6Y2sf2qU3zyKcZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                bg-[#F97316]
                hover:bg-[#EA580C]
                text-white
                font-semibold
                px-5
                py-3
                rounded-xl
                shadow-md
                transition
                mt-4
              "
            >
              📍 View on Google Maps
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#1F2937] mb-2">
              Working Hours
            </h2>
            <p>
              Monday – Saturday <br />
              9:00 AM – 8:00 PM
            </p>
          </div>

        </div>

        {/* =========================
            RIGHT SIDE – CONTACT FORM
            ========================= */}
        <div className="bg-[#FFF7ED] p-6 rounded-2xl shadow-md">

          <h2 className="text-xl font-semibold text-[#1F2937] mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-2
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#DC2626]
                "
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-2
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#DC2626]
                "
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-2
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#DC2626]
                "
              ></textarea>
            </div>

            <button
              type="submit"
              className="
                w-full
                bg-[#DC2626]
                hover:bg-[#B91C1C]
                text-white
                font-semibold
                py-3
                rounded-xl
                shadow-md
                transition
              "
            >
              Send via WhatsApp
            </button>

          </form>

        </div>

      </div>

    </PageContainer>
  );
}

export default Contact;
