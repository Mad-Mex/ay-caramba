import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";


//Firebase config
const firebaseConfig = {

  apiKey:  process.env.REACT_APP_API_KEY,
  authDomain: "ay-caramba-81083.firebaseapp.com",
  projectId: "ay-caramba-81083",
  storageBucket: "ay-caramba-81083.appspot.com",
  messagingSenderId: "357608027738",
  appId: "1:357608027738:web:147ee90a9a839afbdf8a63"

};

//Initialize firebase
const app = initializeApp(firebaseConfig);

//Database
export const db = getFirestore(app)