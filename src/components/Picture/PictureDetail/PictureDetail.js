import React from 'react'

export const PictureDetail = ({ picture }) => {

  return (
    <>
       <div className='mr-20'>
        <img src={ picture.image } alt={ picture.name } className="w-[16rem] h-[17rem] rounded-2xl" />
       </div> 

       <div>
        <h2 className='mb-7 text-4xl text-tertiary'> { `${picture.name} / ${ picture.size }` } </h2>
        <h3 className='text-lg'> Materiales </h3>
        <p className='text-sm'> { `-${picture.material_1}` } </p>
        <p className='text-sm'> { `-${picture.material_2}` }  </p>
        <p className='text-sm mb-3 '> { `-${picture.material_3}` } </p>
        <p className='text-base mb-3 '> { `Tiempo de realización: ${ picture.timeRealization }` }  </p>
        <p className='text-base'> { picture.method ? `Detalles: ${ picture.method } ` : null } </p>

       </div>
      
    </>
  )
}
