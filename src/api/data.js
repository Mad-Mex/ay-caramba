import { db } from "./firebase";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where } from "firebase/firestore";


//Function to get Figures

export const getFigures = async ()=> {
    
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



export const getFiguresById = async (id) => {
    const docRef = doc(db, "figuras", id)

    try {
        const docSnap = await getDoc(docRef)
        
        if(docSnap.exists()){
            return {
                id: id,
                ...docSnap.data()
            }
        } else {
            console.log("No se encontró la figura")
        }
        
    } catch (error) {
        console.log(error)     
    }
}


//Functions to get Pictures

export const getPictures = async ()=> {
    
    const colRef = query(collection(db, "cuadros"), orderBy("name"))

    try {
        const snapshot = await getDocs(colRef)
        const allPictures = snapshot.docs.map( rawDoc => {
            return{
                id: rawDoc.id,
                ...rawDoc.data()
            }
        })
        return allPictures
        
    } catch (error) {
        console.log("No se pueden mostrar los cuadros")
    }
}


export const getPicturesById = async (id) => {
    const docRef = doc(db, "cuadros", id)

    try {
        const docSnap = await getDoc(docRef)
        
        if(docSnap.exists()){
            return {
                id: id,
                ...docSnap.data()
            }
        } else {
            console.log("No se encontró el cuadro")
        }
        
    } catch (error) {
        console.log(error)     
    }
}











