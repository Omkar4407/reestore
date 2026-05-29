export const getProductsQuery = `
{
  collection(handle: "featured-products") {

    products(first: 8) {

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
                  
                  vendor

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

                  vendor

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

                vendor

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

                  vendor

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

                  vendor

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

export const getBlogsQuery = `
{
  blogs(first: 1) {

    edges {

      node {

        articles(first: 3) {

          edges {

            node {

              title
              handle
              excerpt

              image {
                url
              }

              blog {
                title
              }
            }
          }
        }
      }
    }
  }
}
`;

export const getBlogArticleQuery = `
query getArticle($handle: String!) {

  articles(first: 1, query: $handle) {

    edges {

      node {

        title
        handle
        contentHtml
        excerpt
        publishedAt

        image {
          url
        }

        blog {
          title
        }
      }
    }
  }
}
`;

export const getAllBlogsQuery = `
{
  blogs(first: 1) {

    edges {

      node {

        articles(first: 50) {

          edges {

            node {

              title
              handle
              excerpt
              publishedAt

              image {
                url
              }

              blog {
                title
              }
            }
          }
        }
      }
    }
  }
}
`;

export const getMainMenuQuery = `
query GetMainMenu {

  menu(handle: "main-menu") {

    items {

      title
      url
      type

      items {

        title
        url
        type

        items {

          title
          url
          type
        }
      }
    }
  }
}
`;


export const getCollectionQuery = `
query getCollection($handle: String!) {

  collection(handle: $handle) {

    id
    title
    description

    products(first: 100) {

      edges {

        node {

          id
          title
          handle

          vendor
          productType

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

          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }

          variants(first: 20) {

            edges {

              node {

                id
                title

                price {
                  amount
                  currencyCode
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


export const getAllProductsQuery = `
query getAllProducts {

  products(first: 250) {

    edges {

      node {

        id
        title
        handle

        vendor
        productType

        featuredImage {
          url
        }

        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }

        variants(first: 20) {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
`;