import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

export default function Introduction () {

    return(
        <div className="text-center components">
            <motion.img
            src="https://i.imgur.com/1r18vie.jpg"
            className="rounded-full w-32 mb-4 mx-auto shadow-xl"
            alt="Avatar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            />

            <motion.p initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.3, type: "tween"}} className="text-base text-teal-50">HELLO</motion.p>
            <motion.p initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 200 }} className="text-5xl text-teal-50">I am Sam Hay.</motion.p>


            <p className="text-teal-100 text-xl">
            <Typewriter
                options={{
                strings: ['Software Engineer', 'Full-stack Web Developer', 'Animal Lover'],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 20,
                pauseFor: 1500,
                }}
                />
                
                Los Angeles, CA 
            </p>
            <br></br>
            <br></br>
            <br></br>
            {/* arrow */}
            <svg className="arrows">
                    <path className="a1" d="M0 0 L30 32 L60 0"></path>
                    <path className="a2" d="M0 20 L30 52 L60 20"></path>
                    <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
    </div>
    )
}