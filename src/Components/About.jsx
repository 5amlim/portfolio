import '../App/App.css'
import 'flowbite';
import { motion } from "framer-motion";

export default function About() {
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
      <div className="components">
        <motion.div  initial={{ x: -500 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }}>
        <span className="text-5xl shadow-2xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
        About Me
        </span>
        </motion.div>
        <br></br>
        <p className='text-main'>
        As a software developer, I am passionate about tackling algorithmically complex problems and exploring new applications of technology. I thrive in team environments and have a natural aptitude for problem-solving. With experience in both the healthcare industry and academia, I have a unique perspective on the importance of utilizing technology to improve people's lives. My experience in healthcare industry has given me insights into the real-world problems that arise in healthcare and the importance of reliable and efficient software solutions. My time in academia has sharpened my technical skills and my ability to think critically and creatively. I am driven to continuously learn and hone my skills in software development and to stay current with the latest trends and technologies. I am determined to utilize my skills and passion to incorporate emerging technologies to solve everyday problems and make a positive impact on the world.</p>
        <br></br>
        <motion.div initial={{ x: 500 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }} className='text-right'>
          <p className='text-3xl italic'>MY SKILLS</p>
          <p className='text-small text-gray-400 italic'>I love what I do and take great pride in everything I do</p>
        </motion.div>
          <hr></hr>
          <br></br>
        
        <motion.div variants={container} initial="hidden" animate="show" className='skills flex justify-evenly overflow-x-scroll mx-0'>
          
          <div className="flex">
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ' src="https://img.icons8.com/color/240/null/html-5--v1.png"></motion.img>
            <p className="hide-text">HTML</p>
            </div>
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/css3.png"></motion.img>
            <p className="hide-text">CSS</p>
            </div>
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/javascript--v1.png"></motion.img>
            <p className="hide-text">JavaScript</p>
            </div>
          </div>
          
          <div className="flex">
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/fluency/144/null/python.png"></motion.img>
            <p className="hide-text">Python</p>
            </div>
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/plasticine/200/null/react.png"></motion.img>
            <p className="hide-text">React</p>
            </div>
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/postgreesql.png"></motion.img>
            <p className="hide-text">Esql</p>
            </div>
          </div>

          <div className="flex ">
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/fluency/240/null/node-js.png"></motion.img>
            <p className="hide-text">Node.js</p>
            </div>
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/ios/250/null/django.png"></motion.img>
            <p className="hide-text">Django</p>
            </div>
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"></motion.img>
            <p className="hide-text">MongoDB</p>
            </div>
          </div>

          <div className="flex">
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/ios/250/null/express-js.png"></motion.img>
            <p className="hide-text">Express</p>
            </div>
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/java-web-token.png"></motion.img>
            <p className="hide-text">JWT</p>
            </div>
            <div className="image-wrapper">
            <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/nolan/96/api-settings.png"></motion.img>
            <p className="hide-text">API</p>
            </div>
          </div>
          {/* <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/amazon-web-services.png"></motion.img> */}
          {/* <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/mongoose.png"></motion.img> */}
          {/* <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/heroku.png"></motion.img> */}
          {/* <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/google-cloud.png"></motion.img> */}
          {/* <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/bootstrap.png"></motion.img> */}
          {/* <motion.img variants={item} as="div" className='w-auto h-12 inline-block transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/tailwindcss.png"></motion.img> */}
        </motion.div>

        <br></br>
      </div>
        
    )
}