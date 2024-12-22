import ProductCard from "./ProductCard";
import { mockProducts } from "../../mockData";

export default function ProductsList() {
    const filteredProducts = mockProducts; // Directly use mock data

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">All Products</h1>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
} 