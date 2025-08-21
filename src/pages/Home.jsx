import React from 'react'
import HeroSection from '../components/HeroSection'
import FeaturedProperties from '../components/FeaturedProperties'
import PropertyCategories from '../components/PropertyCategories'

import LocationCards from '../components/LocationCards'

export default function Home () {

  return (
    <>
            <HeroSection/>
    <PropertyCategories/>
    <LocationCards/>
        <FeaturedProperties/>
    </>
  )
}
