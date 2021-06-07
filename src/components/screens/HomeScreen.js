import React, { useEffect, useState } from 'react';
import { Menu } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';



import Countries from '../Countries/Countries'
import { getCountries, getCountriesByRegion } from '../../actions/countries';

const HomeScreen = ({ dark }) => {

    const dispatch = useDispatch();
    
    const [region, setRegion] = useState(null);

    useEffect(() => {
        if (region) return dispatch(getCountriesByRegion(region));
        return dispatch(getCountries());
    }, [dispatch, region]);

    const countries = useSelector((state) => state.countries);

    const [result, setResult] = useState(null);

    useEffect(() => {
        setResult(countries);
    }, [countries]);

    const search = (e) => {
        let value = e.target.value.toLowerCase();
        const searchResults = countries.filter((country) => {
            return country.name.includes(value) !== false;
        });

        setResult(searchResults);
    }

    console.log(result);

    return (
        <>
            <div className='py-4 h-full flex flex-col items-start'>
                <form onSubmit={(e) => {e.preventDefault()}} className={`my-2 w-full h-10 rounded overflow-hidden sm:w-1/3 shadow-md flex justify-center items-center`}>
                    <div className={`flex items-center w-full h-full`}>
                        <i className={`absolute fas fa-search p-2 text-center font-semibold text-sm ${(dark) ? 'text-white': 'text-dark-gray'}`}></i>
                        <input type='text' placeholder='Search for a Country' onChange={(e) => {search(e)}} 
                        className={`px-8 w-full h-full flex-1 border-none outline-none text-sm text-left font-semibold ${(dark) ? 'bg-dark-blue text-white': 'bg-white text-dark-gray'}`} />
                    </div>
                </form>
                <Menu as='div' className='relative inline-block text-center my-2'>
                    <Menu.Button className={`text-base inline-flex justify-center items-center py-2 px-4 rounded shadow-md outline-none focus:outline-none ${(dark) ? 'bg-dark-blue text-white': 'bg-white text-dark-blue-text'}`}>
                        Filter By Region
                        <i class="fas fa-chevron-down ml-1" aria-hidden="true"></i>
                    </Menu.Button>
                    <Menu.Items className={`absolute right-0 origin-top-right mt-1 rounded flex flex-col justify-items-center w-full shadow ${(dark) ? 'bg-dark-blue': 'bg-white'}`}>
                        <Menu.Item>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Africa')}}
                                className={`flex rounded-md items-center justify-center w-full px-2 py-1 text-base ${(dark) ? 'bg-dark-blue hover:bg-very-dark-blue text-white': 'bg-white hover:bg-gray-400 text-dark-blue-text'}`}>
                                Africa
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                        <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Americas')
                            }}
                            className={`flex rounded-md items-center justify-center w-full px-2 py-1 text-base ${(dark) ? 'bg-dark-blue hover:bg-very-dark-blue text-white': 'bg-white hover:bg-gray-400 text-dark-blue-text'}`}>
                                Americas
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                        <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Asia')
                            }}
                            className={`flex rounded-md items-center justify-center w-full px-2 py-1 text-base ${(dark) ? 'bg-dark-blue hover:bg-very-dark-blue text-white': 'bg-white hover:bg-gray-400 text-dark-blue-text'}`}>
                                Asia
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                        <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Europe')
                            }}
                            className={`flex rounded-md items-center justify-center w-full px-2 py-1 text-base ${(dark) ? 'bg-dark-blue hover:bg-very-dark-blue text-white': 'bg-white hover:bg-gray-400 text-dark-blue-text'}`}>
                                Europe
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                        <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Oceania')
                            }}
                            className={`flex rounded-md items-center justify-center w-full px-2 py-1 text-base ${(dark) ? 'bg-dark-blue hover:bg-very-dark-blue text-white': 'bg-white hover:bg-gray-400 text-dark-blue-text'}`}>
                                Oceania
                            </button>
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
            <Countries />
        </>
    )
}

export default HomeScreen
