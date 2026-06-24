/* Create an interface called Product with these fields:
    id (string),
    name (string),
    price (number),
    and inStock (boolean). */

interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

/* Create a type called Category that can only be one of:
    'electronics',
    'books',
    or 'clothing'. */

type Category = "electronics" | "books" | "clothing";

/* Write a function called describeProduct that takes a Product and returns a string like "Laptop costs $999".
Make sure the parameter and the return value are both typed. */

const describeProduct = (product: Product): string => {
  return `${product.name} costs $${product.price}`;
};
