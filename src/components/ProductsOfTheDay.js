import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../redux/features/productSlice'; // Import your fetchAllProducts action
//import Products from 'path-to-Products-component'; // Import the Products component
import { Link } from 'react-router-dom';

const ProductsOfTheDay = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.productsReducer);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, []);

    const getRandomProducts = (count) => {
        // Shuffle the products array to get random products
        const shuffledProducts = [...products].sort(() => Math.random() - 0.5);
        // Return the first 'count' products
        return shuffledProducts.slice(0, count);
    };

    const randomProducts = getRandomProducts(3);

    return (
        <div className="px-10 py-6 mt-[70px]">
            {loading ? (
                <div className="flex items-center justify-center h-[70vh]">Loading...</div>
            ) : (
                <div className="grid grid-cols-3 gap-6">
                    {randomProducts.map((product) => (
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <div className="max-w-xs rounded-lg overflow-hidden shadow-md hover:shadow-lg">
                                <img src={product.productImageLink} alt={product.name} className="w-full h-64 object-cover" />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                    <p className="text-gray-700">{product.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductsOfTheDay;