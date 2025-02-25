import axios from "axios";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post("https://paytm-basic-clone-backend-1.onrender.com/user/signin", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/Dashboard");
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Error signing in. Please check your credentials and try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
    <div className=" rounded-lg bg-white  flex items-center justify-center bg-gray-100 p-6">
      <div className="rounded-lg bg-white  w-full max-w-md text-center p-6 shadow-lg border border-gray-300">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={(e) => setUsername(e.target.value)} placeholder={"harshit@gmail.com"} label={"Email"} />
        <InputBox onChange={(e) => setPassword(e.target.value)} placeholder={"Enter Password"} label={"Password"} />
        <div className="pt-6">
          <Button label={"Sign in"} onClick={handleSignIn} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
  
  );
};
