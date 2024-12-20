import React, { useContext, useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import './product.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartContext } from '../Cart/CartContext';


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };

    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProduct();
    fetchProducts();
  }, [id]);

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find((item) => item.id === product.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        'cart',
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    addToCart(product);
    // alert('Product added to cart');
    if (redirect) {
      Navigate('/cart');
    }
  };

  // Slick Carousel Settings
  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Product Details */}
      <section className="bg-light">
        <div className="container pb-5">
          <div className="row">
            <div className="col-lg-5 mt-5 d-flex justify-content-center">
              <div className="card mb-0">
                <img className="card-img img-fluid img-detail" src={product?.image} alt="Card image cap" id="product-detail" />
              </div>
            </div>

            <div className="col-lg-7 mt-5">
              <div className="card h-100">
                <div className="card-body ">
                  <h1 className="h2 ">{product?.title}</h1>
                  <p className="h3 py-2">${product?.price}</p>
                  <p className="py-2">
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-warning"></i>
                    <i className="fa fa-star text-secondary"></i>
                    <span className="list-inline-item text-dark">&nbsp; Rating 4.8 | 36 Comments</span>
                  </p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Brand:</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>Easy Wear</strong></p>
                    </li>
                  </ul>

                  <h6>Description:</h6>
                  <p className="description-text">{product?.description}</p>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <h6>Avaliable Color :</h6>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted"><strong>White / Black</strong></p>
                    </li>
                  </ul>

                  <h6>Specification:</h6>
                  <ul className="specification-text list-unstyled pb-3">
                    <li>Lorem ipsum dolor sit</li>
                    <li>Amet, consectetur</li>
                    <li>Adipiscing elit,set</li>
                    <li>Duis aute irure</li>
                    <li>Ut enim ad minim</li>
                    <li>Dolore magna aliqua</li>
                    <li>Excepteur sint</li>
                  </ul>

                  <form action="" method="GET">
                    <input type="hidden" name="product-title" value="Activewear" />
                    <div className="row">
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item">Size :
                            <input type="hidden" name="product-size" id="product-size" value="S" />
                          </li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">S</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">M</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">L</span></li>
                          <li className="list-inline-item"><span className="btn btn-success btn-size">XL</span></li>
                        </ul>
                      </div>
                      <div className="col-auto">
                        <ul className="list-inline pb-3">
                          <li className="list-inline-item text-right">
                            Quantity
                            <input type="hidden" name="product-quanity" id="product-quanity" value="1" />
                          </li>
                          <li className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                          <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">1</span></li>
                          <li className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                        </ul>
                      </div>
                    </div>
                    <div className="row pb-3">
                      <div className="col d-grid">
                        <button type="submit" className=" btn-lg buy-btn" name="submit" value="buy" onClick={() => handleCart(product, true)}>Buy</button>
                      </div>
                      <div className="col d-grid">
                        <button type="submit" className="btn-lg buy-btn" name="submit" value="addtocard" onClick={() => handleCart(product)}>Add To Cart</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Carousel */}
      <section className="py-5">
        <div className="container">
          <h4>Related Products</h4>
          <Slider {...settings}>
            {products
              .filter((item) => item.id !== parseInt(id))
              .map((item) => (
                <div key={item.id} className="p-2 pb-3">
                  <div className="product-wap card rounded-2 product-card text-decoration-none">
                    <Link to={`/products/${item.id}`} className="product-img-container h-75">
                      <img
                        className="card-img rounded-0 img-fluid product-im"
                        src={item.image}
                        alt={item.title}
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li><span className="btn btn-success text-white"><i className="far fa-heart"></i></span></li>
                          <li><span className="btn btn-success text-white mt-2" ><i className="far fa-eye"></i></span></li>
                          <li><span className="btn btn-success text-white mt-2" ><i className="fas fa-cart-plus"></i></span></li>
                        </ul>
                      </div>
                    </Link>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <a
                        href={`/product/${item.id}`}
                        className="h3 text-decoration-none text-truncate"
                      >
                        {item.title}
                      </a>
                      <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                          <i className="text-warning fa fa-star"></i>
                          <i className="text-warning fa fa-star"></i>
                          <i className="text-warning fa fa-star"></i>
                          <i className="text-muted fa fa-star"></i>
                          <i className="text-muted fa fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-center mb-0">${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Product;
