import "./Newsletter.css"

export const Newsletter = () => {

  return (

    <div className='flex relative w-full h-[23rem] pt-[4.5rem] px-[6rem] bg-secondaryLight overflow-hidden'>

      {/*Newsletter Info */}
      <div className="mr-36 max-w-md ">
        <h2 className="mb-9 font-sans1 text-xl "> Únete a nuestro newsletter </h2>
        <p className='mb-4'> Suscribite y recibí nuestro boletín semanal, en el que
        encontrarás información sobre nuevos productos, eventos y mucho más. </p>
        <p > ¿Qué esperás? Rellená el formulario y dale a enviar </p>
      </div>

      {/*Newsletter Form */}
      <div>
        <div className="mb-5">
          <p className='input-title'> Nombre </p>
          <input className='input' />
        </div>

        <div className='flex flex-col mb-5 '>
          <p className="input-title"> Correo </p>
          <input className='input' />
          <div className="flex justify-center">
            <button className='mt-10 w-44 h-10 border border-black rounded-full bg-white cursor-pointer
          transition-all duration-200 ease-linear hover:bg-black hover:text-white'> Enviar </button>
          </div>
        </div>
      </div>

      {/*Logo */}
      <img src="/images/Ay_Caramba_black.svg" alt="logo" className="absolute top-[84%] left-[26%] w-[22.5rem] 
      h-auto object-cover"   />


    </div>
  )
}

