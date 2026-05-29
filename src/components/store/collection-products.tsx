"use client";

import { useMemo, useState } from "react";
import ProductCard from "./product-card";

export default function CollectionProducts({
  products,
}: {
  products: any[];
}) {

  const [sortBy, setSortBy] =
    useState("default");

  const [selectedVendor, setSelectedVendor] =
    useState("all");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const vendors = useMemo(() => {

    return [
      ...new Set(
        products
          .map(
            (p) => p.node.vendor
          )
          .filter(Boolean)
      ),
    ];

  }, [products]);

  const categories = useMemo(() => {

    return [
      ...new Set(
        products
          .map(
            (p) =>
              p.node.productType
          )
          .filter(Boolean)
      ),
    ];

  }, [products]);

  const filteredProducts =
    useMemo(() => {

      let data = [...products];

      if (
        selectedVendor !== "all"
      ) {

        data = data.filter(
          (p) =>
            p.node.vendor ===
            selectedVendor
        );
      }

      if (
        selectedCategory !==
        "all"
      ) {

        data = data.filter(
          (p) =>
            p.node.productType ===
            selectedCategory
        );
      }

      if (
        sortBy === "low-high"
      ) {

        data.sort(
          (a, b) =>
            Number(
              a.node.priceRange
                .minVariantPrice
                .amount
            ) -
            Number(
              b.node.priceRange
                .minVariantPrice
                .amount
            )
        );
      }

      if (
        sortBy === "high-low"
      ) {

        data.sort(
          (a, b) =>
            Number(
              b.node.priceRange
                .minVariantPrice
                .amount
            ) -
            Number(
              a.node.priceRange
                .minVariantPrice
                .amount
            )
        );
      }

      return data;

    }, [
      products,
      sortBy,
      selectedVendor,
      selectedCategory,
    ]);

  return (

    <>
      {/* FILTER BAR */}

      <div
        className="
          flex
          flex-wrap
          gap-4
          mb-10
          mt-12
        "
      >

        {/* SORT */}

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value
            )
          }
          className="
            h-12
            px-4
            rounded-full
            border
          "
        >
          <option value="default">
            Sort
          </option>

          <option value="low-high">
            Price: Low → High
          </option>

          <option value="high-low">
            Price: High → Low
          </option>
        </select>

        {/* BRAND */}

        <select
          value={selectedVendor}
          onChange={(e) =>
            setSelectedVendor(
              e.target.value
            )
          }
          className="
            h-12
            px-4
            rounded-full
            border
          "
        >

          <option value="all">
            All Brands
          </option>

          {vendors.map(
            (vendor) => (

              <option
                key={vendor}
                value={vendor}
              >
                {vendor}
              </option>
            )
          )}
        </select>

        {/* CATEGORY */}

        <select
          value={
            selectedCategory
          }
          onChange={(e) =>
            setSelectedCategory(
              e.target.value
            )
          }
          className="
            h-12
            px-4
            rounded-full
            border
          "
        >

          <option value="all">
            All Categories
          </option>

          {categories.map(
            (category) => (

              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            )
          )}
        </select>
      </div>

      {/* PRODUCTS */}

      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-3
          md:gap-5
        "
      >

        {filteredProducts.map(
          ({ node }) => (

            <ProductCard
              key={node.id}
              item={node}
            />
          )
        )}
      </div>
    </>
  );
}