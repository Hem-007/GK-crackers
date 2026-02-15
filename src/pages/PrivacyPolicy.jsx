import PageContainer from "../components/PageContainer";

function PrivacyPolicy() {
  return (
    <PageContainer title="Privacy Policy">

      <p>
        GK Crackers (“we”, “our”, “us”) is committed to protecting the privacy
        of our customers and website visitors. This Privacy Policy explains
        how we collect, use, and safeguard your personal information when you
        use our website or place an order.
      </p>

      <h2 className="text-lg font-semibold">1. Information We Collect</h2>
      <p>
        When you place an order or contact us, we may collect:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Full Name</li>
        <li>Mobile Number</li>
        <li>Delivery Address</li>
        <li>Order Details</li>
        <li>Communication messages via WhatsApp or phone</li>
      </ul>

      <h2 className="text-lg font-semibold">2. How We Use Your Information</h2>
      <p>Your information is used strictly for:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Processing and confirming orders</li>
        <li>Delivery coordination</li>
        <li>Customer support</li>
        <li>Improving our services</li>
      </ul>

      <h2 className="text-lg font-semibold">3. Data Protection</h2>
      <p>
        We take reasonable precautions to protect your information.
        We do not sell, rent, or trade your personal information
        with third parties.
      </p>

      <h2 className="text-lg font-semibold">4. Third-Party Services</h2>
      <p>
        Our website may use third-party services such as hosting providers
        or analytics tools. These services may collect limited technical
        information such as IP address or browser type for performance
        monitoring.
      </p>

      <h2 className="text-lg font-semibold">5. Cookies</h2>
      <p>
        Our website may use cookies to improve user experience.
        Cookies do not store personal information and can be disabled
        in your browser settings.
      </p>

      <h2 className="text-lg font-semibold">6. Children's Privacy</h2>
      <p>
        Our website and products are not intended for individuals
        under 18 years of age. We do not knowingly collect personal
        data from minors.
      </p>

      <h2 className="text-lg font-semibold">7. Updates to This Policy</h2>
      <p>
        We reserve the right to update this Privacy Policy at any time.
        Changes will be posted on this page.
      </p>

      <h2 className="text-lg font-semibold">8. Contact Information</h2>
      <p>
        If you have questions regarding this Privacy Policy, please contact:
      </p>
      <p>
        GK Crackers <br />
        Sivakasi, Tamil Nadu <br />
        Phone: 9600419087 / 9940861382 / 8012442724
      </p>

      <p className="text-sm text-gray-500 mt-6">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

    </PageContainer>
  );
}

export default PrivacyPolicy;
