import React from 'react';
import { Link } from 'react-router-dom';
import './homeProducts.css'

const HomeProducts = ({ products = [] }) => {
  return (
    <section className="bg-light">
      <div className="container py-5">
        <div className="row">
          {products.map((product) => {
            const { id, title, price, image, description } = product;
            return (
              <div className="col-12 col-md-6 col-lg-4 mb-4" key={id}>
                <div className="card h-100">
                  <Link to={`/products/${id}`} className="product-image">
                    <img src={image} className="pro-img card-img-top" alt={title} />
                  </Link>
                  <div className="card-body">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-warning fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                        <i className="text-muted fa fa-star"></i>
                      </li>
                      <li className="text-muted text-right">${price}</li>
                    </ul>
                    <Link to={`/products/${id}`} className="product-title h2 text-decoration-none text-dark mb-5">
                      {title}
                    </Link>
                    <p className="card-text">{description}</p>
                    <p className="text-muted">Reviews (24)</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
