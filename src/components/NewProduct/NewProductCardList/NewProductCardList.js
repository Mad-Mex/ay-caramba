import { NewProductCard  } from "../NewProductCard/NewProductCard";
import { Loader } from "../../Loader/Loader";



export const NewProductCardList = ({ newFigure, loading }) => {
  
  return (
    <div className="flex justify-between mb-20">

      { loading ? <Loader /> :
      
        newFigure.map( figure => {
          
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
