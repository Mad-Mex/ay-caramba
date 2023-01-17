import React from 'react'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import "./ContactPage.css"

export const ContactPage = () => {
  return (
    <div>
        <h1 className="mt-9 -mb-[1.625rem] text-[4rem] text-primaryLight text-center  uppercase font-semibold"> Contacto </h1>
        <div className="mb-20 w-full h-3 bg-primaryLight"></div>

        <div className='flex'>

            { /* Form  */ }
            <div className='w-1/2'>
              <ContactForm />
            </div>


            { /* Strip */ }
            <div className='h-[34rem] border border-black'></div>


            {/*Social media */ }
            <div className='flex justify-center items-center w-1/2  '>
              <div className='flex flex-wrap w-[26rem] h-[25rem]'>

                <button className='mb-[4.875rem] mr-[10.3rem]'>
                  <a href="https://instagram.com/ay.caramba.arg?igshid=YmMyMTA2M2Y="  target="_blank" rel='noopener noreferrer' >
                    <img src='/images/instagram.png' alt='instagram' className='icon-social-media '/>
                  </a>
                  <p className='mt-[0.65rem]'>@AyCaramba</p>
                </button>

                <button className='mb-[4.875rem]'>
                  <a href='' target="_blank" rel='noopener noreferrer'>
                    <img src='/images/facebook_color.png' alt='facebook' className='icon-social-media'/>
                  </a>
                  
                  <p className='mt-[0.65rem]'>@AyCaramba</p>
                </button>

                <button className='mr-[10.3rem]'>
                  <a href='' target="_blank" rel='noopener noreferrer'> 
                    <img src='/images/telegram.png' alt='instagram' className='icon-social-media'/>
                  </a>
                 
                  <p className='mt-[0.65rem]'>@AyCaramba</p>
                </button>

                 <button>
                  <a href='' target="_blank" rel='noopener noreferrer' >
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
