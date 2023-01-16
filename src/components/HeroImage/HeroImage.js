import { useEffect, useState } from 'react'
import { FigureListHome } from '../Figure/FigureListHome/FigureListHome'
import { PictureListHome } from '../Picture/PictureListHome/PictureListHome'
import { getFiguresHome } from '../../api/data'
import { getPicturesHome } from '../../api/data'
import "./HeroImage.css"
import { InfoContainer } from '../InfoContainer/InfoContainer'

export const HeroImage = () => {

  const [figureHome, setfigureHome] = useState()
  const [pictureHome, setPictureHome] = useState()
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getFiguresHome()
      .then( item => {
        setfigureHome(item)
        setLoading(false)
      })
  }, [])


  useEffect(() => {
    getPicturesHome()
      .then(item => {
        setPictureHome(item)
        setLoading(false)
      })
  }, [])
  
  
  
  return (

    <div className='relative'>

        { /*Background Image */ }    
        <div>
           <img src='/images/fondo_home.svg' alt='fondo con degradado' className='w-full h-full'/>    
        </div>


        {/*3D Figures */}
        <div className='hero-layout top-[2.7%]   '>
          <h2 className='hero-title'> Figuras 3D  </h2>
        </div>

        <div className='hero-layout top-[9%]  ' >
          <FigureListHome
            figureHome = { figureHome }
            loading = { loading } 
          />
        </div>


        { /* Pictures  */ }
        <div className='hero-layout top-[33%]'>
          <h2 className='hero-title'> Cuadros  </h2>
        </div>

         <div className='hero-layout top-[39%]  ' >
          <PictureListHome 
            pictureHome={ pictureHome }
            loading={ loading }
          />
        </div>


        { /*Hand-made Products */ }
        <div className='flex'>

          <div className='hero-layout top-[67%]'>
            <h2 className='hero-title-2 mb-7 max-w-[28.5rem] leading-none '>Somos Fabricantes</h2>
            <h3 className='max-w-[31rem] text-2xl font-normal leading-none'> Todas nuestras piezas están pintadas 
              <span className='text-5xl font-semibold'> 100% a mano </span> 
            </h3>
          </div>

          <div className='absolute top-[64%] right-[7%]  '>
            <img src='/images/hand_made_figure.png' alt='figura pintada a mano' 
            className='w-[28rem] h-[18rem] rounded-lg  '  />
          </div>
        </div>


        {/* Info - shipping, contact, payment */} 
        <div className='hero-layout bottom-[0.2%] max-w-[1200px] ' >
          <InfoContainer />
        </div>
        


        
    </div>
  )
}

