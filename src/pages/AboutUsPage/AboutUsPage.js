import React from 'react'
import "./AboutUsPage.css"

export const AboutUsPage = () => {

  return (

    <div>
        <h1 className="mt-9 -mb-[1.625rem] text-[4rem] text-primaryLight text-center  uppercase font-semibold"> Nosotros </h1>
        <div className="mb-20 w-full h-3 bg-primaryLight"></div>

        <div className='mx-24 mediaText pb-24 flex flex-col 2xl:flex-row'>

          <div className='pr-12 self-center paddingImg'>
            <div className='w-1/2 min-[280px]:w-full pb-12 drop-shadow-2xl'>
              <img src='/images/ay_caramba_creadores.jpg' alt='creadores de Ay Caramba' className='rounded-2xl min-[280px]:w-full min-[280px]:h-full'/>
            </div>
            <div className='w-1/2 min-[280px]:w-full self-center drop-shadow-2xl'>
              <img src='/images/ExpoViedma.png' alt='creadores de Ay Caramba' className='rounded-2xl min-[280px]:w-full min-[280px]:h-full'/>
            </div>
          </div>

          <div className='pr-12 self-center paddingImg'>
            <div className='w-1/2 min-[280px]:w-full self-center pb-12 drop-shadow-2xl'>
              <img src='/images/SofiyBru1.png' alt='creadores de Ay Caramba' className='rounded-2xl min-[280px]:w-full min-[280px]:h-full'/>
            </div>
            <div className='w-1/2 min-[280px]:w-full self-center drop-shadow-2xl'>
              <img src='/images/Feria1.png' alt='creadores de Ay Caramba' className='rounded-2xl min-[280px]:w-full min-[280px]:h-full'/>
            </div>
          </div>

          <div className='w-1/2 text-center min-[280px]:w-full self-center'>
            <p className='contact-text font-semibold'> ¡Hola! Somos Sofía y Bruno, creadores de la empresa <span className='text-black'> Ay Caramba!  </span> </p>

            <p className='contact-text font-semibold'> Esta pequeña empresa nace en el año 2019, en la Ciudad de la Plata; pero, pero para ser más precisos, la misma se comienza a gestar desde la niñez de uno de sus integrantes. </p>

            <p className='contact-text font-semibold'> Bruno, como la mayoría de los niños y niñas, soñó con ser, algún día, un super Héroe, poder volar como Superman, soltar telas de araña como Spiderman o lanzar un Kame hame ha como Gokú; y su forma de expresar esa alegría que sentía por esos personajes era a través del dibujo. Sus horas pasaban volando cuando tomaba un papel y un lápiz y, así, con el correr de los años, esa pasión, muy escondida, se fue transformando en pinturas, pinceles y pasatiempos en la vida universitaria; y es en esa vida universitaria en la que Sofía y Bruno coinciden. Es así que, al poco tiempo, una tarde de mayo de 2018, Sofía se topó con todo tipo de cuadros y bandejas con temáticas de cómic escondidas en una caja. </p>

            <p className='contact-text font-semibold'> Sofía, con la frescura, ocurrencia y alegría que la caracteriza, comenzó a impulsar publicaciones en las redes sociales sobre todas aquellas cosas que Bruno tenía guardadas; y, sin darse cuenta, al poco tiempo pintaba, a la par de su compañero y con la misma dedicación, para empezar, posteriormente, a exponer las obras en diferentes ferias de la Ciudad de La Plata </p>

            <p className='contact-text font-semibold'> Poco tiempo después, en octubre de 2019, con el asesoramiento de la diseñadora Yanile Masmut se creó lo que hoy conocemos como Ay Caramba! </p>

            <p className='contact-text font-semibold'> En el año 2020 nos mudamos a Viedma, provincia de Río Negro, donde la pequeña empresa tomó más impronta. Allí conocimos a Lucas Mitidieri, creador de figuras 3D; conectamos y comenzamos a trabajar juntos. </p>

            <p className='contact-text font-semibold'> En la actualidad exponemos nuestros productos en varias ferias de Argentina y, a su vez, conectamos con el mundo a través de las redes sociales.   </p>
          </div>

        </div>
    </div>
    
  )
}
