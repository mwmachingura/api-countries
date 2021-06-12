import React, {useState} from 'react';
import { Switch } from '@headlessui/react';
import { Route } from 'react-router-dom';


import HomeScreen from './screens/HomeScreen';
import CountryScreen from './screens/CountryScreen';

const TopBar = () => {

    const [dark, setDark] = useState(false);

    return (
        <div className={`px-2 min-h-screen ${(dark) ? 'bg-very-dark-blue': 'bg-very-light-gray'}`}>
            <div className={`shadow-md h-16 absolute top-0 left-0 w-full ${(dark) ? 'bg-dark-blue': 'bg-white'}`}></div>
            <div className='flex justify-between items-center relative h-16 mb-4'>
                <div className='max-w-max'>
                    <h2 className={`text-base font-extrabold ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Where in the world?</h2>
                </div>
                <Switch.Group>
                    <div className='flex items-center'>
                        <Switch.Label className={`text-base font-light ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>
                            <i className={`mr-1 ${(dark) ? 'fas fa-moon': 'far fa-moon'}`}></i>
                            Dark Mode
                        </Switch.Label>
                        <Switch 
                        checked={dark}
                        onChange={setDark}
                        className='hidden'
                        />
                    </div>
                </Switch.Group>
            </div>
            <Route exact path='/' render={() => (<HomeScreen dark={dark }/>)} />
            <Route exact path='/:paramName' render={() => (<CountryScreen dark={dark }/>)} />
        </div>
    )
}

export default TopBar
