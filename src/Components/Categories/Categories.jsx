import React, { useEffect, useState } from 'react';
import FeatureCart from '../FeatureCart/FeatureCart';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const categoryImages = {
        "electronics": "https://i.pinimg.com/736x/ee/ad/c6/eeadc638879bc71d2e8c885ec7fee7a2.jpg", // Replace with your image URL
        "jewelery": "https://i.pinimg.com/736x/68/56/f6/6856f69664c065ad73edf8a16c014ca7.jpg",
        "men's clothing": "https://i.pinimg.com/736x/53/52/d9/5352d99ba7a9dc5c274c7f8c68328b0b.jpg",
        "women's clothing": "https://i.pinimg.com/736x/64/f7/be/64f7be57373cfe1c09a342674a95493d.jpg",
    };

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            const categoriesWithImages = data.map(category => ({
                name: category,
                image: categoryImages[category] || 'https://via.placeholder.com/150' // Fallback image
            }));
            setCategories(categoriesWithImages);
        };
        fetchCategories();
    }, []);

    if (categories.length === 0) return <div className="text-center text-4xl mt-20">Loading...</div>;

    return (
        <FeatureCart cards={categories} />
    );
};

export default Categories;
