// src/components/TermsConditionsContent.jsx
const TermsConditionsContent = () => {
  return (
    <div className="space-y-6">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
          <span className="text-sm font-medium text-blue-900">Effective Date: September 26, 2025</span>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Welcome to Xpertuse. These Terms and Conditions ("Terms") govern the provision of all services, including but not limited to web application development, mobile application development, IT consulting, and digital marketing ("Services") by Xpertuse to clients ("Client").
        </p>
        <p className="text-base text-gray-600 mt-4">
          By engaging the Services, clients agree to have read, understood, and be bound by these Terms. If clients do not agree with these Terms, they must discontinue the use of Services immediately.
        </p>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          1. Services and Scope of Work
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1.1. Service Description:</h4>
            <p className="text-gray-700">Xpertuse provides a range of technology solutions tailored to meet client needs. The specific details, deliverables, timelines, and costs for each project will be documented in a separate formal proposal or Statement of Work (SOW).</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1.2. Governing Document:</h4>
            <p className="text-gray-700">The SOW for each project will serve as the definitive agreement for that project's scope. In case of any conflict between these Terms and an SOW, the SOW will prevail.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1.3. Out-of-Scope Work:</h4>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <p className="text-amber-800">Any work requested by the Client that falls outside the scope defined in the SOW will be considered a "Change Request." All Change Requests must be submitted in writing and will be subject to a separate quotation and timeline adjustment. Xpertuse will not proceed with any out-of-scope work until the Change Request is formally approved by the Client.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          2. Client Responsibilities
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2.1. Co-operation:</h4>
            <p className="text-gray-700">The Client agrees to cooperate fully with Xpertuse and to provide, in a timely manner, all necessary access, materials, and information required for the project. This includes, but is not limited to, content, branding assets, and access to servers or third-party accounts.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2.2. Point of Contact:</h4>
            <p className="text-gray-700">The Client will designate a single point of contact who has the authority to provide instructions, approvals, and feedback on behalf of the Client.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2.3. Timely Feedback:</h4>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800">Project timelines are dependent on the Client's timely feedback and approval at each milestone. Delays in receiving feedback may result in adjustments to the project schedule and costs.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          3. Payment and Billing Terms
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3.1. Pricing:</h4>
            <p className="text-gray-700">All prices are quoted exclusive of any applicable taxes (e.g., GST), which will be added to the invoice as required by law.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3.2. Payment Schedule:</h4>
            <p className="mb-2">The payment schedule will be detailed in the SOW. Common structures include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Fixed-Price Projects:</strong> Typically require a non-refundable advance deposit (e.g., 50%) before work commences, with the remaining balance due upon project completion or at specified milestones.</li>
              <li><strong>Large-Scale Projects:</strong> May follow a milestone-based payment plan, with payments tied to the completion of specific project phases (e.g., Discovery, Design, Development, Launch).</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3.3. Invoicing:</h4>
            <p className="text-gray-700">Invoices are due upon receipt unless otherwise specified (e.g., Net 15, Net 30).</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3.4. Late Payments:</h4>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="text-red-800">Payments not received by the due date will be subject to a late fee of 1.5% per month on the outstanding balance. Xpertuse reserves the right to suspend all work and services until the account is brought current.</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3.5. Payment Methods:</h4>
            <p className="text-gray-700">Payments are to be made via banking, cash, or through designated secure online payment methods (e.g., UPI Payments).</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          4. Intellectual Property Rights
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">4.1. Client Ownership:</h4>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800">Upon receipt of full and final payment for a project, the Client will be granted full ownership of the final, custom-developed deliverables, including source code and design files ("Final Deliverables").</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">4.2. Xpertuse's Pre-existing IP:</h4>
            <p className="text-gray-700">Xpertuse retains ownership of all pre-existing intellectual property, including proprietary code, libraries, frameworks, and tools used in the project. The Client is granted a non-exclusive, perpetual, worldwide license to use such pre-existing IP solely as an integrated part of the Final Deliverables.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">4.3. Portfolio Rights:</h4>
            <p className="text-gray-700">Xpertuse reserves the right to showcase the completed work, including visual representations and a general description of the project, in portfolio, case studies, and marketing materials, unless a separate non-disclosure agreement is signed.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          5. Confidentiality
        </h3>
        <p className="text-gray-700">Both parties agree to protect and not disclose the other's confidential and proprietary information. This obligation extends beyond the termination of the engagement.</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          6. Warranty and Limitation of Liability
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">6.1. Warranty Period:</h4>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800">Xpertuse provides a 30-day warranty period following the project's official launch date. During this time, any bugs or defects in the delivered code will be corrected at no additional cost. This warranty does not cover issues caused by client modifications, third-party software, or server/hosting environment changes.</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">6.2. Disclaimer:</h4>
            <p className="text-gray-700">Except for the express warranty above, all Services are provided "as is." Xpertuse shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data, arising from the use of Services.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">6.3. Maximum Liability:</h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-700">The maximum aggregate liability of Xpertuse to the Client for any and all claims shall not exceed the total fees paid by the Client for the specific project as detailed in the SOW.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          7. Term and Termination
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">7.1. Termination:</h4>
            <p className="text-gray-700">Either party may terminate the agreement with 30 day's written notice if the other party commits a material breach of these Terms.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">7.2. Effect of Termination:</h4>
            <p className="text-gray-700">Upon termination, the Client agrees to pay for all work completed up to the date of termination. Xpertuse will deliver all completed work for which payment has been received.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          8. Governing Law and Dispute Resolution
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">8.1. Governing Law:</h4>
            <p className="text-gray-700">These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">8.2. Dispute Resolution:</h4>
            <p className="text-gray-700">The parties agree to first attempt to resolve any dispute through good-faith negotiation. If the dispute cannot be resolved, it shall be subject to the exclusive jurisdiction of the courts in India.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          9. General Provisions
        </h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">9.1. Independent Contractor:</h4>
            <p className="text-gray-700">The relationship between parties is that of an independent contractor. Nothing in these Terms shall be construed to create a partnership, joint venture, or employer-employee relationship.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">9.2. Force Majeure:</h4>
            <p className="text-gray-700">Neither party shall be liable for any delay or failure to perform its obligations due to causes beyond its reasonable control, such as acts of God, war, or natural disaster.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">9.3. Severability:</h4>
            <p className="text-gray-700">If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">9.4. Entire Agreement:</h4>
            <p className="text-gray-700">These Terms, together with the applicable SOW, constitute the entire agreement between the parties and supersede all prior communications and agreements.</p>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
          10. Contact Information
        </h3>
        <p className="mb-4">For any questions, support, or clarifications regarding these Terms, please contact:</p>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <p className="font-semibold text-gray-900 mb-2">Xpertuse</p>
          <p className="text-gray-700">Legal inquiries: <a href="mailto:hello.xpertuse@gmail.com" className="text-blue-600 hover:text-blue-800 underline">hello.xpertuse@gmail.com</a></p>
          <p className="text-gray-700">General contact: <a href="mailto:hello.xpertuse@gmail.com" className="text-blue-600 hover:text-blue-800 underline">hello.xpertuse@gmail.com</a></p>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsContent;
