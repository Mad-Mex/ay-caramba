import { HeroImage } from '../../components/HeroImage/HeroImage'
import { Slider } from '../../components/Slider/Slider'
import { WhatsappButton } from '../../components/WhatsappButton/WhatsappButton'
import "./HomePage.css"

export const HomePage = () => {

  return (

    <div>

      {/*Slider Section */}
      <section>
        <Slider />
      </section>

      { /* Hero Section */ }
      <section>
        <HeroImage />
      </section>

      { /*Whatsapp Button */ }
      <div>
        <WhatsappButton />
      </div>

      


     

      

    </div>
  )
}

