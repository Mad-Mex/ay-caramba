import { useEffect, useState } from "react"
import { ProductFilterList } from "../../components/ProductFilterList/ProductFilterList"
import { getFigures } from "../../api/data"
import "./FiguresPage.css"

export const FiguresPage = () => {

  const categories = ["Cine", "Comic", "Manga-anime", "Videojuegos"]
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

    <>
      { /* Dropdown Filter*/ }

      <div className="flex items-center justify-between mt-16 mb-5 mx-[6rem] pb-4 border-b-2 border-b-primary">
        <h2 className="text-base font-semibold uppercase"> Figuras </h2>
        <div className="flex justify-center items-center relative" >
          <input type="" placeholder="Ordenar" className="pl-2 w-[7.2rem] h-[1.875rem] border border-gray 
          uppercase cursor-pointer placeholder-black" />
          <i className="fa fa-chevron-down absolute right-[10%] cursor-pointer"></i>
        </div>
      </div>

      { /*Container */ }
      <div className="flex mx-[6rem]">

        { /* Search Filter */ }
        <div className="mr-14 w-1/5  ">
          <div className="flex items-center mb-4 pb-2 border-b-2 border-b-primary ">
            <i className="fa fa-filter mr-2 text-lg"> </i>
            <p className="text-sm font-normal uppercase"> Filtrar </p>
          </div>

          <div>
            { categories.map( (item, index ) => (
              <form key={ index } className="mb-1">
                <input type="checkbox" id={ index } className="mr-2"   />
                <label for={ index } className="text-zinc-400"  > { item } </label>
              </form>
            ))}
          </div>
        </div>

        
        {/* Card Products */}
        <div className="w-4/5">
              <div>
                <ProductFilterList
                  loading={ loading }
                  allFigures={ allFigures }
                  />
              </div>
        </div>

      </div>
    </>
  )
}
