import { Link } from "react-router-dom"

export const PictureCard = ({ picture }) => {
  
  const name = picture.name
  const count = 21  
  
  return (

    <Link to={ `/detalle/cuadros/${ picture.id }` }  >

      <div className='mx-9 mb-16 p-6 w-[20rem] h-[21.375rem] rounded-xl bg-gray3 shadow-3xl
       cursor-pointer'>
        <img src={ picture.image } alt={ picture.name } className="w-full h-[16rem] rounded-xl"/>
        <h3 className="mt-6 text-xl font-sans3 font-semibold text-center"> 
        { name.slice(0, count) + (name.length > count ? "..." : "")  } </h3>
      </div>

    </Link>
  )
}
