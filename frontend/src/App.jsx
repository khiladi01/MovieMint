import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../page/home";
import Login from "../page/login";
import Registration from "../page/registration";

function App (){
   return(
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
    </Routes>
    </BrowserRouter>
    </>
   )
}

export default App