import { Link } from "react-router-dom"

export const CategoryCard = ({ image, title, url }) => {

  return (
    <Link to={url}>
      <div className="w-[30rem] h-[34rem] cursor-pointer">

        <div className="relative">
          <img src={ image } alt={ title } className="w-[30rem] h-[32rem]"/>

          <div className="absolute top-[75%] flex justify-center items-center w-full h-32 bg-primaryLight opacity-70 ">
            <h2 className='text-xl font-medium text-black uppercase'> { title } </h2>
          </div>

        </div>
    </div>
    </Link>  
    
  )
}

