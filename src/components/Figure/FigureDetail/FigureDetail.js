

export const FigureDetail = ({ figure }) => {

  return (
    <>
     
     <div className='mr-20'>
        <img src={ figure.image } alt={ figure.name } className="w-[16rem] h-[17rem] rounded-2xl"   />
     </div> 

     <div>
        <h2 className='mb-7  text-4xl text-tertiary'> { `${figure.name} / ${ figure.size } ` } </h2>
        <h3 className='text-lg' > Materiales </h3>
        <p className='text-sm'> { `-${figure.material_1}` } </p>
        <p className='text-sm'> { `-${figure.material_2}` }  </p>
      </div>
      
    </>
  )
}




        
