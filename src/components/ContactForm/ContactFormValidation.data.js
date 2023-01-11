import * as Yup from "yup"

export const initialValues = () =>{
    return{
        name: "",
        email: "",
        message: ""
    }
}


export const validationSchema = () => {
    return Yup.object({
        name: Yup.string().required(true).min(8),
        email: Yup.string().required(true).email(),
        message: Yup.string().required(true).min(10)
    })
}