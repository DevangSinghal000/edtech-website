
import { getAuth, signInWithusernameAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import { initFirebase } from "../../firebase";

   



export default function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const router = useRouter();
  const app = initFirebase();
   



const signIn = () => {
  const auth = getAuth();
  signInWithusernameAndPassword(auth, user.username, user.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      router.push('/code');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.location.reload();
    });
};
  
    return (
     <>
     <div>
    
     
<div className="h-screen flex" style={{ 
  background: "linear-gradient(rgba(2,2,2,.7), rgba(0,0,0,.7)), url(/edtech.png) center center",
  backgroundSize: "auto left center",
}}>
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
            <div 
                  className=" 
                  bg-black 
                  opacity-10 
                  inset-0 
                  z-0"
                  >

                  </div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
              <h1 className="text-white font-bold text-4xl font-sans">MindEdge</h1>
              <p className="text-white mt-1">Learn at your own pace, on your own schedule, and from anywhere in the world with MindEdge</p>
              <div className="flex justify-center lg:justify-start mt-6">
                  <a href="/" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center  space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <form className=" bg-gray-600 bg-opacity-50 rounded-md shadow-2xl p-5">
              <h1 className="text-cyan-600 font-bold text-2xl mb-1">Log IN</h1>
              <p className="text-sm font-normal text-cyan-600 mb-8">Please sign in to ascess app </p>
              <div className="flex items-center border-2 color:text mb-8 py-2 px-3 rounded-2xl">
                <svg  className="h-5 w-5 text-cyan-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input id="username" className=" pl-2 w-full outline-none border-none " type="username" name="username" placeholder="username Address"  onChange={event => setUser({ ...user, username: event.target.value })} />
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl bg-rgba(0,0,0,0) ">
                <svg  className="h-5 w-5 text-cyan-600 " viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input className="pl-2 w-full outline-none border-none  " type="password" name="password" id="password" placeholder="Password"  onChange={event => setUser({ ...user, password: event.target.value })} />
                
              </div>
              <button type="submit" onClick={signIn} className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 ">Login</button>
              
              
            </form>
            </div>
            
          </div>
      </div>
   
     </div>
     </>
    )
  }
  