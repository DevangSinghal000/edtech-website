import Navbar1 from '../../components/header'
import Footer from '../../components/footer'
import ConsoleWindow from '../../components/editor'
// import editorPage from '../../React-CodePen-Clone/src/components/App'
// import 'codemirror/lib/codemirror.css'
import React from "react";
// import dynamic from "next/dynamic";
// import "@uiw/react-textarea-code-editor/dist.css";
// // import ConsoleWindow from 




export default function code() {
    return (
     <>
     <div>
     <Navbar1/>
     <ConsoleWindow />
     
     <Footer />
     </div>
     </>
    )
  }
  