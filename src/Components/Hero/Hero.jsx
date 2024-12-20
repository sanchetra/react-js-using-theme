import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data.slice(0, 3)); // Limit to 3 products for the hero carousel
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div id="template-mo-zay-hero-carousel" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators">
        {products.map((_, index) => (
          <li
            key={index}
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {products.map((product, index) => (
          <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
            key={product.id}
          >
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last text-center">
                  <Link to={`/products/${product.id}`}>
                    <img
                      className="img-fluid banner-img"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success">{product.title}</h1>
                    <h3 className="h2">{product.category}</h3>
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i className="fas fa-chevron-left"></i>
      </a>
      <a
        className="carousel-control-next text-decoration-none w-auto pe-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Hero;
