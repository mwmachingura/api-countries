import React from 'react';
import { Link } from 'react-router-dom';


const Countries = () => {
    return (
        <div className='py-4 px-2 h-full'>
            <div className='grid grid-col-1 gap-y-4 justify-items-center'>
                <div className='bg-green-300 w-full max-w-xs h-48 overflow-hidden rounded'>
                    Hello Mr. Light
                </div>
                <div className='bg-blue-300 w-full max-w-xs h-48 overflow-hidden rounded'>
                    Hello Mr. Light
                </div>
                <div className='bg-yellow-300 w-full max-w-xs h-48 overflow-hidden rounded'>
                    Hello Mr. Light
                </div>
            </div>
        </div>
    )
}

export default Countries
