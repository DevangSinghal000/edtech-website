import React, { useState } from "react";
import { Textarea, Spacer, Button } from '@nextui-org/react';

function Console() {
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
    <div className="m-20 flex">
    <div className="block w-4/6">
      <Textarea 
      minRows={12}
      maxRows={12}
      fullWidth={true}
        bordered
        labelPlaceholder="Enter your code here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></Textarea> <Spacer />
      <Button color="success" auto onClick={executeCode}>Run</Button> </div> <Spacer />
      <div className="block w-2/6">
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
    </div>
  );
}

export default Console;
