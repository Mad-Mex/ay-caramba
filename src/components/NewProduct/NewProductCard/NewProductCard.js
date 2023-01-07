import { Link } from "react-router-dom"
import "./NewProductCard.css"


export const NewProductCard = ({ figure }) => {

  return (

    <div key={ figure.name } className='w-[15rem] h-[24rem] mb-8'>
         
      { /* Card Top */} 
      <div className="relative cursor-pointer group">
        <img src={ figure.image } alt={ figure.name } className='w-full h-[18rem]' />
          <div className="overlay w-full h-0 bg-zinc-100 group-hover:opacity-80 group-hover:h-[18rem]">
              
            <Link to="/detalle/figuras">
              <div className="overlay left-[30%] py-2 px-5 bg-green-600 text-white group-hover:top-[46%] 
              group-hover:left-[32%] group-hover:opacity-100">
                 Ver más
              </div>
            </Link>
                 
          </div>
      </div>


      {/* Card Bottom */ }
        <div className='pt-5 px-[1.2rem] h-[6rem] bg-zinc-900'>
          <div className='flex items-center justify-between'>
            <h3 className='mb-[0.16rem] text-base font-semibold text-white'> { figure.name }  </h3>
            <i className='fa fa-heart-o text-base text-white cursor-pointer' > </i>
          </div>
        
          <p className='text-[0.72rem] text-slate-400  uppercase'> { figure.franchise } </p>
        </div>
    </div> 
  )
}
