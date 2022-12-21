export const Newsletter = () => {

  return (

    <div className='flex w-full h-[23rem] pt-[4.5rem] px-32 bg-secondaryLight'>

      <div className="mr-36 max-w-md ">
        <h2 className="mb-8"> Únete a nuestro newsletter </h2>
        <p className='mb-4'> Suscribite y recibí nuestro boletín semanal, en el que
        encontrarás información sobre nuevos productos, eventos y mucho más. </p>
        <p > ¿Qué esperás? Rellená el formulario y dale a enviar </p>
      </div>

      <div>
        <div className="mb-5">
          <p className='mb-2 text-base '> Nombre </p>
          <input className='pl-5 w-[23.125rem] h-9' />
        </div>

        <div className='flex flex-col mb-5 '>
          <p className="mb-2 text-base "> Correo </p>
          <input className='pl-5 w-[23.125rem] h-9' />
          <button className='mt-10 ml-24 w-44 h-10 border border-black rounded-full bg-white cursor-pointer
          hover:bg-black hover:text-white'> Enviar </button>
        </div>
      </div>

    </div>
  )
}

