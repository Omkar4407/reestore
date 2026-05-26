"use client";

import Link from "next/link";
import Image from "next/image";

import {
  ShoppingBag,
  Search,
  Menu,
  X,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { useCartStore } from "@/store/cart-store";

export default function Navbar() {

  const {
    openCart,
    items,
  } = useCartStore();

  const totalItems =
    items.reduce(
      (acc, item) =>
        acc + item.quantity,
      0
    );

  const [search, setSearch] =
    useState("");

  const [results, setResults] =
    useState<any[]>([]);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const menuRef =
    useRef<HTMLDivElement>(null);

  const handleSearch = async (
    value: string
  ) => {

    setSearch(value);

    if (!value.trim()) {

      setResults([]);
      return;
    }

    try {

      const res = await fetch(
        `/api/search?q=${value}`
      );

      const data =
        await res.json();

      setResults(data);

    } catch (error) {

      console.error(error);
    }
  };

  useEffect(() => {

    const close = () =>
      setResults([]);

    window.addEventListener(
      "click",
      close
    );

    return () =>
      window.removeEventListener(
        "click",
        close
      );
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-[1750px] mx-auto px-3 sm:px-6 py-3 sm:py-5">

        {/* NAVBAR */}
        <div
          className="
            bg-white/75
            backdrop-blur-2xl
            border
            border-black/5
            rounded-full
            px-5
            sm:px-7
            py-3
            sm:py-4
            shadow-[0_10px_30px_rgba(0,0,0,0.04)]
          "
        >

          <div className="flex items-center justify-between gap-3">

            {/* LOGO */}
            <Link
              href="/"
              className="
  relative
  w-[130px]
  h-[40px]
  sm:w-[150px]
  sm:h-[46px]
  md:w-[170px]
  md:h-[52px]
  shrink-0
  z-10
"
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

            {/* DESKTOP NAV */}
            <nav
  className="
    hidden
    xl:flex
    items-center
    flex-1
    mx-5
    gap-5
    2xl:gap-7
    text-[13px]
    2xl:text-sm
    font-medium
    whitespace-nowrap
    min-w-0
  "
>

              <Link
                href="/store"
                className="ml-auto hover:text-[var(--forest-dark)] transition"
              >

                Home
              </Link>

              <Link
                href="/"
                className="ml-auto hover:text-[var(--forest-dark)] transition"
              >

                Food Products
              </Link>

              <Link
                href="/"
                className="ml-auto hover:text-[var(--forest-dark)] transition"
              >

                Supplements & Nutraceuticals
              </Link>

              <Link
                href="/"
                className="ml-auto hover:text-[var(--forest-dark)] transition"
              >

                Gadgets
              </Link>

              <Link
                href="/about-us"
                className="ml-auto hover:text-[var(--forest-dark)] transition"
              >

                About Us
              </Link>

              <Link
                href="/quality-compliance"
                className="ml-auto hover:text-[var(--forest-dark)] transition"
              >

                Quality & Compliance
              </Link>
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* DESKTOP SEARCH */}
              <div className="relative hidden xl:block">

                <div
                  className="
                    flex
                    items-center
                    bg-[#f7fffd]
                    border
                    border-black/5
                    rounded-full
                    px-4
                    h-12
                    w-[220px]
                    2xl:w-[260px]
                  "
                >

                  <Search className="w-4 h-4 text-black/40 mr-3 shrink-0" />

                  <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={(e) =>
                      handleSearch(
                        e.target.value
                      )
                    }
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                    className="
                      bg-transparent
                      outline-none
                      w-full
                      text-sm
                    "
                  />
                </div>

                {/* SEARCH RESULTS */}
                {results.length > 0 && (

                  <div
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                    className="
  absolute
  top-14
  left-0
  right-0
  xl:left-auto
  xl:right-0
  xl:w-[420px]
  max-w-[calc(100vw-32px)]
                      max-h-[420px]
                      overflow-y-auto
                      bg-white
                      rounded-[28px]
                      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                      border
                      border-black/5
                      p-3
                      z-50
                    "
                  >

<div className="flex flex-col gap-2 min-w-0">
                      {results.map(
                        (item: any) => {

                          const product =
                            item.node;

                          return (

                            <Link
                              href={`/products/${product.handle}`}
                              key={product.id}
                              onClick={() => {
                                setResults([]);
                                setSearch("");
                                setMobileMenu(false);
                              }}
                              className="
                                flex
                                items-start
                                gap-3
                                p-3
                                rounded-2xl
                                hover:bg-[var(--sage)]
                                transition
                              "
                            >

                              {/* IMAGE */}
<div
  className="
    relative
    w-20
    h-20
    rounded-2xl
    overflow-hidden
    bg-[var(--sage)]
    shrink-0
  "
>

  {product.featuredImage?.url ? (

    <Image
      src={product.featuredImage.url}
      alt={product.title}
      fill
      unoptimized
      className="object-contain p-2"
    />

  ) : (

    <div
      className="
        w-full
        h-full
        flex
        items-center
        justify-center
        text-xs
        text-black/30
      "
    >

      No Image
    </div>
  )}
</div>

                              {/* CONTENT */}
                              <div className="min-w-0 flex-1">

                              <h4
  className="
  text-sm
  font-semibold
  leading-6
  text-black
  line-clamp-2
  break-words
  overflow-hidden
"
                                >

                                  {product.title}
                                </h4>

                                <p
                                  className="
                                    mt-2
                                    text-[var(--forest)]
                                    font-semibold
                                  "
                                >

                                  ₹
                                  {Math.round(
                                    Number(
                                      product
                                        .priceRange
                                        ?.minVariantPrice
                                        ?.amount || 0
                                    )
                                  )}
                                </p>
                              </div>
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* CART */}
              <button
                onClick={openCart}
                className="
                  relative
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-full
                  border
                  border-black/10
                  flex
                  items-center
                  justify-center
                  hover:bg-[var(--forest-dark)]
                  hover:text-white
                  transition
                "
              >

                <ShoppingBag className="w-5 h-5" />

                {totalItems > 0 && (

                  <span
                    className="
                      absolute
                      -top-1
                      -right-1
                      bg-[var(--mint-dark)]
                      text-white
                      text-[11px]
                      font-bold
                      min-w-[20px]
                      h-5
                      px-1
                      rounded-full
                      flex
                      items-center
                      justify-center
                    "
                  >

                    {totalItems}
                  </span>
                )}
              </button>

              {/* MOBILE MENU */}
              <button
                onClick={() =>
                  setMobileMenu(
                    (v) => !v
                  )
                }
                className="
                  xl:hidden
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-full
                  border
                  border-black/10
                  flex
                  items-center
                  justify-center
                  bg-white/80
                "
              >

                {mobileMenu ? (

                  <X className="w-5 h-5" />

                ) : (

                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (

          <div
            ref={menuRef}
            className="
              xl:hidden
              mt-2
              bg-white
              border
              border-black/5
              rounded-[28px]
              p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
          >

            {/* MOBILE LINKS */}
            <nav className="flex flex-col gap-5 text-[15px] font-medium mb-6">

              <Link href="/" onClick={() => setMobileMenu(false)}>Home</Link>

              <Link href="/" onClick={() => setMobileMenu(false)}>Food Products</Link>

              <Link href="/" onClick={() => setMobileMenu(false)}>Supplements</Link>

              <Link href="/" onClick={() => setMobileMenu(false)}>Wellness</Link>

              <Link href="/" onClick={() => setMobileMenu(false)}>Blogs</Link>

              <Link href="/contact-us" onClick={() => setMobileMenu(false)}>Contact</Link>
            </nav>

            {/* MOBILE SEARCH */}
            <div className="relative">

              <div
                className="
                  flex
                  items-center
                  bg-[#f7fffd]
                  border
                  border-black/5
                  rounded-full
                  px-4
                  h-12
                "
              >

                <Search className="w-4 h-4 text-black/40 mr-3 shrink-0" />

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) =>
                    handleSearch(
                      e.target.value
                    )
                  }
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-sm
                  "
                />
              </div>

              {/* MOBILE RESULTS */}
              {results.length > 0 && (

                <div
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                  className="
                    absolute
                    top-14
                    left-0
                    right-0
                    max-h-[360px]
                    overflow-y-auto
                    bg-white
                    rounded-[24px]
                    shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    border
                    border-black/5
                    p-3
                    z-50
                  "
                >

                  <div className="flex flex-col gap-2">

                    {results.map(
                      (item: any) => {

                        const product =
                          item.node;

                        return (

                          <Link
                            key={product.id}
                            href={`/products/${product.handle}`}
                            onClick={() => {
                              setResults([]);
                              setSearch("");
                              setMobileMenu(false);
                            }}
                            className="
                              flex
                              items-start
                              gap-3
                              p-3
                              rounded-2xl
                              hover:bg-[var(--sage)]
                              transition
                            "
                          >

                            {/* IMAGE */}
<div
  className="
    relative
    w-20
    h-20
    rounded-2xl
    overflow-hidden
    bg-[var(--sage)]
    shrink-0
  "
>

  {product.featuredImage?.url ? (

    <Image
      src={product.featuredImage.url}
      alt={product.title}
      fill
      unoptimized
      className="object-contain p-2"
    />

  ) : (

    <div
      className="
        w-full
        h-full
        flex
        items-center
        justify-center
        text-xs
        text-black/30
      "
    >

      No Image
    </div>
  )}
</div>

                            {/* CONTENT */}
                            <div className="min-w-0 flex-1">

                              <h4
                                className="
                                  text-sm
                                  font-semibold
                                  leading-6
                                  text-black
                                  line-clamp-2
                                  overflow-hidden
                                "
                              >

                                {product.title}
                              </h4>

                              <p
                                className="
                                  mt-2
                                  text-[var(--forest)]
                                  font-semibold
                                "
                              >

                                ₹
                                {Math.round(
                                  Number(
                                    product
                                      .priceRange
                                      ?.minVariantPrice
                                      ?.amount || 0
                                  )
                                )}
                              </p>
                            </div>
                          </Link>
                        );
                      }
                    )}
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