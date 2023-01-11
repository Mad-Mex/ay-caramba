

export const ModalSendMailFailure = ({setOpenModal, setError}) => {

  return (

     <div className='flex justify-center items-center fixed top-0 left-0 z-50 w-full h-screen bg-overlay'>
                
        <div className='max-w-[43.75rem] h-[28.5rem] rounded-lg bg-white '>

            { /*Modal - image section */ }
            <div className='flex justify-center items-center w-full max-h-60  bg-gray'>
                <img src='/images/send_mail_fail.png' alt='correo no enviado'  />
            </div>

            { /*Modal - content section */ }
            <div className='mx-12'>
                <h3 className='mt-5 text-2xl font-medium text-warning'>¡Ups! Ocurrió un error </h3>
                <p className='mt-4 max-w-[31.25rem] text-base leading-6'> Lo sentimos pero no se pudo enviar tu mensaje. 
                Estamos trabajando para solucionar el problema. Por favor, inténtalo más tarde </p>
                <div className='flex justify-end'> 
                  <button 
                    className='mt-8 w-52 h-9 rounded-md bg-primary text-base font-semibold hover:bg-primaryDark' 
                    onClick={ ()=> {
                        setOpenModal(false)
                        setError(false)
                    } }> 
                  Entendido 
                  </button>
                </div>
            </div>

        </div>
    </div> 
)}

