import { dataInfo } from './InfoContainer.data'

export const InfoContainer = () => {

  return (

    <div className='flex justify-around max-[780px]:flex-col'>

        { dataInfo.map( item => (

          <div className='flex flex-col items-center max-[780px]:my-3'>
            <img src={ item.image } alt={ `icono ${ item.title}`}  className='drop-shadow-2xl mb-3 w-[9rem] h-[9rem] rounded-full shadow-3xl object-cover'      />
            <h3 className='mb-2 text-[32px] font-bold text-center uppercase'> { item.title } </h3>
            <p className='max-w-[240px] text-base font-medium leading-5 text-center'> { item.content } 
            </p>
          </div>
            
        ))}

    </div>
  )
}
