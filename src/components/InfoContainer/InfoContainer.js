import { dataInfo } from './InfoContainer.data'

export const InfoContainer = () => {

  return (

    <div className='flex w-[71.5rem] justify-between'>

        { dataInfo.map( item => (

          <div className='flex flex-col items-center'>
            <img src={ item.image } alt={ `icono ${ item.title}`}  className='mb-3 w-[6rem] h-[6rem] rounded-full shadow-3xl object-cover'      />
            <h3 className='mb-2 text-[1.375rem] font-bold text-center uppercase '> { item.title } </h3>
            <p className='max-w-[240px] text-sm font-normal leading-5 text-center'> { item.content } 
            </p>
          </div>
            
        ))}

    </div>
  )
}
