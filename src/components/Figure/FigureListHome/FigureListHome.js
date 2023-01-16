import { Loader } from '../../Loader/Loader'
import { FigureCard } from '../FigureCard/FigureCard'

export const FigureListHome = ({ figureHome, loading }) => {

  return (

    <div className='flex flex-wrap justify-center w-full'>

      { loading ? <Loader /> :

        figureHome.map(figure => {

          return(
            <FigureCard 
              key={ figure.id }
              figure = { figure }
            />
          )
        })
      }
      
    </div>
  )
}
