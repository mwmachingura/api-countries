import React from 'react';
import { Link } from 'react-router-dom';


const Countries = ({ countries, dark }) => {
    return (
        <div className='py-4 px-2 h-full'>
            <div className='grid grid-col-1 gap-y-4 justify-items-center'>
                {countries.map((country) => (
                    <Link to={`/${country.name}`} className='cursor-pointer outline-none focus:outline-none w-full h-full'>
                        <div className='bg-green-300 w-full max-w-xs h-48 overflow-hidden rounded' key={country.name} id={country.name}>
                            Hello Mr Light
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Countries
