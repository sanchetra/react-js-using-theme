import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';
import './products.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Featured');
  const [searchParams] = useSearchParams(); // Hook to access query parameters

  useEffect(() => {
    // Fetch all products
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    // Fetch categories
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(['All', ...data]); // Add "All" for showing all products
    };

    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    // Apply category filter based on query parameter
    const category = searchParams.get('category') || 'All'; // Default to 'All'
    filterByCategory(category);
  }, [products, searchParams]);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const sortProducts = (option) => {
    setSortOption(option);
    const sorted = [...filteredProducts];
    if (option === 'A to Z') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (option === 'Z to A') {
      sorted.sort((a, b) => b.title.localeCompare(a.title));
    } else if (option === 'Price: Low to High') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'Price: High to Low') {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(sorted);
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-3">
            <h1 className="h2 pb-4">Categories</h1>
            <ul className="list-unstyled templatemo-accordion">
              {categories.map((category) => (
                <li key={category} className="pb-3">
                  <a
                    className={`d-flex justify-content-between h3 text-decoration-none ${activeCategory === category ? 'text-primary' : 'text-dark'
                      }`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      filterByCategory(category);
                    }}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-9">
            <div className="row">
              <div className="col-md-6">
                <h2 className="h3 text-dark">
                  {activeCategory === 'All'
                    ? 'All Products'
                    : `Products in "${activeCategory}"`}
                </h2>
              </div>
              <div className="col-md-6 pb-4">
                <div className="d-flex">
                  <select
                    className="form-control"
                    value={sortOption}
                    onChange={(e) => sortProducts(e.target.value)}
                  >
                    <option>Featured</option>
                    <option>A to Z</option>
                    <option>Z to A</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row">
              {filteredProducts.length > 0 ? (
                <ProductCard products={filteredProducts} />
              ) : (
                <div>Loading...</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="bg-light py-5">
        <div className="container my-4">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Our Brands</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="col-lg-9 m-auto tempaltemo-carousel">
              <div className="row d-flex flex-row">

                <div className="col-1 align-self-center">
                  <a className="h1" href="#multi-item-example" role="button" data-bs-slide="prev">
                    <i className="text-light fas fa-chevron-left"></i>
                  </a>
                </div>
                <div className="col">
                  <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="multi-item-example" data-bs-ride="carousel">

                    <div className="carousel-inner product-links-wap" role="listbox">
                      <div className="carousel-item active">
                        <div className="row">
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="src/assets/img/brand_01.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="src/assets/img/brand_02.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="src/assets/img/brand_03.png" alt="Brand Logo" /></a>
                          </div>
                          <div className="col-3 p-md-5">
                            <a href="#"><img className="img-fluid brand-img" src="src/assets/img/brand_04.png" alt="Brand Logo" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-1 align-self-center">
                  <a className="h1 next-btn" href="#multi-item-example" role="button" data-bs-slide="next">
                    <i className="text-light fas fa-chevron-right"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
