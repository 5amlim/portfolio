import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import '../App/App.css'
import { ProjectData }  from "./Data";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  
function Image({ name }: { name: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 250);


    return (
        <section>

            <div className="screenshots mx-auto" ref={ref}>
            <img className="w-96"src={`${name.img}`} alt="Screenshot" />
            </div>
            <motion.div className="project"style={{ y }}>
                <p className="text-5xl text-violet-600" >{`#${name.name}`}</p>
                <div className="max-w-sm p-6 bg-white/80 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Description:</strong><br></br>{name.description}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Technologies used:</strong></p>
                    <div className="flex items-center justify-left mt-4 sm:justify-left md:mt-0 overflow-x-scroll mx-0">
                    {name.tech.map((tech)=>{return(tech)})}
                    </div>
                    <br></br>
                    { name.link?
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href={name.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-violet-500/90 to-blue-900 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Demo
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </motion.a>
                    : <div></div>} &nbsp;
                    <motion.a whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} href={name.github} target="_blank" rel="noopener noreferrer" className="float-right text-gray-500 hover:text-violet-900 dark:hover:text-white">
                        <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                        <span className="sr-only">GitHub Link</span></motion.a>
                </div>
                {/* <p className="float-right box-content bg-blue-400/80 h-auto w-80 text-black">{name.description}</p> */}
            </motion.div>
            {/* <motion.h2 className="text-main float-right box-content h-auto w-80 p-0box-decoration-clone  text-black" style={{ y }}>{name.description}</motion.h2> */}

        </section>
      );
    }
    
    export default function Projects () {

        
    return(
        <div className="components">
        <span  className="text-right float-right  text-5xl box-decoration-clone bg-gradient-to-r from-violet-500/90 to-blue-900 text-white px-2 ">
        My<br/>Projects
        </span>
        <div className="mx-auto">
        <motion.hr initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: 1.5 }} className="w-5 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        <motion.hr initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: 1.5 }} className="w-10 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        <motion.hr initial={{ x: -200 }} animate={{ x: 0 }} transition={{ delay: 1.5 }} className="w-20 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        <motion.hr initial={{ x: -400 }} animate={{ x: 0 }} transition={{ delay: 1.5 }} className="w-40 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        <motion.hr initial={{ x: -800 }} animate={{ x: 0 }} transition={{ delay: 1.5 }} className="w-80 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>

        </div>
        
        {ProjectData.map((image) => (
        <Image name={image} key={image.img} />
        ))}

        </div>
    )
}