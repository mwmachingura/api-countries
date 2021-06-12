import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


import { getCountries } from '../../actions/countries';

const CountryScreen = ({ dark }) => {

    const dispatch = useDispatch();

    let { paramName } = useParams();

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const countries = useSelector((state) => state.countries);

    const country = countries.filter((country) => {
        return country.name.includes(paramName) !== false;
    })

    const thousands_separators = (num) => {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    const resolveCountryFromCode = (code) => {
        const res = countries.filter((country) => {
            return country.alpha3Code.includes(code) !== false;
        })
        const countryName = res.map((res) => {return res.name});

        return countryName;
    }

    return (
        <>
        {country.map((country, index) => (
            <div key={index}>
                <div className='my-8'>
                    <button className={`py-2 px-8 shadow-md text-center font-light ${(dark) ? 'bg-dark-blue text-white': 'bg-white text-dark-blue-text'}`}>Back</button>
                </div>
                <div>
                    <div className='h-full w-full py-2'>
                        <img alt='flag' src={country.flag} className='w-full object-cover h-36' />
                    </div>
                    <h2 className={`font-bold text-lg py-4 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>{country.name}</h2>
                    <div className='py-2'>
                        <h4 className={`font-semibold text-base py-1 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Native Name: <span className='font-light'>{country.nativeName}</span></h4>
                        <h4 className={`font-semibold text-base py-1 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Population: <span className='font-light'>{thousands_separators(country.population)}</span></h4>
                        <h4 className={`font-semibold text-base py-1 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Region: <span className='font-light'>{country.region}</span></h4>
                        <h4 className={`font-semibold text-base py-1 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Sub Region: <span className='font-light'>{country.subregion}</span></h4>
                        <h4 className={`font-semibold text-base py-1 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Capital: <span className='font-light'>{country.capital}</span></h4>
                    </div>
                    <div className='py-4'>
                        <h4> </h4>
                        <h4 className={`font-semibold text-base py-1 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Top Level Domain: <span className='font-light'>{country.topLevelDomain}</span></h4>
                        <h4 className={`font-semibold text-base py-1 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Currencies: <span className='font-light'>{country.currencies.map((currency) => (<span className='capitalize'> {currency.name},</span>))}</span></h4>
                        <h4 className={`font-semibold text-base py-1 ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Languages: <span className='font-light'>{country.languages.map((language) => (<span className='capitalize'> {language.name},</span>))}</span></h4>
                    </div>
                    <div className='py-4'>
                        <h4 className={`py-2  ${(dark) ? 'text-white': 'text-dark-blue-text'}`}>Border Countries</h4>
                        <div className='grid grid-cols-3 w-full place-items-center gap-1'>
                            {country.borders.map((code) => (<span className={`max-width w-full h-8 overflow-hidden truncate text-center text-base align-middle table-cell capitalize py-1 px-2 shadow-md ${(dark) ? 'text-white bg-dark-blue': 'text-dark-blue-text bg-white'}`} >{resolveCountryFromCode(code)}</span>))}
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default CountryScreen
