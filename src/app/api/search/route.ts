import { NextResponse } from "next/server";

import { shopifyFetch }
from "@/lib/shopify";

import {
  searchProductsQuery,
} from "@/lib/queries";

export async function GET(req: Request) {

  const { searchParams } =
    new URL(req.url);

  const query =
    searchParams.get("q");

  if (!query) {

    return NextResponse.json([]);
  }

  const res = await shopifyFetch({

    query: searchProductsQuery,

    variables: {
        query: `title:*${query}*`,    },
  });

  return NextResponse.json(

    res?.data?.products?.edges || []
  );
}