import React from 'react';
import Logo from "../static/logo_transparent.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <div style={{ fontFamily: "WiredMono, helvetica, sans-serif" }} className='flex flex-col md:flex-row text-center justify-between items-center font-semibold px-[2vw] bg-gray-50'>
            <div> 
                <img alt='not found' className='w-[30vw] md:w-[10vw]' src={Logo} /> 
            </div>  

            <div className='text-sm md:text-md mb-[5vh] md:mb-[0vh]'>
                Copyright © 2023 NEWAI. All rights reserved. This website is an AI-related news site.
            </div>

            <div className='flex gap-x-[15vw] mb-[15vh] md:mb-[0vh] md:gap-x-[2vw] text-2xl text-blue-800 md:text-blue-900'>

                <Link className='hover:underline hover:text-blue-500 transition-colors duration-300' to="">
                    <i className="fa-brands fa-tiktok" style={{color: "#757575;"}}></i>
                </Link>

                <Link className='hover:underline hover:text-blue-500 transition-colors duration-300' to="">
                    <i className="fa-brands fa-instagram" style={{color: "#8c8c8c;"}}></i>
                </Link>

                <Link className='hover:underline hover:text-blue-500 transition-colors duration-300' to="">
                    <i className="fa-brands fa-twitter" style={{color: "#7d7d7d;"}}></i>
                </Link>

                <Link className='hover:underline hover:text-blue-500 transition-colors duration-300' to="">
                    <i className="fa-brands fa-youtube" style={{color: "#a6a8ab;"}}></i>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Footer

