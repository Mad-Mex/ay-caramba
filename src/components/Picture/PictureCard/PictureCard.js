import { Link } from "react-router-dom"

export const PictureCard = ({ picture }) => {
    
  return (

    <Link to={ `/detalle/cuadros/${ picture.id }` }  >

      <div className='mx-9 max-[780px]:mx-2 mb-16 p-6 w-[20rem] h-[25rem] rounded-xl bg-gray3 shadow-3xl
       cursor-pointer'>
        <img src={ picture.image } alt={ picture.name } className="w-full h-[16rem] rounded-xl"/>
        <h3 className="mt-11 text-2xl font-sans3 font-semibold text-center"> 
        { picture.name } </h3>
      </div>

    </Link>
  )
}
