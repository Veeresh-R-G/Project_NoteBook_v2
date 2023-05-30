
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection
} from 'firebase/firestore'

import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_DOMAIN,
    projectId: "project-notebook-dcc62",
    storageBucket: "project-notebook-dcc62.appspot.com",
    messagingSenderId: "165855502924",
    appId: process.env.REACT_APP_APPID,
    measurementId: "G-Y8FT9MHPWM"
};

//Init the firebase App
const app = initializeApp(firebaseConfig)


//Init services --> connect to db
export const dataBase = getFirestore(app);
export const auth = getAuth(app);

//Google Auth Provider
export const Googleprovider = new GoogleAuthProvider();
export const GithubProvider = new GithubAuthProvider();
//Collection reference
export const colRef = collection(dataBase, 'users')
console.log(colRef)
// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((res) => {
//             console.log(res._tokenResponse)
//         })
//         .catch((err => {
//             console.log(err);
//         }))
// }






//get the data

// getDocs(colRef)
//     .then((res) => {
//         // console.log(res.docs)
//     }

//     )
//     .catch(err => {
//         console.log(err);
//     })


// export default data;