import { useRef } from 'react'
import NavBar from "../Components/NavBar";
import Introduction from "../Components/Introduction";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import ScrollUp from "../Components/ScrollUp";
import More from '../Components/More';
import './App.css'
import Testimonial from '../Components/Testimonial';





export default function App() {
  const topPart = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)
  const testimonial = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }



  return (
    <div>

      <div ref={topPart} className="main-content bg-gradient-to-r from-orange-400 via-sky-800 to-indigo-400 bg-cover bg-center bg-opacity-75 bg-blur ">
        {/* navbar */}
        <NavBar scrollToSection={scrollToSection} about={about} projects={projects} contact={contact} testimonial={testimonial} />


        {/* top part */}
        <div className="bg-cover bg-center bg-opacity-75 bg-blur h-screen w-screen" >
          <br></br>




          <Introduction />



          <br></br>
          <br></br>

          <div ref={about} className="about">

            <About />

          </div>

          <div ref={projects} className="projects">

            <Projects />

          </div>

          <div className="more">

            <More />

          </div>

          <div ref={testimonial} className="testimonial">

            <Testimonial />

          </div>

          <div ref={contact} className="contacts">

            <Contact />

          </div>

        </div>
      </div>
      < ScrollUp scrollToSection={scrollToSection} topPart={topPart} />
    </div>
  )
}