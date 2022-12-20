import React from 'react'
import { CategoryCard } from '../../components/Card/CategoryCard/CategoryCard'
import { Newsletter } from '../../components/Newsletter/Newsletter'

import "./HomePage.css"

export const HomePage = () => {

  return (

    <div>

      {/* Category Section  */}      
      <section className='flex mt-32 mb-12 ml-64'>
        <CategoryCard
          image= "/images/seiya_2.jpg"
          title= "Figuras"
        />
        <CategoryCard
          image= "/images/guerra_civil.jpg"
          title= "Cuadros"
        />
      </section>


      { /*Newsletter Section*/ }
      <section>
        <Newsletter />
      </section>


    </div>
  )
}

