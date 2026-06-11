import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white text-center py-14 w-full ">
            <div className="flex flex-col items-center gap-2">
                <div className="text-2xl  text-gray-300">Developed by Prasanth with React, Chart.js, Tailwindcss</div>
                <div className="flex items-center gap-6">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex flex-col items-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mb-1">
                            <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.93 3.19 9.1 7.62 10.57.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.95-3.1.67-3.75-1.5-3.75-1.5-.51-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.65 1.23 3.29.94.1-.73.39-1.23.71-1.51-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.16-2.99-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.12 1.14.9-.25 1.87-.37 2.83-.37.96 0 1.92.12 2.83.37 2.16-1.44 3.11-1.14 3.11-1.14.61 1.57.23 2.73.11 3.02.72.78 1.16 1.77 1.16 2.99 0 4.3-2.62 5.25-5.11 5.52.4.34.76 1.01.76 2.03 0 1.47-.01 2.65-.01 3.01 0 .3.21.65.78.54C19.06 20.85 22.25 16.68 22.25 11.75 22.25 5.48 17.27.5 11 .5z" />
                        </svg>
                        <span className="text-sm">GitHub</span>
                    </a>

                    <a href="https://www.linkedin.com/in/prasanth0814/" target="_blank" rel="noreferrer" className="flex flex-col items-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="mb-1">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.062-1.868-3.062-1.868 0-2.154 1.459-2.154 2.965v5.701h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.839-1.562 3.037 0 3.6 2 3.6 4.594v5.601z" />
                        </svg>
                        <span className="text-sm">LinkedIn</span>
                    </a>
                </div>
                <div className="mt-2 text-2xl">Gmail: mpprasantmp2006@gmail.com</div>
            </div>
        </footer>
    )
}

export default Footer