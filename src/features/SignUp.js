import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig.js';
import Logo from "../static/logo_transparent.png";
import AiWallpaper from "../static/ai-walpaper.jpg";

const SignUp = () => {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const registerUser = async (event) => {
    event.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email.current.value, password.current.value);
      // Kayıt işlemi başarıyla tamamlandıktan sonra yönlendirme
      navigate('/SignIn');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className='flex h-[100vh]'>
        <div className='w-[40vw]'>
          <img className='h-[100vh]' src={AiWallpaper} alt='not found'/>
        </div>

        <div className='flex flex-col w-60vw ml-[7vw] mt-[5vh]'>
          <div className='w-[10vw]'>
            <Link to="">
              <img src={Logo} alt='not found'/>
            </Link>
          </div>
          <div className='font-bold text-4xl mb-[5vh]'>
            Create an account
          </div>

          <form onSubmit={registerUser}>
            <div className='text-sm'>Username</div>
            <input className='w-[35vw] h-[5vh] px-[1vw] border-[1px] border-black mt-[1vh] mb-[5vh]' required ref={username} />
            <br />

            <div className='text-sm'>Email address</div>
            <input className='w-[35vw] h-[5vh] px-[1vw] border-[1px] border-black mt-[1vh] mb-[5vh]' required ref={email} type="email" />
            <br />

            <div className='text-sm'>Password</div>
            <input className='w-[35vw] h-[5vh] px-[1vw] border-[1px] border-black mt-[1vh] mb-[5vh]' required ref={password} type='password' />
            <br />

            <button className='w-[35vw] h-[5vh] px-[1vw] border-[1px] text-white bg-black border-white mt-[1vh] mb-[5vh] hover:bg-blue-600 transition-all duration-300 cursor-pointer' type='submit'>
              Sign Up
            </button>
          </form>

          <div className='flex gap-x-[2vw]'>
            <div>Already have an account?</div>
            <Link className='text-blue-700 font-semibold hover:underline' to="/SignIn">
              <div>Log In</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
