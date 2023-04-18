import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
   apiKey: "AIzaSyAiWfXaFQAqmzkYlsqG46nqp7dIP9b6cMs",
  authDomain: "edtech-f021e.firebaseapp.com",
  projectId: "edtech-f021e",
  storageBucket: "edtech-f021e.appspot.com",
  messagingSenderId: "970217042662",
  appId: "1:970217042662:web:3b42ed2f75797ea26fc127",
  measurementId: "G-FJP4P7ZL2L"
   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
// export const db = getFirestore(app)
// export {auth }

export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };
export const initFirebase = () => {
  return app ;
}
