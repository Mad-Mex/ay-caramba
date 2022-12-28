import { Link } from "react-router-dom"

export const CategoryCard = ({ image, title, url }) => {

  return (
      
    <div className="flex flex-col items-center relative overflow-hidden mr-[10rem] mb-[5rem] w-[22rem] h-[30rem]">

      <img src={ image } alt={ title } className="w-full h-full object-cover brightness-[.8] transition-all duration-500 ease-out hover:brightness-100 hover:scale-125"/>

      <h2 className='absolute top-[60%] text-xl font-medium text-white'> { title } </h2>
      
      <button className='absolute top-[70%] w-56 h-9 border-2 border-white rounded-full bg-transparent text-sm
        text-white  cursor-pointer hover:bg-white hover:text-black    '> 
        <Link to={ url } className="no-underline" > 
          Ver más 
        </Link>
      </button>

    </div>
  )
}

