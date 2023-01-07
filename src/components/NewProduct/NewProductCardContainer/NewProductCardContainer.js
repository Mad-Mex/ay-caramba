import { useEffect, useState } from "react"
import { NewProductCardList } from "../NewProductCardList/NewProductCardList"
import { getNewFigures } from "../../../api/data"


export const NewProductCardContainer = () => {

  const [loading, setLoading] = useState(true)
  const [newFigure, setNewFigure] = useState()

  useEffect(() => {
    getNewFigures()
      .then(item => {
        setNewFigure(item)
        setLoading(false)
      })
  }, [])
  

  return (
    
    <div className="mx-[6rem]">
        <h2 className="mb-10 text-base font-semibold uppercase"> Novedades </h2>
        <div>
          <NewProductCardList
            loading={ loading }
            newFigure={ newFigure }
           />
        </div>
        
    </div>
  )
}
