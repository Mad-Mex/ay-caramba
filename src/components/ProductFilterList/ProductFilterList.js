import { Loader } from "../Loader/Loader"
import { NewProductCard } from "../NewProduct/NewProductCard/NewProductCard"

export const ProductFilterList = ({ allFigures, loading }) => {

  return (

    <div className="flex justify-between flex-wrap">

        { loading ? <Loader /> :

            allFigures.map(figure => {

                return(
                    <NewProductCard 
                        key={ figure.id }
                        figure={ figure }
                    />
                )
            })
         }
    </div>
  )
}
