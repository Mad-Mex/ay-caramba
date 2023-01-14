import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFiguresById } from '../../../api/data'
import { Loader } from '../../Loader/Loader'
import { FigureDetail } from '../FigureDetail/FigureDetail'

export const FigureDetailContainer = () => {

  const { id } = useParams()
  const [figureDetail, setFigureDetail] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getFiguresById(id)
        .then( item => {
            setFigureDetail(item)
            setLoading(false)
        })
  }, [id])
  
    
  return (

    <div className='flex mx-56'>
        
        { loading ? <Loader /> : 
           
          <FigureDetail 
            figure= { figureDetail }    
           />
        }
       
    </div>
    
  )
}
