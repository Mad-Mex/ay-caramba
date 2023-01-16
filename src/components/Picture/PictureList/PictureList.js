import { Loader } from '../../Loader/Loader'
import { PictureCard } from '../PictureCard/PictureCard'

export const PictureList = ({ loading, allPictures }) => {

  return (
    
    <div className='flex flex-wrap justify-around'>

      { loading ? <Loader /> :

        allPictures.map(picture => {

          return(
            <PictureCard 
              key={ picture.id }
              picture={ picture }
            />
          )})
       }

    </div>
  )
}
