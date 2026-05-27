export default function ShippingPolicyPage() {
  return (
    <main className="bg-[#f7fffd] min-h-screen pt-28 md:pt-40 pb-16 md:pb-24">

      <div className="max-w-[1100px] mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="mb-8 md:mb-16">

          <p className="text-[#00b894] font-semibold mb-4">
            Legal
          </p>

          <h1 className="text-[28px] sm:text-[34px] md:text-5xl lg:text-6xl font-black leading-[1.04] tracking-[-0.03em] mb-6 text-[#232323]">
            Shipping Policy
          </h1>

          <p className="text-black/50 text-lg">
            Shamrock NutraSciences Pvt Ltd · Effective Date: 1st Jan 2024
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 space-y-14">

          {/* INTRO */}
          <section className="space-y-5">

            <p className="text-black/70 leading-8 text-lg">
              At Shamrock NutraSciences Pvt Ltd, we are committed to delivering high-quality OTC healthcare products and wellness gadgets safely and efficiently across India.
            </p>

            <p className="text-black/70 leading-8 text-lg">
              This Shipping Policy outlines our order processing procedures, delivery timelines, shipping charges and customer support process.
            </p>
          </section>

          {/* COVERAGE */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              1. Shipping Coverage
            </h2>

            <p className="text-black/70 leading-8 text-lg">
              We currently ship across India. If you are located outside India and are interested in our products, please contact our support team for custom shipping options.
            </p>
          </section>

          {/* PROCESSING */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              2. Processing & Delivery Time
            </h2>

            <div className="space-y-6 text-black/70 text-lg leading-8">

              <div>
                <p className="font-semibold text-black mb-2">
                  Order Processing Time
                </p>

                <p>
                  All orders are processed within 7–10 business days (excluding Sundays and public holidays).
                </p>
              </div>

              <div>
                <p className="font-semibold text-black mb-3">
                  Estimated Delivery Timelines
                </p>

                <ul className="space-y-3 list-disc pl-6">

                  <li>
                    Metro Cities: 2–4 business days
                  </li>

                  <li>
                    Tier 2 & Tier 3 Cities: 3–6 business days
                  </li>

                  <li>
                    Remote Locations: 7–10 business days
                  </li>
                </ul>
              </div>

              <p>
                Delivery timelines for health gadgets may vary depending on product availability and location.
              </p>
            </div>
          </section>

          {/* SHIPPING CHARGES */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              3. Shipping Charges
            </h2>

            <p className="text-black/70 leading-8 text-lg mb-5">
              Shipping charges are calculated based on your delivery pin code and the weight or volume of your order.
            </p>

            <p className="text-black/70 leading-8 text-lg">
              The exact shipping cost will be displayed during checkout before payment is completed.
            </p>
          </section>

          {/* TRACKING */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              4. Order Tracking
            </h2>

            <p className="text-black/70 leading-8 text-lg">
              Once your order has been shipped, you will receive a tracking link via SMS and email. You may also log in to your account on the website to track your shipment status.
            </p>
          </section>

          {/* DELAYS */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              5. Delayed or Failed Deliveries
            </h2>

            <p className="text-black/70 leading-8 text-lg mb-5">
              We work with trusted logistics partners to ensure timely delivery of your orders.
            </p>

            <p className="text-black/70 leading-8 text-lg">
              However, delays may occur due to circumstances beyond our control such as natural disasters, strikes, operational disruptions or courier-related issues. We appreciate your patience and understanding during such situations.
            </p>
          </section>

          {/* PACKAGING */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              6. Packaging & Safety
            </h2>

            <p className="text-black/70 leading-8 text-lg">
              All products are packed securely using hygienic and tamper-evident packaging to maintain product safety and integrity, especially for sensitive healthcare products and electronic wellness devices.
            </p>
          </section>

          {/* UNDELIVERABLE */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              7. Undeliverable Orders
            </h2>

            <p className="text-black/70 leading-8 text-lg mb-6">
              If delivery is unsuccessful due to any of the following reasons:
            </p>

            <ul className="space-y-4 text-black/70 text-lg leading-8 list-disc pl-6 mb-8">

              <li>
                Incorrect or incomplete delivery address
              </li>

              <li>
                Refused delivery
              </li>

              <li>
                Customer unavailable at the time of delivery
              </li>
            </ul>

            <p className="text-black/70 leading-8 text-lg mb-5">
              The order may be returned to us.
            </p>

            <p className="text-black/70 leading-8 text-lg">
              In such cases, our team will contact you to confirm details and arrange re-shipment. Additional shipping charges may apply.
            </p>
          </section>

          {/* INTERNATIONAL */}
          <section>

            <h2 className="text-[17px] leading-[1.3] font-black mb-4 md:mb-6">
              8. International Orders
            </h2>

            <p className="text-black/70 leading-8 text-lg">
              We currently do not support international shipping through the website. For export inquiries or bulk international orders, please contact us directly at support@reework.in.
            </p>
          </section>

          {/* SUPPORT */}
          <section>

            <div className="bg-[#d3f7f0] rounded-[28px] p-8 border border-[#bdeee5]">

              <h2 className="text-2xl font-bold mb-5 tracking-tight text-[#0d5c4d]">
                9. Customer Support
              </h2>

              <div className="space-y-4 text-[#0d5c4d]/80 leading-8 text-lg">

                <p>
                  Email: support@reework.in
                </p>

                <p>
                  Phone: +91 8652631386
                </p>

                <p>
                  Support Hours: Monday to Saturday, 10:00 AM to 6:00 PM
                </p>
              </div>
            </div>
          </section>

          {/* NOTE */}
          <section>

            <div className="border border-black/5 rounded-[24px] p-7 bg-[#fafefe]">

              <p className="text-black/60 text-lg leading-8">
                Note: This Shipping Policy may be updated periodically. We recommend reviewing this page regularly to stay informed about our latest shipping practices.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}