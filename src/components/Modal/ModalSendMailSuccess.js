

export const ModalSendMailSuccess = ({setOpenModal}) => {

  return (

     <div className='flex justify-center items-center fixed top-0 left-0 z-50 w-full h-screen bg-overlay'>

       
        <div className='max-w-[43.75rem] h-[28.5rem] rounded-lg bg-white '>

            { /*Modal - image section */ }
            <div className='flex justify-center items-center w-full max-h-60 rounded-lg bg-secondaryDark'>
                <img src='/images/send_mail_success.png' alt='mujer envia un correo desde su laptop'  />
            </div>

            { /*Modal - content section */ }
            <div className='mx-12'>
                <h3 className='mt-5 text-2xl font-medium text-success'>Tu mensaje fue enviado</h3>
                <p className='mt-4 max-w-[31.25rem] text-base leading-6'>Gracias por contactarnos. En los próximos días recibirás una respuesta. No olvides revisar tu 
                bandeja de entrada </p>
                <div className='flex justify-end'> 
                  <button 
                    className='mt-8 w-52 h-9 rounded-md bg-primary text-base font-semibold text-white  hover:bg-primaryDark' 
                    onClick={ ()=> setOpenModal(false) }> 
                  Entendido 
                  </button>
                </div>
            </div>

        </div>
    </div> 
)}

