import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'

const CategoryProducts = () => {
  const { name } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
      const data = await response.json()
      console.log(data);
      setProducts(data)
    }
    fetchProducts()
  }, [])

  if (products.length === 0) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-center mt-2">{name}</h1>
      <ProductCard products={products}/>
    </div>
    
  )
}

export default CategoryProducts