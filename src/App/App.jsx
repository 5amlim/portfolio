import { useRef} from 'react'
import { useInView } from "framer-motion";
import NavBar from "../Components/NavBar";
import Introduction from "../Components/Introduction";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import More from '../Components/More';
import './App.css'
import Testimonial from '../Components/Testimonial';


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}


export default function App () {
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



  return(
    <div>

      <div ref={topPart} className="main-content bg-gradient-to-r from-orange-400 via-sky-800 to-indigo-400 bg-cover bg-center bg-opacity-75 bg-blur w-screen">
        {/* navbar */}
        <NavBar scrollToSection={scrollToSection} about={about} projects={projects} contact={contact} testimonial={testimonial}/>
          
        
        {/* top part */}
        <div className="bg-cover bg-center bg-opacity-75 bg-blur h-screen w-screen" >
          <br></br>
          
          

            <Section>
              <Introduction />
            </Section> 


          <br></br>
          <br></br>

          <div ref={about} className="about">
            <Section>
              <About/>
            </Section>
          </div>

          <div ref={projects} className="projects">
            <Section>
              <Projects /> 
            </Section>
          </div>

          <div ref={contact} className="contacts">
            <Section>
              <Contact Section={Section}/>
            </Section>
          </div>

          <div ref={testimonial} className="testimonial">
            <Section>
              <Testimonial/>
            </Section>
          </div>

          <div ref={contact} className="more">
            <Section>
              <More/>
            </Section>
          </div>
        
        </div>     
      </div>
      <Footer scrollToSection={scrollToSection} topPart={topPart}/>
    </div>
  )
}