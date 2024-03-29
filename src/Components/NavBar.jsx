import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion";
import { Sam } from '../Utils/Data';
import 'flowbite';
import '../App/App.css'

export default function NavBar({ scrollToSection, projects, about, contact, testimonial }) {

  return (
    <Disclosure as="nav" className="NavBar sticky top-0 bg-gray-800/70">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={Sam.logo}
                    alt="logo"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={Sam.logo}
                    alt="logo"
                  />
                </div>
                {/* Nav Items */}

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <button
                      className=" text-white hover:bg-gray-700 hover:text-white hover:cursor-pointer
                            px-3 py-2 rounded-md text-sm font-medium"

                      onClick={() => scrollToSection(about)}
                    >
                      <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        Sam Hay
                      </motion.p>
                    </button>

                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-center">
                    <button
                      as="div"
                      className=" text-white hover:bg-gray-700 hover:text-white hover:cursor-pointer
                            px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => scrollToSection(projects)}
                    >
                      <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        Projects
                      </motion.p>
                    </button>

                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-center">
                    <button
                      as="div"
                      className=" text-white hover:bg-gray-700 hover:text-white hover:cursor-pointer
                            px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => scrollToSection(testimonial)}
                    >
                      <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        Testimonials
                      </motion.p>
                    </button>

                  </div>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 justify-center">
                    <button
                      as="div"
                      className=" text-white hover:bg-gray-700 hover:text-white hover:cursor-pointer
                            px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => scrollToSection(contact)}
                    >
                      <motion.p whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                        Contact
                      </motion.p>
                    </button>

                  </div>
                </div>


              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="NavBar relative ml-3">
                  <div>
                    <Menu.Button type="button" data-popover-target="popover" data-popover-placement="bottom" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      {/* Popover */}
                      <div data-popover id="popover" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-100 transition-opacity duration-300 border border-gray-200 rounded-lg shadow-sm opacity-80 dark:text-gray-400 dark:border-gray-600 bg-black/40">

                        <div className="px-3 py-2 border-b border-gray-200/50 rounded-t-lg border-gray-500 bg-gradient-to-r from-indigo-400/50 via-blue-800 to-purple-400/50 ">
                          <h3 className="font-semibold text-white">Connect With Me!</h3>
                        </div>
                        <div className="px-3 py-2">
                          <p>LinkedIn <br /> GitHub<br /> Resume</p>
                        </div>

                      </div>

                      <span className="sr-only">Open user menu</span>
                      <motion.img
                        className="h-8 w-8 rounded-full"
                        src={Sam.picture}
                        alt="sam hay"
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.8 }}

                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {/* Top Right Links */}
                    <Menu.Items className=" absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white/60 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <p align="center">
                            <a
                              href={Sam.instagram}
                              target="_blank" rel="noopener noreferrer"
                              className="bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                            >
                              <motion.svg whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} width="20%" height="20%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                              </motion.svg>
                              Instagram
                            </a>
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p align="center">
                            <a
                              href={Sam.linkedin}

                              target="_blank" rel="noopener noreferrer"
                              className="bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                            >
                              <motion.svg whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} width="20%" height="20%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                              </motion.svg>
                              LinkedIn
                            </a>
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p align="center">
                            <a
                              href={Sam.github}
                              target="_blank" rel="noopener noreferrer"
                              className="bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                            >
                              <motion.svg whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} width="20%" height="20%" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                              </motion.svg>
                              GitHub
                            </a>
                          </p>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p align="center">
                            <a
                              href={Sam.resume}
                              target="_blank" rel="noopener noreferrer"
                              className="bg-gray-100 block px-4 py-2 text-sm text-gray-700"
                            >
                              <motion.svg whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }} width="20%" height="20%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48z" />
                              </motion.svg>
                              My Resume
                            </a>
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {/* Hamburger Menu Items */}
          <Disclosure.Panel className="sm:hidden">
            <motion.div initial={{ x: "100%" }} animate={{ x: "calc(20vw - 20%)" }} className="space-y-1 px-2 pt-2 pb-3">

              <Disclosure.Button
                as="a"
                onClick={() => scrollToSection(about)}
                className=" text-white hover:bg-gray-700 hover:text-white
                      block px-3 py-2 rounded-md text-base font-medium"
              >
                <motion.p whileHover={{ scale: 1.1, x: 25 }} whileTap={{ scale: 0.9 }}>Sam Hay</motion.p>
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                onClick={() => scrollToSection(projects)}
                className=" text-white hover:bg-gray-700 hover:text-white
                      block px-3 py-2 rounded-md text-base font-medium"
              >
                <motion.p whileHover={{ scale: 1.1, x: 25 }} whileTap={{ scale: 0.9 }}>Projects</motion.p>
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                onClick={() => scrollToSection(testimonial)}
                className=" text-white hover:bg-gray-700 hover:text-white
                      block px-3 py-2 rounded-md text-base font-medium"
              >
                <motion.p whileHover={{ scale: 1.1, x: 25 }} whileTap={{ scale: 0.9 }}>Testimonials</motion.p>
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                onClick={() => scrollToSection(contact)}
                className=" text-white hover:bg-gray-700 hover:text-white
                      block px-3 py-2 rounded-md text-base font-medium"
              >
                <motion.p whileHover={{ scale: 1.1, x: 25 }} whileTap={{ scale: 0.9 }}>Contact</motion.p>
              </Disclosure.Button>


            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}