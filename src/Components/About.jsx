import '../App/App.css'
import 'flowbite';
import { motion } from "framer-motion";

export default function About({Section}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
    return (
      <div>
        <motion.div  initial={{ x: -500 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
        <span class="text-5xl shadow-2xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
        About Me
        </span>
        </motion.div>
        <p className='text-main'>
          As a software developer, I am passionate about tackling algorithmically complex problems and exploring new applications of technology. 
          I thrive in team environments and have a natural aptitude for problem-solving. 
          With experience in both the healthcare industry and academia, I am driven to continuously learn and hone my skills in software development. 
          I am determined to utilize my skills and passion to incorporate emerging technologies to solve everyday problems and make a positive impact on the world.
        </p>
        <br></br>
        <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }} className='text-right'>
          <p className='text-3xl italic'>MY SKILLS</p>
          <p className='text-small text-gray-400 italic'>I love what I do and take great pride in what I do</p>
        </motion.div>
          <hr></hr>
          <br></br>
        <motion.div variants={container} initial="hidden" animate="show" className='skills flex justify-evenly overflow-x-scroll'>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/html-5--v1.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/css3.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/javascript--v1.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/fluency/144/null/python.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/plasticine/200/null/react.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/postgreesql.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/fluency/240/null/node-js.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/ios/250/null/django.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/ios/250/null/express-js.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/java-web-token.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/amazon-web-services.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/mongoose.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/heroku.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/google-cloud.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/nolan/96/api-settings.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/bootstrap.png"></motion.img>
          <motion.img variants={item} as="div" className='w-auto h-12 inline-block' src="https://img.icons8.com/color/240/null/tailwindcss.png"></motion.img>
        </motion.div>

        <br></br>
      </div>
        
    )
}