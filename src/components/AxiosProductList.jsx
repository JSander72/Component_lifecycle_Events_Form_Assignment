import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AxiosProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const productNames = response.data.map(product => product.title);
                setProducts(productNames);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
            
        </div>
    );
};

export default AxiosProductList;
