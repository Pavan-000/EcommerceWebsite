import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers.js'
import NewCollections from '../components/NewCollections/NewCollections.js'
import Newsletter from '../components/Newsletter/Newsletter.js'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  )
}

export default Shop