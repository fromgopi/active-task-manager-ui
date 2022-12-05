import React, { useState } from 'react';
import './Header.scss';

const Header = () => {
    const [searchModalOpen, setSearchModalOpen] = useState(false);
    return(
        <header className='sticky top-0 bg-white border-b border-y-slate-200 z-30'>
            <div className='px-4'></div>
            <div className='flex items-center'>
                <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current text-slate-500" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                    <path className="fill-current text-slate-400" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                </svg>
            </div>
        </header>
    )
}

export default Header;















