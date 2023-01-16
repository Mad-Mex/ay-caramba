import React from 'react'
import { Loader } from '../../Loader/Loader'
import { PictureCard } from '../PictureCard/PictureCard'

export const PictureListHome = ({ loading, pictureHome }) => {

  return (

    <div className='flex flex-wrap justify-center w-full'>

        { loading ? <Loader /> : 

            pictureHome.map( picture => {

                return(
                    <PictureCard 
                        key={ picture.id }
                        picture={ picture }
                    />
                )
            })
        }
        
    </div>
  )
}
