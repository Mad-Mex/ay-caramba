import { useState } from "react"
import { useFormik } from "formik"
import { ModalSendMailSuccess } from "../Modal/ModalSendMailSuccess"
import { ModalSendMailFailure } from "../Modal/ModalSendMailFailure"
import { initialValues, validationSchema } from "./ContactFormValidation.data"
import emailjs from "@emailjs/browser"

import "./ContactForm.css"



export const ContactForm = () => {

  const [openModal, setOpenModal] = useState(false)
  const [error, setError] = useState(false)
  
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: true,
    onSubmit: formValues => {

      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        formValues,
        process.env.REACT_APP_EMAILJS_USER_ID        
      )
    
      .then((response) =>{
        console.log(response.text);
        setOpenModal(true)
        formik.resetForm({ formValues: "" })
      
      }, (error) => {
        console.log(error.text)
        setError(true)
        formik.resetForm({ formValues: "" })
      })
    },
  })


  return (

    <div className='flex w-full h-[42rem] pt-[4.5rem] px-32 bg-secondaryLight'>

      { /*Contact Form - Text */ }

      <div className="mr-36 max-w-md ">
        <h2 className="mb-8 font-sans1 text-xl "> Ponte en contacto con nosotros </h2>
        <p className='mb-4'> Si estás interesado por una figura o algún cuadro, o si deseas cotizar el precio
        de cualquiera de nuestros artículos, escribe tu correo y mensaje.  </p>
        <p > Consúltanos sin compromiso </p>
      </div>


      { /*Contact Form - Form */ }

      <form onSubmit={ formik.handleSubmit } >
        <div className="mb-5">
          <p className='mb-2 text-base '> Nombre </p>
          <input 
            className= "pl-5 w-[30rem] h-9 border border-black"   
            name="name"
            type="text"
            onChange={ formik.handleChange }
            value={ formik.values.name }
            />
            { formik.errors.name && formik.touched.name ? <p className="error-text"> Escribe tu nombre 
            </p> : null  }
        </div>


        <div className='flex flex-col mb-5 '>
          <p className="mb-2 text-base "> Correo </p>
          <input 
            className='pl-5 w-[30rem] h-9 border border-black'
            name="email"
            type="email"
            onChange={ formik.handleChange }
            value={ formik.values.email }
            />
          { formik.errors.email && formik.touched.email ? <p className="error-text"> Introduce un correo válido 
          </p> : null  }
        </div>


         <div className="mb-5">
          <p className='mb-2 text-base '> Mensaje </p>
          <textarea 
            className='pt-3 px-5 w-[30rem] h-48 border border-black'
            name="message"
            type="text"
            onChange={ formik.handleChange }
            value={ formik.values.message }
          > 
          </textarea>
          { formik.errors.message && formik.touched.message ? <p className="error-text"> Por favor, deja tu mensaje 
          </p> : null  }
        </div>

        <div className="flex items-center justify-center">
          <input className='mt-5 w-44 h-10 border border-black  bg-white uppercase cursor-pointer
          hover:bg-black hover:text-white' type="submit" value="Enviar" />
        </div>
      </form>

      { openModal && <ModalSendMailSuccess setOpenModal={ setOpenModal } /> }
      { error && <ModalSendMailFailure setOpenModal={ setOpenModal } setError={ setError }   /> }
    </div>
  )
}

