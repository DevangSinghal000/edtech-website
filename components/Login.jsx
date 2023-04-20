import React from "react";
import { Checkbox, Input, useInput, Button, Spacer } from "@nextui-org/react";
import Image from 'next/image'
import mypic from "../public/register.jpg"



export default function Login() {
  const { value, reset, bindings } = useInput("");
  
  const validateEmail = (value) => {
    return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <div className="main-wrapper flex justify-evenly my-14">
    <div className="leftcol ">
    <Image 
    src= {mypic}
    width={600}
    height={600}
    />
    </div>
    <form className="w-4/12 register_form p-10 bg-gray-300 rounded-2xl">
      <div className="text-2xl font-bold text-center	">Login</div>
    <Input
          {...bindings}
          clearable
          shadow={false}
          onClearClick={reset}
          status={helper.color}
          color={helper.color}
          helperColor={helper.color}
          // helperText={helper.text}
          type="email"
          label="Email"
          fullWidth={true}
          placeholder="Enter your email"
          required={true}
          autoComplete
        /> <Spacer />
        
        <Input.Password
          clearable
          // color="warning"
          // initialValue="123"
          // helperText="Insecure password"
          type="password"
          label="Password"
          required={true}
          placeholder="Enter your password"
          fullWidth={true}
          
        /><Spacer />
        
        <div className="text-center	">Don't have an account? <a className="text-blue-600 font-bold" href="/register">Register</a></div><Spacer />
        <Button type="submit"
        css={{margin: 'auto'}}
        >Login</Button><Spacer />
    </form>
    </div>
  );
}
