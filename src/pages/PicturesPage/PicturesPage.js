import { useEffect, useState } from 'react'
import { getPictures } from '../../api/data'
import { PictureList } from '../../components/Picture/PictureList/PictureList'

export const PicturesPage = () => {

  const [loading, setLoading] = useState(true)
  const [allPictures, setAllPictures] = useState()

  useEffect(() => {
    getPictures()
      .then(item =>{
        setAllPictures(item)
        setLoading(false)
      })
    
  }, [])
  
  return (
    
    <div>
      <h1 className="mt-9 -mb-[1.25rem] sm:-mb-[1.625rem] text-[3rem] sm:text-[4rem] text-primaryLight text-center uppercase font-semibold"> Cuadros 
      </h1>
      <div className="mb-20 w-full h-3 bg-primaryLight"></div>

      <PictureList
        loading={ loading }
        allPictures= { allPictures }
        />
        
    </div>
    
  )
}
