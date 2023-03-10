// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {initializeApp} from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyBipPzIwv1iaDfBeGqdwHXDVYX9NhY_9qc",
//   authDomain: "slack-clone-base.firebaseapp.com",
//   projectId: "slack-clone-base",
//   storageBucket: "slack-clone-base.appspot.com",
//   messagingSenderId: "859364855972",
//   appId: "1:859364855972:web:9ec49e2b122ec8b8211631",
//   measurementId: "G-GPLYRFTKQZ"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdWpuaU8kiAfxqDHdK-gKYs-DkbhXxlR8",
  authDomain: "slack-80008.firebaseapp.com",
  projectId: "slack-80008",
  storageBucket: "slack-80008.appspot.com",
  messagingSenderId: "35706979645",
  appId: "1:35706979645:web:47ecc5739078cb2ce07154",
  measurementId: "G-6J1F004SKE"
};



// initialize firebase here
const app=initializeApp(firebaseConfig)
const db = getFirestore(app);

//   const firebaseApp=firebase.initializeApp(firebaseConfig)
// //   const db = firebaseApp.firestore();
 const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;