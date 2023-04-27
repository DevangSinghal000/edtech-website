
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCxv40cyjJUXNc_OzYLcKSBYIuyE-qkKBs",
  authDomain: "edup-2390f.firebaseapp.com",
  projectId: "edup-2390f",
  storageBucket: "edup-2390f.appspot.com",
  messagingSenderId: "514891882148",
  appId: "1:514891882148:web:66be011a8168b635271031",
  measurementId: "G-57TF17BQDP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);
export {app, auth, analytics}