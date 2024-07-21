import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';


const Home: React.FC = () => {
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
              <label htmlFor="username" className="block text-primary font-bold mb-2">Username or Email</label>
              <input 
                type="email" 
                id="username" 
                className="p-3 rounded w-full mb-4 bg-gray-200" 
              />
              <label htmlFor="password" className="block text-primary font-bold  mb-4">Password</label>
              <input 
                type="password" 
                id="username" 
                className="p-3 rounded w-full font-bold bg-gray-200 mb-4" 
              />
              <div className='flex justify-between'>
                <div className="check">
                  <input type="checkbox" id="remember" className='p-10 '/>Rember me
                </div>
                <div className="check">
                  <Link to={"forgotPassword"}>
                    <p className='font-semibold text-danger'>Forgot Password</p>
                  </Link>
                </div>
              </div>
              <Button text={"Submit"} className={"bg-primary text-white p-3 font-bold rounded mt-4 w-full shadow-2xl"}/>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
