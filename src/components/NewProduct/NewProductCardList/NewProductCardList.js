import React from 'react'
import { NewProductCard } from '../NewProductCard/NewProductCard'
import { dataProduct } from '../../../database/data.Product'

export const NewProductCardList = () => {
  return (

    <div>
        <div className='flex justify-between mb-20'>
            { dataProduct.map((figure, index) => (
                <NewProductCard
                figure={ figure }
                index={ index }    
                />
            ))}  
        </div>
    </div>
  )
}
