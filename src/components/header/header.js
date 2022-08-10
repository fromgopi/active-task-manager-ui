import React from 'react';
import './Header.scss';

const Header = () => {
    return(
        <div className='header-2'>
            <nav className='bg-white py-2 md:py-4'>
                <div className='container px-4 mx-auto md:flex md:items-center'>
                    <div className='flex justify-between items-center'>
                        <a href='#' className='font-bold text-xl logo-text-color'>AI</a>
                        <button 
                        className = 'border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden'>
                            <i className='fas fa-bars'>Home</i>
                        </button>
                    </div>
                    <div className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'>
                        <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Home</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;