import { Route, Routes } from "react-router-dom";
import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

const LoogIn = () => {
    return <>
        <Routes>
            <Route path="/" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
    </>
}

export {LoogIn , SignIn , SignUp}