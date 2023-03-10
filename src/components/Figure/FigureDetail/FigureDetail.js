

export const FigureDetail = ({ figure }) => {

  return (
    <>
     
     <div className='mr-5 lg:mr-20 mb-5 lg:mb-0 mx-5 lg:mx-0'>
        <img src={ figure.image } alt={ figure.name } className="w-[24rem] lg:w-[16rem] h-[25rem] lg:h-[17rem] rounded-2xl"   />
     </div> 

     <div className="text-center lg:text-left">
        <h2 className='mb-7 text-4xl text-tertiary'> { `${figure.name} / ${ figure.size } ` } </h2>
        <h3 className='text-lg' > Materiales </h3>
        <p className='text-sm'> { `-${figure.material_1}` } </p>
        <p className='text-sm'> { `-${figure.material_2}` }  </p>
      </div>
      
    </>
  )
}




        
