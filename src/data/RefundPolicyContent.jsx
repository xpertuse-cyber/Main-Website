// src/components/RefundPolicyContent.jsx
const RefundPolicyContent = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full mb-4">
          <span className="text-sm font-medium text-red-900">Effective Date: September 26, 2025</span>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Xpertuse is committed to ensuring customer satisfaction with its services. This Refund Policy details the terms and conditions under which refunds may be requested and processed for payments made through the website (the "Website") or for services (collectively, the "Services").
        </p>
        <p className="text-base text-gray-600 mt-4">
          By engaging with the Services, customers acknowledge and agree to the terms of this Refund Policy.
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          1. General Refund Policy
        </h3>
        <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
          <p className="font-semibold text-red-900 mb-2">Important Notice:</p>
          <p className="text-red-800">
            Unless explicitly stated otherwise in a signed agreement, all payments made for Services are non-refundable.
          </p>
        </div>
        
        <p className="mb-4">This policy applies to all service offerings, including but not limited to:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
          <li>Web Application Development</li>
          <li>Mobile Application Development</li>
          <li>IT Consulting</li>
          <li>Website Design and Development</li>
          <li>Digital Marketing and SEO Services</li>
          <li>Ongoing Maintenance and Support Plans</li>
        </ul>
        
        <p className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <strong>Note:</strong> Advance payments and deposits are considered non-refundable as they serve to secure and allocate dedicated team time and resources for projects.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          2. Eligibility for a Refund
        </h3>
        <p className="mb-4">While payments are generally non-refundable, Xpertuse may consider issuing a refund under the following specific circumstances, at its sole discretion:</p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-2">Eligible Circumstances:</h4>
            <ul className="list-disc pl-6 space-y-2 text-green-800">
              <li><strong>Service Not Delivered:</strong> If Xpertuse fails to commence or deliver the agreed-upon Service within the specified timeframe for reasons solely attributable to the company.</li>
              <li><strong>Duplicate Payment:</strong> If a customer is charged more than once for the same transaction due to a technical error on the payment processing system.</li>
              <li><strong>Cancellation by Xpertuse:</strong> If Xpertuse formally cancels a project after a payment has been made and is unable to provide an alternative solution.</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-semibold text-red-900 mb-2">Non-Eligible Circumstances:</h4>
            <p className="text-red-800 mb-2">Refunds will not be issued under circumstances including, but not limited to:</p>
            <ul className="list-disc pl-6 space-y-2 text-red-800">
              <li>A change of mind after a project has commenced</li>
              <li>Customer failure to provide necessary content, feedback, or materials required for project completion</li>
              <li>Issues arising from third-party services (e.g., hosting, domain registrars, or payment gateways) that are outside Xpertuse's direct control</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          3. How to Request a Refund
        </h3>
        <p className="mb-4">To request a refund, customers must contact Xpertuse within <strong>14 days</strong> of the transaction at <a href="mailto:hello.xpertuse@gmail.com" className="text-blue-600 hover:text-blue-800 underline">hello.xpertuse@gmail.com</a>.</p>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Refund requests must include:</h4>
          <ul className="list-disc pl-6 space-y-1 text-blue-800">
            <li>Full name and company name</li>
            <li>Transaction ID or invoice number</li>
            <li>A clear and detailed explanation for the refund request</li>
          </ul>
        </div>
        
        <p className="text-gray-700">
          Xpertuse will review refund requests within <strong>7-14 business days</strong> and notify customers of the decision via email. Approved refunds will be processed back to the original method of payment within <strong>15 business days</strong>, though processing times may vary depending on the payment provider.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          4. Third-Party Payment Processors
        </h3>
        <p className="text-gray-700">
          Payments are processed through secure third-party payment gateways like <strong>G-Pay</strong> and <strong>PayPal</strong>. Any refunds are subject to the terms, conditions, and processing timelines of these providers. Xpertuse is not responsible for any delays or issues caused by these third-party processors.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          5. Non-Refundable Circumstances
        </h3>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>Completed Milestones:</strong> No refunds will be issued for services or project milestones that have been completed and delivered.</li>
            <li><strong>Promotional Offers:</strong> Payments made under special discounts or promotional offers are non-refundable unless explicitly stated otherwise at the time of purchase.</li>
            <li><strong>Deposits:</strong> All initial deposits and advance payments are non-refundable.</li>
          </ul>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          6. Chargebacks and Disputes
        </h3>
        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
          <p className="text-orange-800">
            <strong>Warning:</strong> If a customer initiates a chargeback or payment dispute with their bank or credit card company without first contacting Xpertuse to resolve the issue, Xpertuse reserves the right to suspend the customer's account and all related Services immediately. Customers agree to cover any fees or costs incurred by Xpertuse as a result of unjustified chargebacks.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          7. Changes to This Refund Policy
        </h3>
        <p className="text-gray-700">
          Xpertuse reserves the right to update this Refund Policy at any time. The updated version will be posted on this page with a revised "Effective Date." Customers are encouraged to review this policy periodically.
        </p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          8. Contact Us
        </h3>
        <p className="mb-4">For questions or assistance with a refund request, please contact:</p>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="font-semibold text-gray-900 mb-2">Xpertuse</p>
          <p className="text-gray-700">Email: <a href="mailto:hello.xpertuse@gmail.com" className="text-blue-600 hover:text-blue-800 underline">hello.xpertuse@gmail.com</a></p>
          <p className="text-gray-700">For refund requests: <a href="mailto:hello.xpertuse@gmail.com" className="text-blue-600 hover:text-blue-800 underline">hello.xpertuse@gmail.com</a></p>
          <p className="text-gray-700">Phone: 9028251272</p>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicyContent;
