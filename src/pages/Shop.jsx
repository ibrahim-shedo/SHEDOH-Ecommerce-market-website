import React from 'react'
import { Hero } from '../components/Hero/Hero';
import { Popular } from '../components/Popular/Popular';
import Offers from '../components/Offers/Offers';
import NewCollection from '../components/NewCollection/NewCollection';
import NewsLatter from '../components/NewsLatter/NewsLatter';

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLatter/>
    </div>
  )
}
export default Shop;
