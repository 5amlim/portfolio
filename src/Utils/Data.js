import { motion } from "framer-motion";

export const Sam = {
  resume: "https://drive.google.com/file/d/1BCa8AfCzmKUM4Rn2Yg4n4_-uKbuwpUyc/view?usp=sharing",
  picture: "https://i.imgur.com/gpSFTPD.jpg",
  instagram: "https://www.instagram.com/5amlim/",
  linkedin: "https://www.linkedin.com/in/samnanghay/",
  twitter: "https://twitter.com/5amlim",
  github: "https://github.com/5amlim",
  logo: "https://i.imgur.com/7C6HdFd.png",
  email: "snh68@yahoo.com",
  phone: "(415)-340-9153"


}


export const Data = [
  {
    id: 1,
    image: "https://i.imgur.com/zZ1qbTF.png",
    title: "Sidharth Nand",
    description:
      "I had the pleasure of working with Sam in class and can highly recommend him for any opportunity in the field of software engineering. Sam consistently demonstrated a strong work ethic and a proactive approach to learning new technologies. He was always willing to go above and beyond to complete assignments and he was a valuable resource for anyone seeking help with a project. In addition, Sam impressed me with his resourcefulness and motivation. He always found a way to solve problems and he did so with determination and drive. I have no doubt that Sam will excel as a software engineer and I wholeheartedly recommend him.",
  },
  {
    id: 2,
    image: "https://i.imgur.com/9DQTqQu.png",
    title: "Vy Nguyen",
    description:
      "I had the pleasure of meeting Sam during our time in the General Assembly cohort, and I couldn't recommend him more highly. Sam is an extremely studious individual who consistently went above and beyond in class, always striving to deepen his understanding of the material. He is also an exceptional leader, always willing to lend a helping hand to his classmates and able to effectively guide group projects to successful completion. One of the things I most admire about Sam is his ability to stay focused and complete his own work first, but always make himself available to assist others. He never hesitated to put in the extra time and effort required to excel in the coursework. Anyone would be lucky to have Sam on their team!",
  },
  {
    id: 3,
    image: "https://i.imgur.com/3GI27vZ.png",
    title: "Zack Fiddler",
    description:
      "I had the opportunity to work with Sam at General Assembly and I can confidently say that he is a top-performing software engineer. He has a proven track record of managing time effectively, meeting tight deadlines and delivering exceptional results. Sam's full stack skills are outstanding and he consistently produces high quality and well-designed systems. He is a team player who is always willing to assist and share his knowledge. Sam's leadership skills are also commendable, as he successfully took on project management roles and contributed to the success of our team. Furthermore, his focus level and attention to detail are exceptional. I highly recommend Sam for any software engineering role, he will be a valuable asset to any team.",
  },
  {
    id: 4,
    image: "https://i.imgur.com/kR6YP0B.jpg",
    title: "Anthony Marra",
    description:
      "While Sam and I were working together it always impressed me how on top of things he was. Sam is committed to studying and practicing new concepts until he's able to master them. He was easily one of the most kind and helpful people in our class, because if someone didn’t understand something or they were falling behind he would always reexplain concepts to them, or help them with bug fixes. Sam would be an incredible member of any team",
  },
  {
    id: 5,
    image: "https://i.imgur.com/ESEaGY1.png",
    title: "Joseph King",
    description:
      "Sam is highly personable and engaging! I worked alongside Sam on several projects utilizing Express, React, and/or Django frameworks. It's always a pleasure to tackle complex problems with Sam because he has a very positive and curious outlook! It was always surprising to see him come up with elegant solutions and break down the research and steps he took to arrive at an answer in a simple way. I enjoyed brainstorming and mob-coding alongside Sam and wish him the best on his career path! I highly recommend Sam, if not for his technical skills, for his creative and curious troubleshooting, passion for research and learning, and engaging personality he brings in a team environment!",
  },
];
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const tech = {
  HTML: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0 ' src="https://img.icons8.com/color/240/null/html-5--v1.png"></motion.img>
    <p className="hide-text text-xsm">HTML</p>
  </div>,
  CSS: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/css3.png"></motion.img>
    <p className="hide-text text-xsm">CSS</p>
  </div>,
  JavaScript: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/javascript--v1.png"></motion.img>
    <p className="hide-text text-xsm">JavaScript</p>
  </div>,
  Python: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/fluency/144/null/python.png"></motion.img>
    <p className="hide-text text-xsm">Python</p>
  </div>,
  React: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/plasticine/200/null/react.png"></motion.img>
    <p className="hide-text text-xsm">React</p>
  </div>,
  SQL: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/postgreesql.png"></motion.img>
    <p className="hide-text text-xsm">SQL</p>
  </div>,
  NodeJS: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/fluency/240/null/node-js.png"></motion.img>
    <p className="hide-text text-xsm">Node.js</p>
  </div>,
  Django: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/ios/250/null/django.png"></motion.img>
    <p className="hide-text text-xsm">Django</p>
  </div>,
  MongoDB: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png"></motion.img>
    <p className="hide-text text-xsm">MongoDB</p>
  </div>,
  Express: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/ios/250/null/express-js.png"></motion.img>
    <p className="hide-text text-xsm">Express</p>
  </div>,
  JWT: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/java-web-token.png"></motion.img>
    <p className="hide-text text-xsm">JWT</p>
  </div>,
  API: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/nolan/96/api-settings.png"></motion.img>
    <p className="hide-text text-xsm">API</p>
  </div>,
  Materialize: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://colinstodd.com/images/posts/matcss-min.png"></motion.img>
    <p className="hide-text text-xsm">Materialize</p>
  </div>,
  Bootstrap: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/bootstrap.png"></motion.img>
    <p className="hide-text text-xsm">Bootstrap</p>
  </div>,
  Tailwind: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/tailwindcss.png"></motion.img>
    <p className="hide-text text-xsm">Tailwind</p>
  </div>,
  AWS: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/amazon-web-services.png"></motion.img>
    <p className="hide-text text-xsm">AWS</p>
  </div>,
  GCloud: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/240/null/google-cloud.png"></motion.img>
    <p className="hide-text text-xsm">GOauth</p>
  </div>,
  Flask: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/ios-filled/500/null/flask.png"></motion.img>
    <p className="hide-text text-xsm">Flask</p>
  </div>,
  Angular: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/144/angularjs.png"></motion.img>
    <p className="hide-text text-xsm">Angular</p>
  </div>,
  Typescript: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/fluency/48/typescript--v1.png"></motion.img>
    <p className="hide-text text-xsm">TypeScript</p>
  </div>,
  Redux: <div className="image-wrapper">
    <motion.img variants={item} as="div" className='h-9 inline-block transition-all duration-300 filter grayscale hover:grayscale-0' src="https://img.icons8.com/color/480/redux.png"></motion.img>
    <p className="hide-text text-xsm">Redux</p>
  </div>,
}

