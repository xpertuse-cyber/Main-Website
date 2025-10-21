// src/components/PrivacyPolicyContent.jsx
const PrivacyPolicyContent = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
          <span className="text-sm font-medium text-blue-900">Effective Date: September 26, 2025</span>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Xpertuse is dedicated to protecting customer privacy and ensuring the security of personal information. This Privacy Policy outlines how Xpertuse collects, uses, discloses, and protects information when customers visit the website (the "Website") or engage with services, including any payment processing functionalities.
        </p>
        <p className="text-base text-gray-600 mt-4">
          By accessing or using the Website and services, customers consent to the terms outlined in this Privacy Policy. If customers do not agree with any terms in this policy, they should discontinue the use of services immediately.
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          1. Information Collected
        </h3>
        <p className="mb-4">Xpertuse may collect the following categories of information:</p>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Personal Information:</h4>
            <p className="mb-2">When customers interact with the Website or services, such as filling out a form or making a payment, personal details that are voluntarily provided may be collected. This includes, but is not limited to:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Billing and/or shipping address</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Non-Personal (Derivative) Information:</h4>
            <p className="mb-2">Non-identifiable data may be automatically collected when customers access the Website. This can include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              <li>IP address, browser type, and operating system</li>
              <li>Device information (e.g., mobile device ID, model)</li>
              <li>Usage data (e.g., pages visited, access times, time spent on the Website)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Payment-Related Information:</h4>
            <p>When customers use the payment gateway to make a purchase, transaction details necessary to process payments securely are collected. Sensitive payment data, such as credit card numbers, is handled directly by trusted third-party payment processors (e.g., G-Pay, PayPal) and is not stored on Xpertuse servers. Only a token of such payment information may be retained for managing orders or subscriptions.</p>
          </div>
        </div>

        <p className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <strong>Important Notice:</strong> When customers voluntarily send electronic mail or fill out a form, a record of this information will be kept to respond. In case customers have submitted personal information and contact details, Xpertuse reserves the right to call, SMS, email, or WhatsApp them about products and offers, even if their number has DND activated on it.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          2. How Information Is Collected
        </h3>
        <p className="mb-4">Information is gathered through the following methods:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Directly from Customers:</strong> When customers provide their details during account creation, payment transactions, form submissions, or other direct correspondence.</li>
          <li><strong>Automatically:</strong> Through the use of cookies, web beacons, tracking pixels, and similar technologies that monitor customer interaction with the Website.</li>
          <li><strong>From Third Parties:</strong> From payment gateway providers or analytics services to facilitate transactions and help improve service offerings.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          3. How Information Is Used
        </h3>
        <p className="mb-4">Information is processed for purposes based on legitimate business interests, the fulfillment of contracts with customers, and compliance with legal obligations. The collected information is used to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Fulfill and manage orders and process payments securely</li>
          <li>Provide, maintain, and improve the Website and services</li>
          <li>Communicate with customers, including responding to inquiries and sending transactional emails like payment confirmations</li>
          <li>Send marketing and promotional communications, which customers can opt-out of at any time</li>
          <li>Ensure the security of the Website and prevent fraudulent activities</li>
          <li>Comply with legal obligations and resolve potential disputes</li>
          <li>Analyze usage trends to enhance user experience and personalize services</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          4. Sharing Information
        </h3>
        <p className="mb-4">Xpertuse does not sell or rent personal information. Customer information may be shared with the following parties under specific circumstances:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Payment Processors:</strong> With third-party payment gateways (e.g., G-Pay, PayPal) to securely process transactions. These providers operate under their own privacy policies, which customers are recommended to review.</li>
          <li><strong>Service Providers:</strong> With trusted partners who assist in operating the Website, conducting business, or providing services like analytics. These partners are bound by strict confidentiality agreements.</li>
          <li><strong>Legal Authorities:</strong> When required by law, regulation, or legal process, or to protect the rights, property, or safety of Xpertuse, users, or others.</li>
          <li><strong>Business Transfers:</strong> If Xpertuse undergoes a merger, acquisition, or sale of assets, customer information may be transferred to the successor entity.</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          5. Security of Information
        </h3>
        <p>Xpertuse implements administrative, technical, and physical security measures to help protect personal information from unauthorized access, loss, or misuse. However, no online system is 100% secure, and absolute security of data transmitted over the internet cannot be guaranteed.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          6. Cookies and Tracking Technologies
        </h3>
        <p>Xpertuse uses cookies and similar tracking technologies to enhance customer experience, analyze usage, and facilitate processes. Customers can manage cookie preferences through browser settings. Please be aware that disabling cookies may affect certain functionalities of the Website.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          7. Customer Rights and Choices
        </h3>
        <p className="mb-4">Depending on jurisdiction, customers may have certain rights regarding their personal information, such as:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>The right to access or correct personal information</li>
          <li>The right to request the deletion of data, subject to legal obligations to retain it</li>
          <li>The right to opt out of marketing communications</li>
        </ul>
        <p className="mt-4">To exercise these rights, please contact Xpertuse at <a href="mailto:hello.xpertuse@gmail.com" className="text-blue-600 hover:text-blue-800 underline">hello.xpertuse@gmail.com</a>.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          8. Third-Party Links
        </h3>
        <p>The Website may contain links to third-party sites (e.g., payment gateways). Xpertuse is not responsible for the privacy practices or content of these external sites. Customers are recommended to review their privacy policies before providing any personal information.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          9. International Data Transfers
        </h3>
        <p>If customers are located outside of the primary country of operation, their information may be transferred to and processed in the country where Xpertuse or service providers operate. Appropriate safeguards will be ensured to protect customer data during such transfers.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          10. Retention of Information
        </h3>
        <p>Personal information is retained only for as long as is reasonably necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal and contractual obligations, or resolve disputes.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          11. Changes to This Privacy Policy
        </h3>
        <p>Xpertuse reserves the right to update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Effective Date." Customers are encouraged to review this policy periodically to stay informed of any changes.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          12. Contact Us
        </h3>
        <p className="mb-4">For questions, concerns, or requests regarding this Privacy Policy or data practices, please contact:</p>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="font-semibold text-gray-900 mb-2">Xpertuse</p>
          <p className="text-gray-700">Email: <a href="mailto:hello.xpertuse@gmail.com" className="text-blue-600 hover:text-blue-800 underline">hello.xpertuse@gmail.com</a></p>
          <p className="text-gray-700">Phone: 9028251272</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyContent;
