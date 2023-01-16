import React from 'react'

export const WhatsappButton = () => {
  return (
    <div>
        <a href='https://wa.me/' target="_blank" rel='noopener noreferrer' className='fixed bottom-[10%] right-[5%]
        w-14 h-14 rounded-full bg-whatsapp shadow-2xl transition duration-200 hover:translate-y-2 '>
            <i className='fa fa-whatsapp mt-[0.6rem] ml-4 text-white text-3xl'></i>
        </a>
    </div>
  )
}
