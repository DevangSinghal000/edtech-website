import '@/styles/globals.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
