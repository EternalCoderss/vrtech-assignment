import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import LoadingSpinner from "../common/LoadingSpinner";
import { getAllProducts, getProductsByCategory } from "../../utils/api";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        const data = category
          ? await getProductsByCategory(category)
          : await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
      setLoading(false);
    }

    loadProducts();
  }, [category]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {category
          ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
          : "All Products"}
      </h1>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
