import 'flowbite';
import '../App/App.css'
import React, { useRef, useState } from 'react';
import { Sam } from '../Utils/Data';
import emailjs from 'emailjs-com';



export default function Contact () {
    const [successMessage, setSuccessMessage] = useState(null)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        setSuccessMessage("Email sent successfully!");
        setTimeout(() => {
            setSuccessMessage(null);
        }, 3000);

        emailjs.sendForm('service_xf05e6p', 'template_q30u53v', form.current, 'bec8wIn8FMgAK44c3')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    


    return (
        <div className="components">
            <p className="text-center text-5xl text-black px-2">
            Get in touch
            </p>
            <hr className="w-48 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                {/* left */}
                <div className="">
                {/* content here */}



                <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <br></br>
                    <br></br>
                    <div className="flex flex-col items-center pb-10">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://i.imgur.com/gpSFTPD.jpg" alt="Sam Hay"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sam Hay</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
                        
                        <div className="contact-card justify-left flex mt-4 space-x-3 md:mt-6">
                            <div className="contact-card text-left items-center px-4 py-2 text-sm font-medium text-black bg-gray-100 rounded-lg border-black dark:bg-gray-300">
                                <div className="hover:text-violet-800 inline-flex">
                                <img className="w-5 h-5" alt="phone" src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/96/null/external-phone-communication-royyan-wijaya-detailed-outline-royyan-wijaya.png"></img>
                                <a href = "tel: {{Sam.phone}}"><p> &nbsp; &nbsp;{Sam.phone}</p></a>
                                </div>
                                <br></br>
                                <div className="hover:text-violet-800 inline-flex">
                                <img className="w-5 h-5" alt="email" src="https://img.icons8.com/ios/100/null/secured-letter--v1.png"></img>
                                <a href = "mailto: {{Sam.email}}"><p> &nbsp; {Sam.email}</p></a>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Resume</p>
                        <a href={Sam.resume} target="_blank" rel="noopener noreferrer" className="social-wrapper text-gray-400 hover:text-gray-900 dark:hover:text-white ">
                            <img alt="resume" src="https://img.icons8.com/carbon-copy/100/null/resume.png" className="w-10 h-10 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"></img>
                            <p className="hide-social">VIEW</p>
                        </a>
                    </div>
                </div>



                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-64 justify-center h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                    </div>
                    <div className="flex items-center justify-center mt-4 space-x-6 sm:justify-center md:mt-0 overflow-x-scroll mx-0">
                        <br></br>

                        <a href={Sam.twitter} target="_blank" rel="noopener noreferrer" className="social-wrapper text-gray-400 hover:text-gray-900 dark:hover:text-white ">
                            <svg className="w-10 h-10 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" width="144" height="144" viewBox="0 0 48 48"> <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
                            <p className="hide-social">Twitter</p>
                        </a>
                        <a href={Sam.instagram} target="_blank" rel="noopener noreferrer" className="social-wrapper text-gray-400 hover:text-violet-700 dark:hover:text-white">
                            <svg className="w-9 h-9 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                            <p className="hide-social">Instagram</p>
                        </a>
                        <a href={Sam.github} target="_blank" rel="noopener noreferrer" className="social-wrapper text-gray-400 hover:text-purple-900 dark:hover:text-white">
                            <svg className="w-9 h-9 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                            <p className="hide-social">Github</p>
                        </a>
                        <a href={Sam.linkedin} target="_blank" rel="noopener noreferrer" className="social-wrapper text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-10 h-10 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" width="144" height="144" viewBox="0 0 48 48"> <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path></svg>
                            <p className="hide-social">LinkedIn</p>
                        </a>
                    
                    </div>
                    <div className="sm:hidden">
                    <br></br>
                    <hr></hr>
                    </div>
                </div>
                {/* right */}
                <div className="">

                <div className="email-form mx-auto w-full h-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                        <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">Send Me an Email</h5>
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input name="name" type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Full Name" required>
                            </input>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
                            </input>
                        </div>
                        <div>
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea name="message" placeholder="Message here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                            </textarea>
                        </div>
                        <br></br>
                        <button type="submit" className="w-full text-white bg-gradient-to-r from-violet-500/90 to-blue-900 rounded-lg hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center">Submit</button>
                        <p className="text-center text-green-500 ">{successMessage}</p>
                    </form>
                </div>

                </div>
                    <br></br>
                    <br></br>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}