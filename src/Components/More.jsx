export default function More() {

    return(
        <div className="components">
            <br></br>
            <br></br>
            <p className="text-5xl">Professional Experience</p>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2022 - January 2023</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">General Assembly<br></br>Software Engineering Fellow</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        - Completed 480+ hour program on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies
                        <br></br>- Developed individual and group projects building full stack apps using vanilla JS and MERN
                        <br></br>- Debugging, Troubleshooting with peers
                    </p>
                    <a href="https://docs.google.com/document/d/1R7FVwXQkvP-qNXnVpGa3oxGP3hoaOQukBjyUVKQ2B0Y/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        My Resume <svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2021 – Present</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flow Health LLC<br></br>Operations Manager</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        - Responsible for management of employee performance including efficiency, recruitment, and training
                        <br></br>- Communicating and supporting senior officials about shifting company priorities and projects
                        <br></br>- Identifying challenges and solutions to improve productivity and ensure a smooth workflow
                        <br></br>- Lab Technician lead duties including LIS operation, CAP compliance, pre-analytic sample handling, RT-PCR processing, Sysmex blood panel analysis, and various rapid COVID testing instruments
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2018 – December 2019</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">University of California, Davis<br></br>Graduate Student Researcher</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        - Worked independently on a graduate school project titled “Amelioration of Smoke Taint in Wine”
                        <br></br>- Maintained and calibrated various advanced lab instruments including HPLC, GC-LCMS, etc.
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 2014 – December 2017</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Assumption University (Thailand)<br></br>Food Product Development Associate</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        - Developed innovative food products based on environmentally sustainable materials
                        <br></br>- Conducted and reviewed sensory/physical attribute evaluations, consumer behavior, and marketability
                    </p>
                </li>
            </ol>



        </div>
    )
}