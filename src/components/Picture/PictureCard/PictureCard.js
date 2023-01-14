import { Link } from "react-router-dom"

export const PictureCard = ({ picture }) => {
  
  const name = picture.name
  const count = 21  
  
  return (

    <Link to={ `/detalle/cuadros/${ picture.id }` }  >

      <div className='mr-[6rem] mb-16 p-6 w-[20rem] h-[22rem] rounded-xl bg-gray3 cursor-pointer'>
        <img src={ picture.image } alt={ picture.name } className="w-full h-[16rem] rounded-xl"/>
        <h3 className="mt-6 text-base text-center"> 
        { name.slice(0, count) + (name.length > count ? "..." : "")  } </h3>
      </div>

    </Link>
  )
}
