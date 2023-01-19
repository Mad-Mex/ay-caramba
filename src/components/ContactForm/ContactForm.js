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
     <form onSubmit={ formik.handleSubmit }>

               <div className='flex flex-col items-center mb-6 '>
                    <input
                    className='w-full lg:w-[29rem] h-[2.625rem] rounded-full border border-primary cursor-pointer text-center placeholder:text-black hover:border-primaryDark'
                    placeholder='Nombre y apellido'
                    name="name"
                    type="text"
                    onChange={ formik.handleChange }
                    value={ formik.values.name } 
                    />
                     { formik.errors.name && formik.touched.name ? <p className="error-text"> Escribe tu nombre 
                      </p> : null  }
               </div>

               <div className='flex flex-col items-center mb-6 '>
                    <input
                    className='w-full lg:w-[29rem] h-[2.625rem] rounded-full border border-primary cursor-pointer text-center placeholder:text-black hover:border-primaryDark'
                    placeholder='Correo' 
                    name="email"
                    type="text"
                    onChange={ formik.handleChange }
                    value={ formik.values.email }
                    />
                     { formik.errors.email && formik.touched.email ? <p className="error-text"> Introduce un correo válido </p> : null  }
               </div>

               <div className='flex flex-col items-center mb-6 '>
                    <input
                    className='w-full lg:w-[29rem] h-[2.625rem] rounded-full border border-primary cursor-pointer text-center placeholder:text-black hover:border-primaryDark'
                    placeholder='Teléfono'
                    name="phone"
                    type="text"
                    onChange={ formik.handleChange }
                    value={ formik.values.phone } 
                    />
                     { formik.errors.phone && formik.touched.phone ? <p className="error-text"> Introduce un teléfono válido </p> : null  }
               </div>

               <div className='flex flex-col items-center mb-8 '>
                    <textarea
                    className='pt-[7.5rem] w-full lg:w-[29rem] h-[17rem] rounded-[1.2rem] border border-primary cursor-pointer text-center placeholder:text-black hover:border-primaryDark'
                    name="message"
                    type="text"
                    onChange={ formik.handleChange }
                    value={ formik.values.message }
                    > Mensaje 
                    </textarea>
                     { formik.errors.message && formik.touched.message ? <p className="error-text"> Por favor, deja tu mensaje </p> : null  }
               </div>

               <div className='flex flex-col items-center mt-8 '>
                    <input
                    className='w-full lg:w-[29rem] h-[2.625rem] mb-12 rounded-full bg-tertiaryLight cursor-pointer text-center uppercase  placeholder:text-black hover:bg-tertiary'
                    placeholder='Enviar'
                    type="submit" 
                    />
               </div>

               { openModal && <ModalSendMailSuccess setOpenModal={ setOpenModal } /> }
               { error && <ModalSendMailFailure setOpenModal={ setOpenModal } setError={ setError }  /> }      
                
    </form>
  )
}

