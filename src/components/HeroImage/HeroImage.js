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

    <div className='background'>


        {/*3D Figures */}
        <div className='py-12 pt-24 pl-[172px]'>
          <h2 className='hero-title shadowText'> Figuras 3D  </h2>
        </div>

        <div>
          <FigureListHome
            figureHome = { figureHome }
            loading = { loading } 
          />
        </div>


        { /* Pictures  */ }
        <div className='pb-12 pt-12 pl-[172px]'>
          <h2 className='hero-title shadowText'> Cuadros  </h2>
        </div>

         <div >
          <PictureListHome 
            pictureHome={ pictureHome }
            loading={ loading }
          />
        </div>


        { /*Hand-made Products */ }
        <div className='py-36 px-12 flex justify-around items-center products'>
          <div className='info'>
            <h2 className=' mb-7 max-w-[28.5rem] text-[58px] leading-none shadowText font-semibold'>SOMOS FABRICANTES</h2>
            <h3 className=' text-[34px] font-normal leading-none'> Todas nuestras piezas están pintadas 
              <p className='pt-1 text-[48px] font-sans font-bold'> 100% A MANO </p> 
            </h3>
          </div>

          <div className='drop-shadow-2xl'>
            <img src='/images/hand_made_figure.png' alt='figura pintada a mano' 
            className=' rounded-3xl'  />
          </div>
        </div>


        {/* Info - shipping, contact, payment */} 
        <div className='pb-36 pt-12 w-full' >
          <InfoContainer />
        </div>
        


        
    </div>
  )
}

