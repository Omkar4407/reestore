import {
    createCartMutation,
    addToCartMutation,
    getCartQuery,
    updateCartLinesMutation,
    getMainMenuQuery,
    removeCartLinesMutation,
    getCollectionQuery,
    getAllProductsQuery,
  } from "./queries";

  const domain =
    process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
  
  const token =
    process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;
  
  const apiVersion =
    process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION!;
  
  const endpoint =
    `https://${domain}/api/${apiVersion}/graphql.json`;
  
  export async function shopifyFetch({
    query,
    variables = {},
  }: {
    query: string;
    variables?: Record<string, any>;
  }) {
  
    const response = await fetch(endpoint, {
  
      method: "POST",
  
      headers: {
        "Content-Type": "application/json",
  
        "X-Shopify-Storefront-Access-Token":
          token,
      },
  
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  
    return response.json();
  }
  
  export async function createCart() {
  
    const res = await shopifyFetch({
      query: createCartMutation,
    });
  
    return res.data.cartCreate.cart;
  }
  
  export async function addToCart({
    cartId,
    merchandiseId,
    quantity,
  }: {
    cartId: string;
  
    merchandiseId: string;
  
    quantity: number;
  }) {
  
    const res = await shopifyFetch({
  
      query: addToCartMutation,
  
      variables: {
        cartId,
        merchandiseId,
        quantity,
      },
    });
  
    return res.data.cartLinesAdd.cart;
  }
  export async function getCart(
    cartId: string
  ) {
  
    const res = await shopifyFetch({
  
      query: getCartQuery,
  
      variables: {
        cartId,
      },
    });
  
    return res.data.cart;
  }
  export async function updateCartLine({
    cartId,
    lineId,
    quantity,
  }: {
    cartId: string;
  
    lineId: string;
  
    quantity: number;
  }) {
  
    const res = await shopifyFetch({
  
      query: updateCartLinesMutation,
  
      variables: {
        cartId,
        lineId,
        quantity,
      },
    });
  
    return res.data.cartLinesUpdate.cart;
  }
  
  export async function removeCartLine({
    cartId,
    lineId,
  }: {
    cartId: string;
  
    lineId: string;
  }) {
  
    const res = await shopifyFetch({
  
      query: removeCartLinesMutation,
  
      variables: {
        cartId,
        lineId,
      },
    });
  
    return res.data.cartLinesRemove.cart;
  }


export async function getMainMenu() {

  const res = await shopifyFetch({
    query: getMainMenuQuery,
  });

  return res?.data?.menu?.items || [];
}


export async function getCollection(
  handle: string
) {

  const res = await shopifyFetch({

    query: getCollectionQuery,

    variables: {
      handle,
    },
  });

  return res.data.collection;
}

export async function getAllProducts() {

  const res = await shopifyFetch({
    query: getAllProductsQuery,
  });

  return res.data.products.edges;
}