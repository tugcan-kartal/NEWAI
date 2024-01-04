import React, { useState } from 'react';
import Logo from "../static/logo_transparent.png";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }
  

  return (
    <div>

      {/* Navbar kodları buradan baslıyor */}
      <div className='fixed w-[100vw] top-0 texttwo uppercase tracking-wider leading-tight'>

            <div className="flex justify-between items-center text-xs font-semibold bg-gray-50 md:px-[2vw] px-[3vw] h-[7vh] border-b-[2px] border-gray-200">

              <div className='flex'>
                
                <Link className='flex items-center md:w-[10vw] md:h-[5vh] w-[45vw] h-[5vh] object-cover hover:opacity-80 transition-all duration-300' to="/newsview">
                  <div>
                    <img alt='not found' src={Logo} />
                  </div>
                </Link>

                <div className='md:flex hidden items-center pl-4 gap-x-8'>
                  <Link className='flex items-center gap-x-[0.5vw] hover:underline hover:text-blue-500 transition-colors duration-300' to="/newsview">
                    <div>AI NEWS</div>
                    <i className="fa-solid fa-newspaper text-blue-500"></i>
                  </Link>
                  <Link className='flex items-center gap-x-[0.5vw] hover:underline hover:text-blue-500 transition-colors duration-300' to="/talkwithai">
                    <div>TALK WITH AI</div>
                    <i className="fa-solid fa-robot text-blue-500"></i>
                  </Link>
                  {/* <Link className='flex items-center gap-x-[0.5vw] hover:underline hover:text-blue-500 transition-colors duration-300' to="security">
                    <div>HAVE FUN</div>
                    <i className="fa-solid fa-face-laugh-squint text-blue-500"></i>
                  </Link> */}
                </div>
                
              </div>


              <div className='flex gap-x-5'>
                
                  <Link to="/SignUp">
                    <div className='flex gap-x-2 hover:underline hover:text-blue-500 transition-colors duration-300 cursor-pointer'>
                      <div className='md:block hidden'>SIGN UP</div>
                    </div>
                  </Link>

                  <div className='bg-gray-400 px-[1px] h-[2vh] hidden md:block'></div>

                  <div onClick={openMenu} className='md:text-sm md:px-0 pr-[1vw] md:pr-[1vw] text-xl hover:underline hover:text-blue-500 transition-colors duration-300 cursor-pointer'>
                    <i className="fa-solid fa-bars" style={{color: "#000000;"}}></i>
                  </div>

              </div>

          </div>

      </div>
      {/* Navbar kodları burada bitiyor */}



      {/* Menü Kismi Kodlari Buradan Basliyor */}
      <div className={`fixed w-full h-full bg-white z-20 top-0 left-0 transform transition-transform ease-in-out duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        
      {/* Burası Navbar Kısmı */}
      <div className='fixed w-[100vw] top-0 texttwo uppercase tracking-wider leading-tight'>

            <div className="flex text-xs font-semibold bg-gray-50 md:px-[2vw] px-[3vw] h-[7vh] border-b-[2px] border-gray-200">

              <div className='flex justify-between items-center gap-x-[40vw] md:gap-x-[82vw]'>

                <Link className='flex items-center md:w-[10vw] md:h-[5vh] w-[45vw] h-[5vh] object-cover hover:opacity-80 transition-all duration-300' to="/">
                  <div>
                    <img alt='not found' src={Logo} />
                  </div>
                </Link>

                <div className='text-xl font-semibold cursor-pointer hover:text-blue-900 transition-all duration-300' onClick={closeMenu}>
                  <i className="fa-solid fa-x"></i>
                </div>
                
              </div>

            </div>

      </div>

      {/* Burası ise menün içerik kısmı tıklandıktan sonraki */}
      <div className="flex flex-col h-full justify-start mt-[15vh] ml-[5vw]">
          <Link className="text-3xl font-bold mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/newsview">Home</Link>
          <Link className="text-3xl font-bold mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/talkwithai">Talk With AI</Link>
          <Link className="text-3xl font-bold mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/newsview">News</Link>
          {/* <Link className="text-3xl font-bold mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/fun">Have Fun</Link> */}

          <div className='py-[0.5px] w-[80vw] my-[5vh] bg-black'></div>

          <Link className="text-lg font-normal mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/">Suggestions & Feedback</Link>
          <Link className="text-lg font-normal mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/ai">Privacy Policy</Link>
          <Link className="text-lg font-normal mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/news">Cookie Policy</Link>
          <Link className="text-lg font-normal mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/fun">About Us</Link>
          <Link className="text-lg font-normal mb-4 hover:underline hover:text-blue-500 transition-colors duration-300" to="/fun">Contact</Link>

          <div className='py-[0.5px] w-[80vw] my-[5vh] bg-black'></div>

          <div className='flex gap-x-[15vw] mb-[15vh] md:mb-[0vh] md:gap-x-[2vw] text-2xl text-black'>

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
      {/* Menü Kısmı Kodları Buraya Kadar */}

      </div>
    </div>
  )
}

export default Navbar