import Typewriter from 'typewriter-effect';
import '../App/App.css'

export default function About () {
    return (
      <>
<div className="bg-cover bg-center bg-opacity-75 bg-blur h-screen w-screen" >
        <br></br>
    <div class="text-center">
      <img
        src="./images/samhay2.jpg"
        class="rounded-full w-32 mb-4 mx-auto shadow-lg"
        alt="Avatar"
      />
      <h5 class="text-xl font-medium leading-tight mb-2">Sam Hay</h5>
      <p class="text-gray-800">
        <Typewriter
            options={{
            strings: ['Software Engineer', 'Full-stack Web Developer'],
            autoStart: true,
            loop: true,
            }}
            />
            ⍚<br></br>
             Los Angeles, CA </p>
    </div>
</div>

<svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>

            
      </>
        
    )
}