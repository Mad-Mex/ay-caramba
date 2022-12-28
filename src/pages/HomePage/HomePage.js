import React from 'react'
import { CategoryCard } from '../../components/Card/CategoryCard/CategoryCard'
import { NewProductContainer } from '../../components/NewProduct/NewProductContainer/NewProductContainer'
import { Newsletter } from '../../components/Newsletter/Newsletter'
import { Slider } from '../../components/Slider/Slider'

import "./HomePage.css"

export const HomePage = () => {

  return (

    <div>

      {/*Slider Section */}
      <section>
        <Slider />
      </section>

      {/* Category Section  */}      
      <section className='flex mt-32 mb-12 ml-64'>
        <CategoryCard
          image= "/images/seiya_2.jpg"
          title= "Figuras"
          url= "/categoria/figuras"
        />
        <CategoryCard
          image= "/images/guerra_civil.jpg"
          title= "Cuadros"
          url= "/categoria/cuadros"
        />
      </section>


      { /* New Product */ }
      <section>
        <NewProductContainer />
      </section>


      { /*Newsletter Section*/ }
      <section>
        <Newsletter />
      </section>


    </div>
  )
}

