import '../App/App.css'
import { useState, useEffect } from 'react'
import { motion } from "framer-motion";

export default function ScrollUp({ scrollToSection, topPart }) {

    const [showIcon, setShowIcon] = useState(false)

    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setShowIcon(true)
        } else {
            setShowIcon(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {showIcon ?
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 2 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className="scroll-up flex mt-4 space-x-6 justify-center sm:mt-0">
                    <motion.a whileHover={{ scale: 1.2 }} href="#" onClick={() => scrollToSection(topPart)} className="text-gray-500 hover:text-violet-900 dark:hover:text-white scrollToTop">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </motion.a>
                </motion.div>
                :
                <div></div>
            }
        </div>
    )
}