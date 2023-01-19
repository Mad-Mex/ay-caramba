import React from 'react'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import "./ContactPage.css"

export const ContactPage = () => {
  return (
    <div>
        <h1 className="mt-9 -mb-[1.625rem] text-[4rem] text-primaryLight text-center  uppercase font-semibold"> Contacto </h1>
        <div className="mb-12 w-full h-3 bg-primaryLight"></div>

        <div className='flex flex-col lg:flex-row items-center'>

            { /* Form  */ }
            <div className='w-1/2'>
              <ContactForm />
            </div>


            { /* Strip */ }
            <span className='h-0 lg:h-[34rem] w-[54%] lg:w-0 border border-black mb-12 lg:mb-0'></span>


            {/*Social media */ }
            <div className='flex justify-center items-center w-full lg:w-1/2 pb-12 lg:pb-0 '>
              <div className='flex justify-center containerSocial flex-wrap w-full min-[531px]:w-[26rem] min-[531px]:h-[25rem]'>

                <button className='mb-[4.875rem] mr-[2rem] lg:mr-[10.3rem] ml-[2rem] lg:ml-0 iconsSocial'>
                  <a href="https://instagram.com/ay.caramba.arg?igshid=YmMyMTA2M2Y="  target="_blank" rel='noopener noreferrer' >
                    <img src='/images/instagram.png' alt='instagram' className='icon-social-media '/>
                  </a>
                  <p className='mt-[0.65rem]'>@AyCaramba</p>
                </button>

                <button className='mb-[4.875rem] mr-[2rem] lg:mr-0 iconsSocial'>
                  <a href='https://www.facebook.com/ay.caramba.arg?mibextid=ZbWKwL' target="_blank" rel='noopener noreferrer'>
                    <img src='/images/facebook_color.png' alt='facebook' className='icon-social-media'/>
                  </a>
                  
                  <p className='mt-[0.65rem]'>@AyCaramba</p>
                </button>

                <button className='mr-[2rem] lg:mr-[10.3rem] ml-[2rem] lg:ml-0 iconsSocial mb-0 max-[370px]:mb-[4.875rem]'>
                  <a href='https://t.me/ay_caramba_arg' target="_blank" rel='noopener noreferrer'> 
                    <img src='/images/telegram.png' alt='instagram' className='icon-social-media'/>
                  </a>
                 
                  <p className='mt-[0.65rem]'>@AyCaramba</p>
                </button>

                 <button className='mr-[2rem] lg:mr-0 iconsSocial'>
                  <a href='https://wa.me/5492920248635' target="_blank" rel='noopener noreferrer' >
                    <img src='/images/whatsapp_color.png' alt='instagram' className='icon-social-media'/>
                  </a>
                  
                  <p className='mt-[0.65rem]'>@AyCaramba</p>
                </button>

              </div>
            </div>
        </div>
    </div>
  )
}
