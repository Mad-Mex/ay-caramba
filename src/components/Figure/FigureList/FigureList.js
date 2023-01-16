import { FigureCard  } from "../FigureCard/FigureCard";
import { Loader } from "../../Loader/Loader";



export const FigureList = ({ allFigures, loading }) => {
  
  return (

    <div className="flex flex-wrap justify-around">

      { loading ? <Loader /> :
      
        allFigures.map( figure => {
          
          return(
            <FigureCard
              key={ figure.id }
              figure={ figure }
             />
          )
        })
        
        
      }
    </div>
  )
}