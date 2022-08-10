import React from 'react';
import './App.scss';
import Header from './components/header/header';

export const App = () => {
    return(
        <div className='main-div container mx-auto bg-gray-200 rounded-xl shadow border p-10 m-8'>
            <p className='text-3xl text-gray-700 font-bold mb-5'>Welcome</p>
            <p className='text-gray-500 text-lg'>
                React and Tailwind CSS in action
            </p>
        </div>
    );
}