export const ProjectData = [
  {
    name: "FoodToGo (in progress)",
    img: "https://i.imgur.com/Z7EUwdw.png",
    tech: [tech.React, tech.Redux, tech.JavaScript, tech.Tailwind],
    description: "FoodToGo is a powerful and optimized SPA food delivery app built with React and Redux Toolkit. Styled by Tailwind. API by ChowNow.",
    link: "",
    github: "https://github.com/5amlim/react"
  },
  {
    name: "Basil",
    img: "https://i.imgur.com/cHqqiP6.png",
    tech: [tech.Angular, tech.MongoDB, tech.Express, tech.NodeJS, tech.AWS, tech.Typescript],
    description: "Introducing Basil - A MEAN Stack Journal Sharing App. Basil is a captivating journal sharing application, powered by the MEAN (MongoDB, Express.js, Angular, Node.js) stack. With Angular at its core, Basil's intuitive user interface provides a smooth and delightful journaling experience. Express.js and Node.js combine to create a robust backend, ensuring secure data handling and lightning-fast responses. Basil is deployed on AWS S3 for the Angular app and AWS Elastic Beanstalk for the server. Enjoy a reliable and efficient journal sharing experience with the power of AWS's cloud infrastructure. So, immerse yourself in the world of journaling with Basil - where the MEAN stack's synergy meets AWS's exceptional hosting capabilities, creating an unmatched platform for sharing your cherished memories and creative narratives. Styled by Angular Material. If you don't feel like signing up, use these credentials. Login: guest@gmail.com, Password: Guest1234!",
    link: "http://basil-mean.s3-website-us-west-2.amazonaws.com/",
    github: "https://github.com/5amlim/basil"
  },
  {
    name: "Pixel Perfect",
    img: "https://i.imgur.com/oh2paA6.png",
    tech: [tech.Python, tech.Django, tech.SQL, tech.Materialize, tech.AWS],
    description: "With Pixel Perfect, you can share your photos and connect with friends and followers from around the world. Our platform is easy to use and offers a variety of features to enhance your social media experience. You can create a profile, share your photos, and engage with others by following other profiles, and liking or commenting on their photos.  If you don't feel like signing up, use these credentials. Login: guest@gmail.com, Password: Guest1234!",
    link: "https://shielded-citadel-06625.herokuapp.com/about/",
    github: "https://github.com/Pixel-Perfect1/PixelPerfect"
  },
  {
    name: "FOODMoji",
    img: "https://i.imgur.com/1QKdAC9.png",
    tech: [tech.JavaScript, tech.React, tech.MongoDB, tech.NodeJS, tech.JWT],
    description: "A MERN-stack single-page application (SPA) grocery shopping website. If you don't feel like signing up, use these credentials. Login: guest@gmail.com, Password: Guest1234!",
    link: "https://foodmoji.herokuapp.com/",
    github: "https://github.com/5amlim/foodmoji"
  },
  {
    name: "My Music",
    img: "https://i.imgur.com/tEdwIXr.png",
    tech: [tech.Python, tech.Django, tech.SQL, tech.Materialize, tech.AWS],
    description: "Music session tracking website. Photo upload using AWS.",
    link: "",
    github: "https://github.com/5amlim/mymusic_app"
  },
  {
    name: "Recipe Journal",
    img: "https://i.imgur.com/IbXRV9c.png",
    tech: [tech.JavaScript, tech.MongoDB, tech.NodeJS, tech.Bootstrap, tech.GCloud],
    description: "A public MEN-stack website to share recipes and interact with creaters by leaving comments and ratings.",
    link: "https://recipe-journal-5amlim.herokuapp.com/recipes",
    github: "https://github.com/5amlim/project2"
  },
  {
    name: "Memory Game",
    img: "https://i.imgur.com/DY9xeAu.png",
    tech: [tech.JavaScript, tech.CSS, tech.HTML],
    description: "There are many variations of memory game on the web. For my first project, I wanted to make this game aesthetically pleasing to make it a little more interesting. Inspired by pixel art.",
    link: "https://5amlim.github.io/project-1/",
    github: "https://github.com/5amlim/project-1"
  },
  {
    name: "Tip Calculator",
    img: "https://i.imgur.com/0y3yTUw.png",
    tech: [tech.Python, tech.CSS, tech.HTML, tech.Flask, tech.Tailwind],
    description: "Simple tip calculator.",
    link: "",
    github: "https://github.com/5amlim/tip-calculator/"
  },
  {
    name: "React Portfolio",
    img: "https://i.imgur.com/Z6M2mcX.png",
    tech: [tech.React, tech.CSS, tech.Tailwind],
    description: "(This Website). Single page React portfolio.",
    link: "https://5amlim.github.io/portfolio/",
    github: "https://github.com/5amlim/portfolio"
  },
  {
    name: "My Blogger (In Progress)",
    img: "https://i.imgur.com/KIEc6N1.png",
    tech: [tech.Python, tech.Django, tech.SQL, tech.Materialize],
    description: "Welcome to My Blogger website! Our mission is to provide a platform for users to express themselves through blogging and sharing their interests with like-minded individuals. We strive to create a community where users can connect and discover new content, whether it be through images, videos, or text. Our website is designed to be user-friendly and easy to navigate, with a simple yet sleek interface. We value creativity and individuality, and encourage users to explore their passions and share their unique perspectives. At our core, we believe in the power of self-expression and the importance of community. We hope that our website will provide a space for individuals to connect, learn, and grow together. Thank you for joining us on this journey!",
    link: "",
    github: "https://github.com/5amlim/my_blogger"
  },
]