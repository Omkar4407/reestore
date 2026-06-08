export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f7fffd] min-h-screen pt-28 md:pt-40 pb-16 md:pb-24">

      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-8 md:mb-16">

          <p className="text-[#00b894] font-semibold mb-4">
            Legal
          </p>

          <h1 className="text-[28px] sm:text-[34px] md:text-5xl lg:text-6xl font-black leading-[1.04] tracking-[-0.03em] mb-6 text-[#232323]">
            Privacy Policy
          </h1>

          <p className="text-black/50 text-lg">
            Effective Date: 15th October 2024
          </p>

        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 space-y-14">

          {/* THIRD PARTY */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              Third Party Services
            </h2>

            <p className="text-black/70 leading-8 text-lg">
              We may share information with vendors and service providers who
              support our operations including Shopify, payment processors,
              analytics providers, fulfillment partners and customer support
              providers.
            </p>

          </section>

          {/* SECURITY */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              Security & Retention
            </h2>

            <p className="text-black/70 leading-8 text-lg">
              We use reasonable safeguards to protect your personal information.
              However, no system can guarantee complete security and users should
              avoid transmitting sensitive information through insecure channels.
            </p>

          </section>

          {/* RIGHTS */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              Your Rights
            </h2>

            <ul className="space-y-4 text-black/70 text-lg leading-8 list-disc pl-6">

              <li>
                Right to access your personal information.
              </li>

              <li>
                Right to request deletion of your information.
              </li>

              <li>
                Right to correct inaccurate information.
              </li>

              <li>
                Right to portability and transfer requests.
              </li>

              <li>
                Right to withdraw consent where applicable.
              </li>

              <li>
                Right to opt out of marketing communications.
              </li>

            </ul>

          </section>

          {/* CONTACT */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              Contact Us
            </h2>

            <div className="space-y-4 text-black/70 text-lg leading-8">

              <p>
                Email: ecom@reework.in
              </p>

              <p>
                Shamrock PharmaChemi Pvt Ltd
              </p>

              <p>
                Upper Worli Worli, 83 E,
              </p>

              <p>
                Hansraj Pragji Building,
              </p>

              <p>
                Mumbai, MH, 400018, IN
              </p>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}