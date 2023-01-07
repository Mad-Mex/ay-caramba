import "./ContactForm.css"

export const ContactForm = () => {

  return (

    <div className='flex w-full h-[40rem] pt-[4.5rem] px-32 bg-secondaryLight   '>

      <div className="mr-36 max-w-md ">
        <h2 className="mb-8 font-sans1 text-xl "> Ponte en contacto con nosotros </h2>
        <p className='mb-4'> Si estás interesado por una figura o algún cuadro, o si deseas cotizar el precio
        de cualquiera de nuestros artículos, escribe tu correo y mensaje.  </p>
        <p > Consúltanos sin compromiso </p>
      </div>

      <div>
        <div className="mb-5">
          <p className='mb-2 text-base '> Nombre </p>
          <input className='pl-5 w-[30rem] h-9 border border-black' />
        </div>

        <div className='flex flex-col mb-5 '>
          <p className="mb-2 text-base "> Correo </p>
          <input className='pl-5 w-[30rem] h-9 border border-black ' />
          
        </div>

         <div className="mb-5">
          <p className='mb-2 text-base '> Mensaje </p>
          <textarea className='pt-3 pl-5 w-[30rem] h-48 border border-black '> </textarea>
        </div>

        <div className="flex items-center justify-center">
          <button className='mt-10 w-44 h-10 border border-black  bg-white uppercase cursor-pointer
          hover:bg-black hover:text-white'> Enviar </button>
        </div>
      </div>

    </div>
  )
}

