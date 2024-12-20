import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import HomeProducts from '../HomeProducts/HomeProducts'

const FeatureProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=3')
            const data = await response.json()
            console.log(data);
            setProducts(data)
        }
        fetchProducts()
    }, [])
    return (
        <section className="bg-light">
            <div className="container py-5">
                <div className="row text-center py-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Featured Product</h1>
                        <p>
                            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </div>
                </div>
                {
                    products.length > 0 ?
                        <HomeProducts products={products} />
                        :
                        <div className="d-flex justify-content-center">Loading...</div>
                }
            </div>
        </section>
    )
}

export default FeatureProducts