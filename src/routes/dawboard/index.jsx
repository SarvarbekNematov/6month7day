import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Profile } from "./profile";

export const Dawboard = () => {
    return <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </>
}


export {Home , Profile}