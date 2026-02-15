import PageContainer from "../components/PageContainer";

function Terms() {
  return (
    <PageContainer title="Terms & Conditions">

      <p>
        Welcome to GK Crackers. By accessing or using our website,
        you agree to comply with and be bound by the following
        Terms & Conditions.
      </p>

      <h2 className="text-lg font-semibold">1. General Information</h2>
      <p>
        GK Crackers is a fireworks seller based in Sivakasi, Tamil Nadu.
        All products listed are subject to availability and local regulations.
      </p>

      <h2 className="text-lg font-semibold">2. Product Availability</h2>
      <p>
        Products are subject to stock availability.
        During peak festival seasons, certain items may sell out quickly.
      </p>

      <h2 className="text-lg font-semibold">3. Pricing Policy</h2>
      <p>
        Prices are subject to change without prior notice.
        Discounts and special offers are time-limited.
      </p>

      <h2 className="text-lg font-semibold">4. Order Confirmation</h2>
      <p>
        Orders are confirmed only after communication
        via phone or WhatsApp and payment verification (if applicable).
      </p>

      <h2 className="text-lg font-semibold">5. Payment Terms</h2>
      <p>
        Payment methods and confirmation details will be shared
        during order processing. Orders may not be dispatched
        without payment confirmation.
      </p>

      <h2 className="text-lg font-semibold">6. Delivery Policy</h2>
      <p>
        Delivery timelines depend on order size and location.
        We are not responsible for delays caused by transportation
        issues or unforeseen circumstances.
      </p>

      <h2 className="text-lg font-semibold">7. Cancellation & Refund Policy</h2>
      <p>
        Orders once confirmed cannot be cancelled during peak season.
        Refunds, if applicable, are processed at our discretion.
      </p>

      <h2 className="text-lg font-semibold">8. Safety Disclaimer</h2>
      <p>
        Fireworks must be used strictly according to safety guidelines.
        GK Crackers is not responsible for misuse, negligence,
        or failure to follow safety instructions.
      </p>

      <h2 className="text-lg font-semibold">9. Legal Compliance</h2>
      <p>
        Customers must comply with local laws and regulations
        regarding the purchase and use of fireworks.
      </p>

      <h2 className="text-lg font-semibold">10. Limitation of Liability</h2>
      <p>
        GK Crackers shall not be held liable for any indirect,
        incidental, or consequential damages arising from
        the use of our products.
      </p>

      <h2 className="text-lg font-semibold">11. Changes to Terms</h2>
      <p>
        We reserve the right to update these Terms & Conditions
        at any time without prior notice.
      </p>

      <p className="text-sm text-gray-500 mt-6">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

    </PageContainer>
  );
}

export default Terms;
