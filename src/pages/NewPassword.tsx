import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NewPassword = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
          <div style={{ 
             backgroundImage:"url('https://j.gifs.com/r2oRmW.gif')",
             backgroundRepeat:"no-repeat",
             backgroundSize:"cover",
             backgroundPosition:"center"
             
             }} className="w-full md:w-7/10 h-screen flex items-center justify-center bg-gray-100">
            <h1 className="text-center">Left Side</h1>
          </div>
          <div className="w-full md:w-3/10 h-screen flex items-center bg-white">
            <div className="container">
              <div className="flex flex-col items-center  p-5 m-5">
                <form action="" className="w-full">
                 <Header/>
                  <div className='mb-16'>
                    <h3 className='font-bold text-primary text-4xl text-center mb-2'>Set a New Password</h3>
                    <ul>
                        <li className='mt-2 mb-2'>New Password must be different from the old password.</li>
                        <li className='mt-2 mb-2'>Password Must include number alphabet & Character.</li>
                    </ul>
                  </div>
                  <label htmlFor="password" className="block text-primary font-bold mb-2">New Password</label>
                  <input 
                    type="password" 
                    id="username" 
                    className="p-3 rounded w-full mb-4 bg-gray-200" 
                  />
                   <label htmlFor="confirmPassword" className="block text-primary font-bold mb-2">Confirm Password</label>
                  <input 
                    type="confirmPassword" 
                    id="confirmPassword" 
                    className="p-3 rounded w-full mb-4 bg-gray-200" 
                  />
                  <Button text={"Submit Email"} className={"bg-primary text-white p-3 font-bold rounded mt-4 w-full shadow-2xl"}/>
                  <Link to={"/"}>
                        <Button text='Back to login' className={"bg-white  text-gray-400 p-3 font-bold rounded mt-4 w-full shadow-2xl"}/>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NewPassword