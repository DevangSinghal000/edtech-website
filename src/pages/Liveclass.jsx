import Navbar1 from '../../components/header'
import Footer from '../../components/footer'
import Split from 'react-split';
import React, { useState } from "react";
import { Textarea, Spacer, Button } from '@nextui-org/react';


export default function Liveclass() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const executeCode = () => {
    try {
      let temp = "";
      const originalConsoleLog = console.log;
      console.log = (message) => {
        temp += message + "\n";
      };
      eval(input);
      console.log = originalConsoleLog;
      setOutput(temp);
    } catch (error) {
      setOutput(error.message);
    }
  };

  const clearOutput = () => {
    setOutput("");
  };
  
    return (
     <>
     <div>
     <Navbar1/>
     <Split className={`h-auto flex flex-row m-10`}>
     <iframe className='w-6/12' width="auto" height="auto" src="https://www.youtube.com/embed/W6NZfCO5SIk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <div className="block w-3/12">
      <Textarea 
      minRows={12}
      maxRows={12}
      fullWidth={true}
        bordered
        labelPlaceholder="Enter your code here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></Textarea> <Spacer />
      <Button color="success" auto onClick={executeCode}>Run</Button> </div> 
      <div className="block w-3/12">
      <Textarea
      minRows={12}
      maxRows={12}
      fullWidth={true}
        placeholder="Output will be displayed here"
        value={output}
        readOnly
      ></Textarea><Spacer />
      <Button color="warning" auto onClick={clearOutput}>Clear</Button>
    </div>
     </Split>
     <Footer />
     </div>
     </>
    )
  }
  