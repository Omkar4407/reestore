export const getProductsQuery = `
{
  collection(handle: "featured-products") {

    products(first: 6) {

      edges {

        node {

          id

          title

          handle

          featuredImage {
            url
          }

          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }

          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
}
`;

export const getProductQuery = `
query getProduct($handle: String!) {

  product(handle: $handle) {

    id
    title
    handle

    description
    descriptionHtml

    featuredImage {
      url
    }

    images(first: 20) {

      edges {

        node {
          url
        }
      }
    }

    variants(first: 20) {

      edges {

        node {

          id

          title

          availableForSale

          price {

            amount
            currencyCode
          }

          compareAtPrice {
            amount
          }
        }
      }
    }

    tags

    seo {

      title
      description
    }
  }
}
`;

export const createCartMutation = `
mutation cartCreate {

  cartCreate {

    cart {

      id

      checkoutUrl

      totalQuantity

      lines(first: 20) {

        edges {

          node {

            id

            quantity

            merchandise {

              ... on ProductVariant {

                id

                title

                product {

                  title

                  featuredImage {
                    url
                  }
                }

                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const addToCartMutation = `
mutation addToCart(
  $cartId: ID!,
  $merchandiseId: ID!,
  $quantity: Int!
) {

  cartLinesAdd(

    cartId: $cartId,

    lines: [
      {
        merchandiseId: $merchandiseId,
        quantity: $quantity
      }
    ]
  ) {

    cart {

      id

      checkoutUrl

      totalQuantity

      lines(first: 20) {

        edges {

          node {

            id

            quantity

            merchandise {

              ... on ProductVariant {

                id

                title

                product {

                  title

                  featuredImage {
                    url
                  }
                }

                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const getCartQuery = `
query getCart($cartId: ID!) {

  cart(id: $cartId) {

    id

    checkoutUrl

    totalQuantity

    lines(first: 20) {

      edges {

        node {

          id

          quantity

          merchandise {

            ... on ProductVariant {

              id

              title

              product {

                title

                featuredImage {
                  url
                }
              }

              price {
                amount
              }
            }
          }
        }
      }
    }
  }
}
`;

export const updateCartLinesMutation = `
mutation updateCartLines(
  $cartId: ID!,
  $lineId: ID!,
  $quantity: Int!
) {

  cartLinesUpdate(

    cartId: $cartId,

    lines: [
      {
        id: $lineId,
        quantity: $quantity
      }
    ]
  ) {

    cart {

      id

      checkoutUrl

      totalQuantity

      lines(first: 20) {

        edges {

          node {

            id

            quantity

            merchandise {

              ... on ProductVariant {

                id

                title

                product {

                  title

                  featuredImage {
                    url
                  }
                }

                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const removeCartLinesMutation = `
mutation removeCartLines(
  $cartId: ID!,
  $lineId: ID!
) {

  cartLinesRemove(

    cartId: $cartId,

    lineIds: [$lineId]
  ) {

    cart {

      id

      checkoutUrl

      totalQuantity

      lines(first: 20) {

        edges {

          node {

            id

            quantity

            merchandise {

              ... on ProductVariant {

                id

                title

                product {

                  title

                  featuredImage {
                    url
                  }
                }

                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const searchProductsQuery = `
query searchProducts($query: String!) {

  products(
    first: 20,
    query: $query
  ) {

    edges {

      node {

        id

        title

        handle

        featuredImage {
          url
        }

        priceRange {

          minVariantPrice {

            amount
          }
        }
      }
    }
  }
}
`;