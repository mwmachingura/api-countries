import React, {} from 'react';
import { Switch } from '@headlessui/react';

const TopBar = () => {
    return (
        <div className={`px-2`}>
            <div className={`shadow-md h-16 absolute top-0 left-0 w-full`}></div>
            <div className='flex justify-between items-center relative h-16 mb-4'>
                <div className=''>
                    <h2 className={}>Where in the world?</h2>
                </div>
                <div>
                    Dark Mode
                </div>
            </div>
        </div>
    )
}

export default TopBar
