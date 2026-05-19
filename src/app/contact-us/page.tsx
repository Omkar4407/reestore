import {
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#f7fffd] min-h-screen pt-40 pb-24 overflow-hidden">

      <div className="max-w-[1300px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 max-w-[850px]">

          <p className="text-[#00b894] font-semibold mb-4">
            Contact
          </p>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-[#232323]">
            We’d love to hear from you.
          </h1>

          <p className="text-black/60 text-xl leading-relaxed">
            Whether you have a question about products, shipping, wellness support or partnerships — our team is here to help.
          </p>
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT CARD */}
          <div className="bg-white rounded-[40px] p-10 md:p-14 border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">

            <div className="space-y-10">

              {/* EMAIL */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-[20px] bg-[#d3f7f0] flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7 text-[#0d5c4d]" />
                </div>

                <div>
                  <p className="text-black/40 text-sm mb-2 uppercase tracking-[0.2em]">
                    Email
                  </p>

                  <a
                    href="mailto:ecom@reework.in"
                    className="text-2xl font-semibold hover:text-[#00b894] transition"
                  >
                    ecom@reework.in
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-[20px] bg-[#d3f7f0] flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-[#0d5c4d]" />
                </div>

                <div>
                  <p className="text-black/40 text-sm mb-2 uppercase tracking-[0.2em]">
                    Phone
                  </p>

                  <a
                    href="tel:+918652631386"
                    className="text-2xl font-semibold hover:text-[#00b894] transition"
                  >
                    +91 8652631386
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-[20px] bg-[#d3f7f0] flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7 text-[#0d5c4d]" />
                </div>

                <div>
                  <p className="text-black/40 text-sm mb-2 uppercase tracking-[0.2em]">
                    Address
                  </p>

                  <p className="text-xl font-medium leading-relaxed text-[#232323]">
                    83 E, Hansraj Pragji Building,
                    <br />
                    Off. Dr. E. Moses Road,
                    <br />
                    Worli, Mumbai,
                    <br />
                    Maharashtra 400018
                  </p>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-[20px] bg-[#d3f7f0] flex items-center justify-center shrink-0">
                  <Clock3 className="w-7 h-7 text-[#0d5c4d]" />
                </div>

                <div>
                  <p className="text-black/40 text-sm mb-2 uppercase tracking-[0.2em]">
                    Support Hours
                  </p>

                  <div className="space-y-2 text-xl font-medium">

                    <p>
                      Monday to Friday:
                      <span className="text-black/60">
                        {" "}
                        10:00 AM – 6:00 PM (IST)
                      </span>
                    </p>

                    <p>
                      Sunday:
                      <span className="text-black/60">
                        {" "}
                        Closed
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative bg-[#0d5c4d] rounded-[40px] overflow-hidden p-10 md:p-14 text-white flex flex-col justify-between">

            {/* BG GLOW */}
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#00d4b7] opacity-10 rounded-full blur-3xl" />

            <div className="relative z-10">

              <p className="text-[#7de9d8] font-semibold mb-4">
                Reestore Wellness
              </p>

              <h2 className="text-5xl font-bold leading-tight tracking-tight mb-8">
                Helping people build healthier lifestyles through smarter nutrition.
              </h2>

              <p className="text-white/70 text-xl leading-relaxed max-w-[520px]">
                Our team is committed to delivering wellness products, support and experiences designed for modern everyday living.
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 pt-20">

              <a
                href="mailto:ecom@reework.in"
                className="inline-flex items-center justify-center bg-white text-[#0d5c4d] rounded-full px-8 py-4 text-lg font-semibold hover:scale-[1.02] transition"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}