export default function RefundPolicyPage() {
  return (
    <main className="bg-[#f7fffd] min-h-screen pt-40 pb-24">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16">

          <p className="text-[#00b894] font-semibold mb-4">
            Legal
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-[#232323]">
            Refund & Cancellation Policy
          </h1>

          <p className="text-black/50 text-lg">
            Reework Refund & Cancellation Policy
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 space-y-14">

          {/* INTRO */}
          <section className="space-y-5">

            <p className="text-black/70 leading-8 text-lg">
              We want your experience with Reework to be smooth and worry-free. That’s why we’ve designed our refund and return process to be as simple, transparent and customer-friendly as possible.
            </p>
          </section>

          {/* RETURN POLICY */}
          <section>

            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Returning Unused Products
            </h2>

            <p className="text-black/70 leading-8 text-lg mb-5">
              You may return unused and unopened products within 30 days of placing your order.
            </p>

            <p className="text-black/70 leading-8 text-lg mb-5">
              To be eligible for a return, the product seal, original packaging and boxing must remain completely intact.
            </p>

            <p className="text-black/70 leading-8 text-lg">
              Returns will not be accepted if the product has been opened, used or tampered with.
            </p>
          </section>

          {/* REFUND PROCESS */}
          <section>

            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Refund Process
            </h2>

            <ul className="space-y-4 text-black/70 text-lg leading-8 list-disc pl-6">

              <li>
                Reverse pickup charges may apply depending on your location.
              </li>

              <li>
                Refunds for prepaid orders will be credited back to the original payment method used during purchase.
              </li>

              <li>
                For Cash-on-Delivery orders, refunds will be processed to your bank account after the returned item is received and verified.
              </li>
            </ul>
          </section>

          {/* DAMAGED PRODUCTS */}
          <section>

            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Damaged Products / Missing Items / Wrong Orders
            </h2>

            <p className="text-black/70 leading-8 text-lg mb-6">
              If your order arrives damaged, incomplete or incorrect, please notify us within 48 hours of delivery.
            </p>

            <p className="text-black/70 leading-8 text-lg mb-5">
              To raise a claim, contact us using the details below and include:
            </p>

            <ul className="space-y-4 text-black/70 text-lg leading-8 list-disc pl-6 mb-8">

              <li>
                A clear unboxing video
              </li>

              <li>
                Photos of the outer packaging
              </li>

              <li>
                Photos of the products received
              </li>
            </ul>

            <p className="text-black/70 leading-8 text-lg">
              Once our team reviews the issue, we will arrange a reverse pickup and issue either a replacement or a full refund, depending on stock availability.
            </p>
          </section>

          {/* IMPORTANT NOTES */}
          <section>

            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Important Notes
            </h2>

            <ul className="space-y-4 text-black/70 text-lg leading-8 list-disc pl-6">

              <li>
                Replacements are subject to product availability.
              </li>

              <li>
                No additional compensation or complimentary products will be provided.
              </li>

              <li>
                Reework’s liability is limited to the value of the product or order in question.
              </li>
            </ul>
          </section>

          {/* TIMELINES */}
          <section>

            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Refund Timelines
            </h2>

            <p className="text-black/70 leading-8 text-lg">
              Refunds for prepaid orders are generally processed back to the original payment method within 7 business days after approval.
            </p>
          </section>

          {/* CANCELLATION */}
          <section>

            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Cancellation Policy
            </h2>

            <p className="text-black/70 leading-8 text-lg mb-5">
              You may request cancellation of your order before it has been dispatched.
            </p>

            <p className="text-black/70 leading-8 text-lg mb-5">
              At the time of cancellation, you may choose your preferred refund method:
            </p>

            <ul className="space-y-4 text-black/70 text-lg leading-8 list-disc pl-6 mb-8">

              <li>
                Refund back to the original payment method used during purchase.
              </li>
            </ul>

            <p className="text-black/70 leading-8 text-lg">
              Once your cancellation request is approved, Reework will initiate the refund according to your selected preference.
            </p>
          </section>

          {/* HEALTH DISCLAIMER */}
          <section>

            <div className="bg-[#d3f7f0] rounded-[28px] p-8 border border-[#bdeee5]">

              <h2 className="text-2xl font-bold mb-4 tracking-tight text-[#0d5c4d]">
                Health Disclaimer
              </h2>

              <p className="text-[#0d5c4d]/80 leading-8 text-lg">
                Always consult a qualified healthcare professional before using any dietary supplement, wellness product or nutrition-related product.
              </p>
            </div>
          </section>

          {/* CONTACT */}
          <section>

            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Contact Us
            </h2>

            <div className="space-y-4 text-black/70 text-lg leading-8">

              <p>
                Email: support@reework.in
              </p>

              <p>
                Phone: +91 8652631386
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}