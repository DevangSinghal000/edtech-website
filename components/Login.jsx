import React, {useState} from "react";
import { useRouter } from "next/router";

import { Checkbox, Input, useInput, Button, Spacer } from "@nextui-org/react";
import Image from 'next/image'
import mypic from "../public/register.jpg"



export default function Login() {
  const { value, reset, bindings } = useInput("");

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const validateEmail = (value) => {
    return value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };

  const router = useRouter();
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

  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    // e.preventDefault();
    var passwordval = document.getElementById("password").value;
    var emailval = document.getElementById("email").value;

    // Check if the email and password match the expected values
    if (emailval === "Aaditya@gmail.com" && passwordval === "Aaditya@1234") {
      // alert("Credentials are correct. Redirecting to dashboard...");
      router.push("/Liveclass");
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);

      // You can redirect the user to the dashboard page here
    } else {
      alert("Incorrect credentials. Please try again.");
    }
  };
  return (
    <div className="main-wrapper flex justify-evenly my-14">
    <div className="leftcol ">
    <Image 
    src= {mypic}
    width={600}
    height={600}
    />
    </div>
    <form onSubmit={handleSubmit} className="w-4/12 register_form p-10 bg-gray-300 rounded-2xl">
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
          id="email"
          fullWidth={true}
          placeholder="Enter your email"
          required={true}
          // onChange={(e) => setEmail(e.target.value)}
          autoComplete
        /> <Spacer />
        
        <Input.Password
          clearable
          // color="warning"
          // initialValue="123"
          // helperText="Insecure password"
          type="password"
          label="Password"
          id="password"
          required={true}
          placeholder="Enter your password"
          fullWidth={true}
          // onChange={(e) => setPassword(e.target.value)}
          
        /><Spacer />
        
        <div className="text-center	">Don't have an account? <a className="text-blue-600 font-bold" href="/register">Register</a></div><Spacer />
        <Button type="submit"
        css={{margin: 'auto'}}
        >Login</Button><Spacer />
    </form>
    </div>
  );
}
