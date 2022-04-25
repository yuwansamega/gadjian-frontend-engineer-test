import React from 'react';
import Logo from '../../image/logo.png';

const Header = () => {
  return (
    <header>
      <div className="w-full h-24 bg-white absolute top-0 left-0 flex items-center z-10">
        <div className="w-full h-full flex items-center justify-between">
          <div className="h-full flex items-center">
            <div className="lg:px-10 px-5">
              <a href="#home" className="">
                <img className="h-full w-32" src={Logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="w-1/4 h-full flex flex-row items-center">
            <div className="px-4 hidden lg:block">
              <h3 className="text-lg font-semibold text-gray-500">Hallo, <span className="text-teal-400">Gadjian User</span></h3>
            </div>
            <div className="px-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="lg:h-9 lg:w-9 h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
