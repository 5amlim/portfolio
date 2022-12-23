import NavBar from "../Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Contact from "../Components/Contact"
import Projects from "../Components/Projects";
import About from "../Components/About";
import Footer from "../Components/Footer";

export default function App () {
  return(
    <div className="bg-cover bg-center bg-opacity-75 bg-blur w-screen" style={{ backgroundImage: `url(./images/cover.jpg)` }}>
    <NavBar/>
    <Routes>
      <Route path='/' element={<About/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}