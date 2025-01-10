import React from 'react';
import netflixLogo from '../assets/Netflix_logo.svg';
import { Languages, ChevronDown } from 'lucide-react';

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
                <Languages className="absolute left-2 top-2.5 h-4 w-4 text-white" />
                    <select className='bg-transparent text-white border rounded px-8 py-1.5 font-semibold custom-select appearance-none'>
                        <option value="en">English</option>
                        <option value="hi">हिंदी</option>
                    </select>
                <ChevronDown className='absolute right-2 top-2.5 h-4 w-4 text-white' />
                </div>

                <button className='bg-red-600 text-white px-4 py-1.5 rounded font-semibold hover:bg-red-700'>Sign In</button>
            </div>
        </nav>

    )
}

export default Navbar;