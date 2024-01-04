import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig.js';
import Logo from "../static/logo_transparent.png";
import AiWallpaper from "../static/ai-walpaper.jpg";

const SignIn = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const loginUser = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email.current.value, password.current.value);
      // Giriş yaptıktan sonra yönlendirme
      navigate('/newsview');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className='flex h-[100vh] gap-x-[18vw]'>
        <div className='w-[40vw] order-5'>
            <img className='h-[100vh]' src={AiWallpaper} alt='not found'/>
        </div>

        <div className='flex flex-col w-60vw ml-[7vw] mt-[5vh]'>
          <div className='w-[10vw]'>
            <Link to="">
                <img src={Logo} alt='not found'/>
            </Link>
          </div>
          <div className='font-bold text-4xl mb-[5vh]'>
            Sign In
          </div>

          <form onSubmit={loginUser}>
            <div className='text-sm'>Email address</div>
            <input className='w-[35vw] h-[5vh] px-[1vw] border-[1px] border-black mt-[1vh] mb-[5vh]' type='email' required ref={email} />
            <br />

            <div className='text-sm'>Password</div>
            <input className='w-[35vw] h-[5vh] px-[1vw] border-[1px] border-black mt-[1vh] mb-[5vh]' type='password' required minLength="6" ref={password} />
            <br />

            <button className='w-[35vw] h-[5vh] px-[1vw] border-[1px] text-white bg-black border-white mt-[1vh] mb-[5vh] hover:bg-blue-600 transition-all duration-300 cursor-pointer' type='submit' value="Login">
              Sign In
            </button>
          </form>

          <div className='flex gap-x-[2vw]'>
            <div>You don't have an account?</div>
            <Link className='text-blue-700 font-semibold hover:underline' to="/SignUp">
              <div>Sign Up</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
