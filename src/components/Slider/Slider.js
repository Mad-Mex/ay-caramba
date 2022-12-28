import { useEffect, useState } from 'react'
import { data } from './data.slider'
import "./Slider.css"

export const Slider = () => {

  const [indexSlider, setIndexSlider] = useState(0)
  
  const nextSlide = () => {
    setIndexSlider( indexSlider === data.length - 1 ? 0 : indexSlider + 1 ) 
  }

  const prevSlide = () => {
    setIndexSlider( indexSlider === 0 ? data.length - 1 : indexSlider - 1 )
  }

  useEffect(() => {
    const interval = setInterval(() => { nextSlide() }, 3000)

    return ()=> clearInterval(interval)  
    
  }, [indexSlider])
  

  return (

    <div className='relative flex flex-col mb-16 w-full h-[27.5rem]'>
    
        { data.map((slide, index) => (
            <div key={ index } className="w-full h-[27.5rem] " >
                { index === indexSlider && (
                    <img src={ slide.image } alt='diapositiva' className='w-full h-[27.5rem] object-cover
                    brightness-90 '  />
                )}
            </div>
        ))}

        <i className='fa fa-chevron-left arrow left-[7%]' onClick={ prevSlide } ></i> 
        <i className='fa fa-chevron-right arrow right-[7%]' onClick={ nextSlide } ></i> 

    </div>
  )
}
