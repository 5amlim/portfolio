import { motion } from "framer-motion";

export default function Projects () {
    return(
        <>
        <span  class="text-right float-right text-5xl box-decoration-clone bg-gradient-to-r from-violet-500/90 to-blue-900 text-white px-2 ">
        Sam's<br></br>Projects
        </span>
        <div className="mx-auto">
        <motion.hr initial={{ x: -100 }} animate={{ x: 0 }} transition={{ delay: 1 }} className="w-10 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        <motion.hr initial={{ x: -200 }} animate={{ x: 0 }} transition={{ delay: 1 }} className="w-20 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        <motion.hr initial={{ x: -400 }} animate={{ x: 0 }} transition={{ delay: 1 }} className="w-40 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        <motion.hr initial={{ x: -800 }} animate={{ x: 0 }} transition={{ delay: 1 }} className="w-80 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></motion.hr>
        
        
        {/* <hr className="w-20 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></hr>
        <hr className="w-40 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></hr>
        <hr className="w-80 h-1 my-8 bg-gradient-to-r from-indigo-600 to-pink-500 text-white"></hr> */}
        </div>
        <p className='text-main'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
        <br></br>
        </>
    )
}