import React, { useState } from 'react';
import axios from 'axios';

const ProductSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true);
        setError(null); 

        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${searchTerm}`);
            setProduct(response.data);
        } catch (error) {
            setError('Product not found.'); 
            console.error("Error fetching product:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Search for a Product by ID</h2>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Enter product ID"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>} 

            {product && (
                <div>
                    <h3>Product Details</h3>
                    <p>ID: {product.id}</p>
                    <p>Title: {product.title}</p>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    
                </div>
            )}
        </div>
    );
};

export default ProductSearch;