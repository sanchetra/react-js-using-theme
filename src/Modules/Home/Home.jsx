import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Categories from '../../Components/Categories/Categories'
import FeatureProducts from '../../Components/FeatureProducts/FeatureProducts'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/>
      <FeatureProducts/>
    </div>
  )
}

export default Home