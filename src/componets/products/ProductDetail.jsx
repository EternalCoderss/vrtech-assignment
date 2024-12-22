import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";
import LoadingSpinner from "../common/LoadingSpinner";
import { getProductById } from "../../utils/api";
import { Product } from "../types/Product";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function loadProduct() {
      if (!id) return;

      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Error loading product:", error);
      }
      setLoading(false);
    }

    loadProduct();
  }, [id]);

  if (loading || !product) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product Image */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.title}
          </h1>

          {/* Rating and Category */}
          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <p className="ml-2 text-sm text-gray-500">
                {product.rating.rate} ({product.rating.count} reviews)
              </p>
            </div>
            <p className="ml-4 text-sm text-gray-500">
              Category: {product.category}
            </p>
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-500">{product.description}</p>

          {/* Price and Add to Cart */}
          <div className="mt-8 flex justify-between items-center">
            <p className="text-3xl font-bold text-gray-900">${product.price}</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
