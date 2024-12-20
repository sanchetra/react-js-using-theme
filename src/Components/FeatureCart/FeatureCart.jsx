import React from 'react';
import { Link } from 'react-router-dom';
import './featureCart.css';

const FeatureCart = ({ cards = [1, 2, 3] }) => {
    return (
        <div>
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Categories of The Month</h1>
                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="row">
                    {cards?.map((card, index) => {
                        return (
                            <Link to={`/products?category=${card.name}`} className="cate-container col-12 col-md-4 col-lg-3 p-5 mt-3 .flex-column justify-content-between " key={index}>
                                <div href="#" className='h-75'>
                                    <img
                                        src={card.image}
                                        alt={card.name}
                                        className="w-full rounded-circle img-fluid border centered-image mb-sm-5 cate-img"
                                    />
                                </div>
                                <h5 className="text-center mb-3 text-cate">{card.name || 'Example card'}</h5>
                                <p className="text-center">
                                    <span className="btn btn-success go-shop-btn">Go Shop</span>
                                </p>
                            </Link>
                        )
                    }
                    )}
                </div>
            </section>
        </div>
    );
};

export default FeatureCart;
