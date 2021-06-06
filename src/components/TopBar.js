import React, {useState} from 'react';
import { Switch } from '@headlessui/react';

const TopBar = () => {

    const [dark, setDark] = useState(false);

    return (
        <div className={`px-2 ${(dark) ? 'bg-black': 'bg-white'}`}>
            <div className={`shadow-md h-16 absolute top-0 left-0 w-full`}></div>
            <div className='flex justify-between items-center relative h-16 mb-4'>
                <div className=''>
                    <h2 className={``}>Where in the world?</h2>
                </div>
                <Switch.Group>
                    <div className='flex items-center'>
                        <Switch.Label className={``}>Dark Mode</Switch.Label>
                        <Switch 
                        checked={dark}
                        onChange={setDark}
                        className='hidden'
                        />
                    </div>
                </Switch.Group>
            </div>
        </div>
    )
}

export default TopBar
