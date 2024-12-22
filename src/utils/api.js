export async function getAllProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getProductsByCategory(category) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products by category');
  }
  const data = await response.json();
  console.log(data);
  return data;
} 