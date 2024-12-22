import { useState, useEffect, useRef } from "react";
import {
    Bars4Icon,
    ChevronDownIcon,
    HomeIcon,
    CodeBracketIcon,
    CloudIcon,
    BookOpenIcon,
    Cog6ToothIcon,
    PhoneIcon,
    ArrowRightStartOnRectangleIcon
} from "@heroicons/react/24/outline";
const Sd = () => {
  return (
    <div className='flex'>
        <div className='w-20 md:w-64'>
            <div className='flex justify-between items-center'>
                <h2 className='text-xl font-bold'>MyApp</h2>
            </div>

            <nav className='mt-4'>
                <ul>
                    <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
                        <HomeIcon className='w-6 h-6' />
                        <span className='ml-3'>Home</span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Sd