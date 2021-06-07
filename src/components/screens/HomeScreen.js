import React, { useEffect, useState } from 'react';
import { Menu } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';



import Countries from '../Countries/Countries'
import { getCountries, getCountriesByRegion } from '../../actions/countries';

const HomeScreen = () => {

    const dispatch = useDispatch();
    
    const [region, setRegion] = useState(null);

    useEffect(() => {
        if (region) return dispatch(getCountriesByRegion(region));
        return dispatch(getCountries());
    }, [dispatch, region]);

    const countries = useSelector((state) => state.countries);

    console.log(countries);

    return (
        <>
            <div>
                <form>
                    <input />
                </form>
                <Menu>
                    <Menu.Button>Filter By Region</Menu.Button>
                    <Menu.Items>
                        <Menu.Item>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Africa')
                            }}>
                                Africa
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                        <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Americas')
                            }}>
                                Americas
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                        <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Asia')
                            }}>
                                Asia
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                        <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Europe')
                            }}>
                                Europe
                            </button>
                        </Menu.Item>
                        <Menu.Item>
                        <button onClick={(e) => {
                                e.preventDefault();
                                setRegion('Oceania')
                            }}>
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
