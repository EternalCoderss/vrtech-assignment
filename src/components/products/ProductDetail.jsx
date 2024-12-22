import { Star } from "lucide-react";
import { mockProducts } from "../../mockData";

export default function ProductDetail() {
    const product = mockProducts[0]; // Use the first product for display

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:max-w-lg lg:self-end">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {product.title}
                    </h1>
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
                    <p className="mt-6 text-gray-500">{product.description}</p>
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