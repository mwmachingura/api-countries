import React from 'react'

const Country = ({ country, dark }) => {

    const thousands_separators = (num) => {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    return (
        <div className={`w-72 h-auto ${(dark === true) ? 'bg-dark-blue text-white': 'bg-white text-dark-blue-text'}`}>
            <div className='w-full'>
                <img alt='flag' src={country.flag} className='w-full object-cover h-36' />
            </div>
            <div className='h-40 px-2'>
                <h3 className='text-xl font-bold py-2'>{country.name}</h3>
                <div className='flex flex-col items-start'>
                    <h4 className='font-semibold text-sm py-1'>Population: <span className='font-light'>{thousands_separators(country.population)}</span></h4>
                    <h4 className='font-semibold text-sm py-1'>Region: <span className='font-light'>{country.region}</span></h4>
                    <h4 className='font-semibold text-sm py-1'>Capital: <span className='font-light'>{country.capital}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Country
