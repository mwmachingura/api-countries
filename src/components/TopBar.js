import React, {useEffect, useState} from 'react';
import { Switch } from '@headlessui/react';
import { Route } from 'react-router-dom';


import HomeScreen from './screens/HomeScreen';
import CountryScreen from './screens/CountryScreen';


const useStateWithSessionStorage = sessionStorageKey => {
    const [dark, setDark] = useState(() => {
        console.log(sessionStorage.getItem('dark'));
        if(sessionStorage.getItem('dark') !== null) return sessionStorage.getItem('dark');
        return false;
    })

    useEffect(() => {
        sessionStorage.setItem('dark', dark);
    }, [dark]);

    return [dark, setDark];
}

const TopBar = () => {

    const [dark, setDark] = useStateWithSessionStorage(false);

    console.log(dark);

    return (
        <div className={`px-4 min-h-screen ${(dark === true) ? 'bg-very-dark-blue': 'bg-very-light-gray'}`}>
            <div className={`shadow-md h-16 absolute top-0 left-0 w-full ${(dark === true) ? 'bg-dark-blue': 'bg-white'}`}></div>
            <div className='flex justify-between items-center relative h-16 mb-4'>
                <div className='max-w-max'>
                    <h2 className={`text-base font-extrabold ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Where in the world?</h2>
                </div>
                <Switch.Group>
                    <div className='flex items-center'>
                        <Switch.Label className={`cursor-pointer text-base font-light ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>
                            <i className={`mr-1 ${(dark === true) ? 'fas fa-moon': 'far fa-moon'}`}></i>
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
