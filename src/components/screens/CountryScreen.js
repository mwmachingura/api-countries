import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


import { getCountries } from '../../actions/countries';

const CountryScreen = ({ dark }) => {

    const dispatch = useDispatch();

    let { paramName } = useParams();
    let history = useHistory(); 

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
            <div key={index} className='w-full'>
                <div className='my-8'>
                    <button className={`py-2 px-8 shadow-md text-center font-light focus:outline-none ${(dark === true) ? 'bg-dark-blue text-white': 'bg-white text-dark-blue-text'}`}
                    onClick={()=>{history.goBack()}}>
                        <i className='mr-2 fas fa-arrow-left'></i>Back
                    </button>
                </div>
                <div className='w-full flex flex-col lg:flex-row items-center lg:justify-between'>
                    <div className='h-auto w-full xl:max-w-lg lg:max-w-md flex-shrink'>
                        <img alt='flag' src={country.flag} className='w-full xl:max-w-lg lg:max-w-md object-cover h-auto' />
                    </div>
                    <div className='w-full xl:max-w-2xl lg:max-w-lg'>
                        <h2 className={`w-full font-bold text-lg py-1 ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>{country.name}</h2>
                        <div className='sm:flex sm:items-start sm:justify-between w-full'>
                            <div className='lg:flex lg:flex-col md:w-2/5 lg:flex-grow'>
                                <div className='py-1'>
                                    <h4 className={`font-semibold text-base ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Native Name: <span className='font-light'>{country.nativeName}</span></h4>
                                    <h4 className={`font-semibold text-base ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Population: <span className='font-light'>{thousands_separators(country.population)}</span></h4>
                                    <h4 className={`font-semibold text-base ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Region: <span className='font-light'>{country.region}</span></h4>
                                    <h4 className={`font-semibold text-base ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Sub Region: <span className='font-light'>{country.subregion}</span></h4>
                                    <h4 className={`font-semibold text-base ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Capital: <span className='font-light'>{country.capital}</span></h4>
                                </div>
                            </div>
                            <div className='py-1 lg:flex lg:flex-col md:w-2/5 lg:flex-grow'>
                                <h4> </h4>
                                <h4 className={`font-semibold text-base ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Top Level Domain: <span className='font-light'>{country.topLevelDomain}</span></h4>
                                <h4 className={`font-semibold text-base ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Currencies: <span className='font-light'>{country.currencies.map((currency) => (<span className='capitalize'> {currency.name},</span>))}</span></h4>
                                <h4 className={`font-semibold text-base ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Languages: <span className='font-light'>{country.languages.map((language) => (<span className='capitalize'> {language.name},</span>))}</span></h4>
                            </div>
                        </div>
                        <div className='py-1 xl:flex xl:justify-between container w-full'>
                            <h4 className={`py-1 font-semibold w-max ${(dark === true) ? 'text-white': 'text-dark-blue-text'}`}>Border Countries:</h4>
                            <div className='grid grid-cols-3 xl:w-9/12 2xl:grid-cols-4 2xl:w-auto place-items-center gap-1'>
                                {country.borders.map((code) => (<span className={`w-full h-8 overflow-hidden truncate text-center text-base align-middle table-cell capitalize py-1 px-2 shadow-md ${(dark === true) ? 'text-white bg-dark-blue': 'text-dark-blue-text bg-white'}`} >{resolveCountryFromCode(code)}</span>))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default CountryScreen
