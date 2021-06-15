import React from 'react';
import { Link } from 'react-router-dom';
import Country from './Country/Country';


const Countries = ({ countries, dark }) => {
    return (
        <div className='py-4 h-full flex justify-center'>
            <div className='grid grid-col-1 gap-y-4 justify-items-center w-72 sm:w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {countries.map((country, index) => (
                    <Link key={index} to={`/${country.name}`} id={country.name} className='cursor-pointer outline-none focus:outline-none w-72 h-full'>
                        <div className='w-full overflow-hidden rounded-md flex justify-center shadow-lg' >
                            <Country country={country} dark={dark} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Countries
