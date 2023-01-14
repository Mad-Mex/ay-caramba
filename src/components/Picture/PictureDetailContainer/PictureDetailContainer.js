import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPicturesById } from '../../../api/data'
import { Loader } from '../../Loader/Loader'
import { PictureDetail } from '../PictureDetail/PictureDetail'

export const PictureDetailContainer = () => {

  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [pictureDetail, setPictureDetail] = useState()

  useEffect(() => {
    getPicturesById(id)
      .then(item=> {
        setPictureDetail(item)
        setLoading(false)
      })
   
  }, [id])
  
  return (

    <div className='flex mx-56'>

      { loading ? <Loader /> : 
        <PictureDetail 
          picture={ pictureDetail }
        />
       }

    </div>
  )
}
