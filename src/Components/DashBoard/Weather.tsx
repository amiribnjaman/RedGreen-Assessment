import React, {useState} from 'react';
import { Card } from 'antd';
import SunLight from '../../Assets/Light.png'
import Icon from '../../Assets/Icon.png'

const Weather = () => {
    const [city, setCity] = useState<any>({})
    const [finalWeather, setWeather] = useState<any>({})

    const key = 'vm4930c2lYACDcMJ0ovtPCbtN30jvQjF'

    // Get city Id
    const getCity = (city: string) => {
        const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`;

        fetch(baseUrl + query)
        .then((res) => res.json())
        .then(data => setCity(data[0]))

        return city

    }

    // Get weather 
    const getWeather = (cityId: Promise<any>) => {
        const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${cityId}?apikey=${key}`;

        fetch(baseUrl + query)
        .then(res => res.json())
        .then(data =>setWeather(data[0]))

        return finalWeather
    }

    // Final weather
    const weather = () => {
        const cityDetails = getCity('dhaka');
        const weather = getWeather(city.Key);

        return {cityDetails, weather}
    }

    const result = weather()?.weather;

    // Time
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    return (
        <div className='md:w-full border dark:border-0 dark:text-white dark:bg-[#15202B] mt-4 p-7 rounded shadow'>
            <div className='flex justify-between mb-4'>
            <h3 className='dark:text-white text-[19px] font-semibold'>Weather</h3>
            <div>
            <img height={2} width={3} src={Icon} alt='' />
            </div>
            </div>

            <div className='flex justify-between'>
                <div className='ml-5'>
                    <h2 className="dark:text-white font-semibold text-[18px]">{hours > 12 ? hours - 12 : hours}: {minutes < 10 ? '0' +minutes : minutes} {hours > 12 ? 'PM' : 'AM'}</h2>
                    <div>
                    <img width={90} height={90} src={SunLight} alt='' />
                    </div>
                    <h4 className="dark:text-white">{result?.WeatherText}, {result?.Temperature?.Metric?.Value} <sup>&#176;</sup>C</h4>
                </div>

                <div>
                    <h5 className='mb-4 dark:text-white'>Wed, 21 September 2022</h5>
                    <p className='text-[13px] dark:text-white'>10: 00 AM <span className='ml-3'>Light Rain, 27C</span></p>
                    <p className='text-[13px] dark:text-white'>2: 00 PM <span className='ml-3'>Light Rain, 30C</span></p>
                    <p className='text-[13px] dark:text-white'>6: 00 PM <span className='ml-3'>Light Rain, 26C</span></p>
                </div>
            </div>
        </div>
    );
};

export default Weather;