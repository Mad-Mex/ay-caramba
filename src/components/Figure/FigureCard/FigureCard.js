import { Link } from "react-router-dom"


export const FigureCard = ({ figure }) => {

  return (

    <Link to={ `/detalle/figuras/${ figure.id }` }  >

      <div className='mr-[5.2rem] mb-16 p-6 w-[20rem] h-[22rem] rounded-xl bg-gray3 shadow-3xl 
      cursor-pointer'>
        <img src={ figure.image } alt={ figure.name } className="w-full h-[16rem] rounded-xl"/>
        <h3 className="mt-6 text-base text-center"> { figure.name } </h3>
      </div>

    </Link>
    
  )
}