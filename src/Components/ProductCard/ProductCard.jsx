import React from 'react';
import { Link } from 'react-router-dom';
import './productCard.css';

const ProductCard = ({ products = [] }) => {
  return (
    <div className="row container-fluid p-2 m-0">
      {products.map((product) => {
        const { id, title, price, image } = product;
        return (
          <div className="col-md-6 col-lg-4 mb-4 objective-center" key={id}>
            <Link to={`/products/${id}`} className="card product-wap rounded-2 product-card text-decoration-none">
              <div className="product-img-container h-75">
                <img className="card-img img-fluid product-img" src={image} alt={title} />
                <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                  <ul className="list-unstyled">
                    <li><span className="btn btn-success text-white"><i className="far fa-heart"></i></span></li>
                    <li><span className="btn btn-success text-white mt-2" ><i className="far fa-eye"></i></span></li>
                    <li><span className="btn btn-success text-white mt-2" ><i className="fas fa-cart-plus"></i></span></li>
                  </ul>
                </div>
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <span className="h6 text-decoration-none text-truncate text-center">{title}</span>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                  </li>
                </ul>
                <p className="text-center mb-0">${price}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
