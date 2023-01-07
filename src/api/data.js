import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";


const getFigures = async ()=> {
    
    const colRef = query(collection(db, "figuras"), orderBy("name"))

    try {
        const snapshot = await getDocs(colRef)
        const allFigures = snapshot.docs.map( rawDoc => {
            return{
                id: rawDoc.id,
                ...rawDoc.data()
            }
        })
        return allFigures
        
    } catch (error) {
        console.log("No se pueden mostrar las figuras")
    }
}



const getFiguresByCategory = async (categoriaId)=> {
    
    const colRef = query(collection(db, "figuras"), where("category", "==", categoriaId ))

    try {
        const snapshot = await getDocs(colRef)
        const figuresByCategory = snapshot.docs.filter( rawDoc => {
            return{
                id: rawDoc.id,
                ...rawDoc.data()
            }
        })
        return figuresByCategory
        
    } catch (error) {
        console.log("No se pueden mostrar las figuras")
    }
}


const getNewFigures = async () => {

    const colRef = query(collection(db, "figuras"), where("isNew", "==", true))

    try {
        const snapshot = await getDocs(colRef)
        const newFigures = snapshot.docs.map( rawDoc => {
            return {
                id: rawDoc.id,
                ...rawDoc.data()
            }
        })
        return newFigures

    } catch (error) {
        console.log("No se pueden mostrar las figuras recién añadidas")
    }
}



export { getFigures, getFiguresByCategory, getNewFigures }


