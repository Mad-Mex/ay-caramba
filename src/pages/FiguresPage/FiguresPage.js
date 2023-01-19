import { useEffect, useState } from "react"
import { getFigures } from "../../api/data"
import { FigureList } from "../../components/Figure/FigureList/FigureList"


export const FiguresPage = () => {

  const [loading, setLoading] = useState(true)
  const [allFigures, setAllFigures] = useState()

  useEffect(() => {
    getFigures()
      .then(item => {
        setAllFigures(item)
        setLoading(false)
      })
      
  }, [])
  
  return (

    <div>
      <div>
        <h1 className="mt-9 -mb-[1.25rem] sm:-mb-[1.625rem] text-[3rem] sm:text-[4rem] text-primaryLight text-center uppercase font-semibold"> Figuras </h1>
        <div className="mb-20 w-full h-3 bg-primaryLight"></div>

        <FigureList
          loading={ loading }
          allFigures= { allFigures }
        />
      
      </div>
    </div>
  )
}
