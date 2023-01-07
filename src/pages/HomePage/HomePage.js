import React from 'react'
import { CategoryCard } from '../../components/Card/CategoryCard/CategoryCard'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { NewProductCardContainer } from '../../components/NewProduct/NewProductCardContainer/NewProductCardContainer'


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
      <section className='flex mt-32 mb-12 ml-[18rem]'>
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
        <NewProductCardContainer />
      </section>


      { /*ContactForm Section*/ }
      <section>
        <ContactForm />
      </section>


    </div>
  )
}

