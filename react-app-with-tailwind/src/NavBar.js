import { motion } from "framer-motion";
import logo from './static/profile.png';
import './App.css';


function NavBar() {
    
    return (
            <div>
                <nav className="bg-black/50 backdrop-blur fixed md:ml-72 md:w-2/3 sm:w-full sm:ml-10 z-40 left-0 -translate-x-10 grayscale shadow-lg md:top-4 sm:top-0 opacity-100 transform animate ease-in-out duration-300 hover:top-4 hover:bg-white hover:grayscale-0 hover:opacity-100">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center">
                            <img className="w-10 h-10 mr-10 rounded-full" src={logo}></img>
                        </a>
                        <div className="md:ml-92 sm:ml-0 items-center justify-between w-full flex w-auto " id="navbar-sticky">
                            <ul className="flex flex-row">
                                <li>
                                    <a href="#aboutme" className="font-face-im text-gray-800 md:text-[15px] text-[12px] transform animate ease-in-out duration-300 hover:text-[18px]">About Me</a>
                                </li>
                                <li>
                                    <a href="#experience" className="ml-10 font-face-im text-gray-800 md:text-[15px] text-[12px] transform animate ease-in-out duration-300 hover:text-[18px]">Experience</a>
                                </li>
                                <li>
                                    <a href="#project" className="ml-10 font-face-im text-gray-800 md:text-[15px] text-[12px] transform animate ease-in-out duration-300 hover:text-[18px]">Projects</a>
                                </li>
                                <li>
                                    <a href="#contact" className="ml-10 mr-5 font-face-im text-gray-800 md:text-[15px] text-[12px] transform animate ease-in-out duration-300 hover:text-[18px]">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </nav>
            </div>
        );
}

export default NavBar;