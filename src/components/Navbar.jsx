import React from 'react';
import netflixLogo from '../assets/Netflix_logo.svg';

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 py-4">
            {/* Netflix Logo */}    
            <img 
                src={netflixLogo}
                alt="Netflix Logo"
                className="h-6 md:h-8 xl:h-10"
            />

            <div className='flex items-center gap-4'>
                <div className='relative'>
                    <select className='bg-transparent text-white border rounded px-6 py-1.5 font-semibold custom-select'>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                    </select>
                </div>

                <button className='bg-red-600 text-white px-4 py-1.5 rounded font-semibold hover:bg-red-700'>Sign In</button>
            </div>
        </nav>

    )
}

export default Navbar;