function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 -mt-10">
      <h1 className="text-4xl font-bold text-[#024f98] mb-4">
        Terms & Conditions
      </h1>

      <section className="space-y-6 text-lg leading-relaxed">
        <p>
          Welcome to Flauraa Marketing (“we”, “our”, “us”). These Terms &
          Conditions (“Terms”) govern your use of our website{" "}
          <a href="https://flauraa.com" className="text-blue-600 underline">
            https://flauraa.com
          </a>{" "}
          and any services, content, or tools provided by Flauraa Marketing.
        </p>
        <p>
          By accessing or using our website or services, you agree to these
          Terms. If you do not agree, please do not use our site or services.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            1. Use of the Website
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              You must be at least 18 years old or of legal age in your
              jurisdiction.
            </li>
            <li>You agree to use this site for lawful purposes only.</li>
            <li>
              You must not copy, modify, distribute, reverse-engineer, or
              exploit any content without permission.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            2. Services Disclaimer
          </h2>
          <p>
            Flauraa offers branding, digital marketing, strategy, and consulting
            services. While we follow best practices, specific results are not
            guaranteed.
          </p>
          <p>We may decline or terminate a project if:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Content is illegal or unethical</li>
            <li>Client is non-responsive or violates timelines</li>
            <li>Payment terms are not met</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            3. Intellectual Property
          </h2>
          <p>
            All website content is the intellectual property of Flauraa unless
            stated otherwise.
          </p>
          <p>You may not:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Reproduce or redistribute our content</li>
            <li>Use our branding or materials without consent</li>
          </ul>
          <p>Client logos shown are owned by their respective companies.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            4. Client Responsibility
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide accurate and timely information</li>
            <li>Review and approve deliverables promptly</li>
            <li>Own or have rights to submitted content</li>
          </ul>
          <p>
            We are not liable for IP-related disputes with client-provided
            materials.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            5. Payment & Refunds
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Payments must follow the agreed schedule</li>
            <li>Late payments may pause or stop service</li>
            <li>Payments are non-refundable unless clearly stated</li>
            <li>
              For subscriptions, cancel at least 7 days before the next billing
              date
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            6. Confidentiality
          </h2>
          <p>Both parties agree to protect confidential information.</p>
          <p>
            We may showcase your project for portfolio use, but internal details
            won’t be shared without permission.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            7. Third-Party Tools & Platforms
          </h2>
          <p>We may use third-party platforms like Google Ads or Shopify.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>We’re not liable for issues caused by third-party platforms</li>
            <li>Clients must follow each platform’s policies</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            8. Limitation of Liability
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              We’re not liable for indirect loss from using the website or
              services
            </li>
            <li>
              Not responsible for data/revenue loss or force majeure delays
            </li>
            <li>Our liability is limited to the amount paid for the service</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            9. Termination of Use
          </h2>
          <p>
            We may restrict or terminate access at any time if these Terms are
            violated.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            10. Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms are governed by Indian law. Disputes will be handled by
            courts in{" "}
            <span className="italic text-gray-600">
              [Insert City, e.g., Mumbai or Ahmedabad]
            </span>
            .
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            11. Updates to Terms
          </h2>
          <p>
            We may update these Terms at any time. Updates will appear on this
            page, and continued use means you accept the changes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#024f98] mb-2">
            12. Contact Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Flauraa Marketing</strong>
            </li>
            <li>
              📧 Email:{" "}
              <a
                href="mailto:legal@flauraa.com"
                className="text-blue-600 underline"
              >
                legal@flauraa.com
              </a>
            </li>
            <li>
              🌐 Website:{" "}
              <a
                href="https://flauraa.com"
                className="text-blue-600 underline"
                target="_blank"
              >
                https://flauraa.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default TermsOfService;
