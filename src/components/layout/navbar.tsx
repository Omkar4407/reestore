"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/store/cart-store";

export default function Navbar() {
  const { openCart, items } = useCartStore();
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (value: string) => {
    setSearch(value);
    if (!value.trim()) { setResults([]); return; }
    try {
      const res = await fetch(`/api/search?q=${value}`);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Close search results on outside click
  useEffect(() => {
    const close = () => setResults([]);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1700px] mx-auto px-3 sm:px-6 py-3 sm:py-5">

        {/* ── PILL ── always stays the same, menu never goes inside it ── */}
        <div className="bg-white/75 backdrop-blur-2xl border border-black/5 rounded-full px-5 sm:px-7 py-3 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">

          <div className="flex items-center justify-between gap-4">

            {/* Logo — always visible */}
            <Link
              href="/"
              className="relative w-[130px] h-[40px] sm:w-[190px] sm:h-[56px] md:w-[280px] md:h-[82px] shrink-0 z-10"
            >
              <Image
                src="/logo.svg"
                alt="Reestore"
                fill
                priority
                unoptimized
                className="object-contain object-left"
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden xl:flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#0d5c4d] transition">Home</Link>
              <Link href="/" className="hover:text-[#0d5c4d] transition">Food Products</Link>
              <Link href="/" className="hover:text-[#0d5c4d] transition">Supplements</Link>
              <Link href="/" className="hover:text-[#0d5c4d] transition">Wellness</Link>
              <Link href="/" className="hover:text-[#0d5c4d] transition">Blogs</Link>
              <Link href="/contact-us" className="hover:text-[#0d5c4d] transition">Contact</Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Desktop search */}
              <div className="relative hidden xl:block">
                <div className="flex items-center bg-[#f7fffd] border border-black/5 rounded-full px-4 h-12 w-[280px]">
                  <Search className="w-4 h-4 text-black/40 mr-3" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-transparent outline-none w-full text-sm"
                  />
                </div>
                {results.length > 0 && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-14 left-0 w-full max-h-[420px] overflow-y-auto bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/5 p-3 z-50"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {results.map((item: any) => {
                        const product = item.node;
                        return (
                          <Link
                            key={product.id}
                            href={`/products/${product.handle}`}
                            className="flex flex-col items-start gap-3 p-3 rounded-2xl hover:bg-[#f7fffd] transition"
                          >
                            <img
                              src={product.featuredImage?.url}
                              alt={product.title}
                              className="w-full h-[120px] rounded-xl object-cover"
                            />
                            <div>
                              <h4 className="font-medium text-sm">{product.title}</h4>
                              <p className="text-[#0d5c4d] text-sm mt-1">
                                ₹{Math.round(Number(product.priceRange.minVariantPrice.amount))}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0d5c4d] hover:text-white transition"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#00b894] text-white text-[11px] font-bold min-w-[20px] h-5 px-1 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMobileMenu((v) => !v)}
                className="xl:hidden w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-black/10 flex items-center justify-center bg-white/80"
              >
                {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN — completely outside the pill ── */}
        {mobileMenu && (
          <div
            ref={menuRef}
            className="xl:hidden mt-2 bg-white border border-black/5 rounded-[28px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
          >
            {/* Nav links */}
            <nav className="flex flex-col gap-5 text-[15px] font-medium mb-6">
              <Link href="/" onClick={() => setMobileMenu(false)}>Home</Link>
              <Link href="/" onClick={() => setMobileMenu(false)}>Food Products</Link>
              <Link href="/" onClick={() => setMobileMenu(false)}>Supplements</Link>
              <Link href="/" onClick={() => setMobileMenu(false)}>Wellness</Link>
              <Link href="/" onClick={() => setMobileMenu(false)}>Blogs</Link>
              <Link href="/contact-us" onClick={() => setMobileMenu(false)}>Contact</Link>
            </nav>

            {/* Mobile search */}
            <div className="relative">
              <div className="flex items-center bg-[#f7fffd] border border-black/5 rounded-full px-4 h-12">
                <Search className="w-4 h-4 text-black/40 mr-3" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-transparent outline-none w-full text-sm"
                />
              </div>
              {results.length > 0 && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-14 left-0 right-0 max-h-[320px] overflow-y-auto bg-white rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/5 p-3 z-50"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {results.map((item: any) => {
                      const product = item.node;
                      return (
                        <Link
                          key={product.id}
                          href={`/products/${product.handle}`}
                          onClick={() => setMobileMenu(false)}
                          className="flex flex-col items-start gap-2 p-3 rounded-2xl hover:bg-[#f7fffd] transition"
                        >
                          <img
                            src={product.featuredImage?.url}
                            alt={product.title}
                            className="w-full h-[90px] rounded-xl object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-sm">{product.title}</h4>
                            <p className="text-[#0d5c4d] text-sm mt-0.5">
                              ₹{Math.round(Number(product.priceRange.minVariantPrice.amount))}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}