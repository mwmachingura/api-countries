import React from 'react';
import { Link } from 'react-router-dom';
import Country from './Country/Country';


const Countries = ({ countries, dark }) => {
    return (
        <div className='py-4 px-2 h-full flex justify-center'>
            <div className='grid grid-col-1 gap-y-4 justify-items-center w-72'>
                {countries.map((country) => (
                    <Link to={`/${country.name}`} className='cursor-pointer outline-none focus:outline-none w-full h-full'>
                        <div className='w-full overflow-hidden rounded-md flex justify-center shadow-lg' key={country.name} id={country.name}>
                            <Country country={country} dark={dark} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Countries
