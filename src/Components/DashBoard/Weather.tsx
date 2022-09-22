import React, {useState, useEffect} from 'react';
import SunLight from '../../Assets/Light.png'
import Icon from '../../Assets/Icon.png'

const Weather = () => {
    const [getWeather, setGetWeather] = useState<any>({})
    const key = 'vm4930c2lYACDcMJ0ovtPCbtN30jvQjF'
    const cityKey = '28143'

    useEffect(()=> {
        const weatherApi = 'https://dataservice.accuweather.com/currentconditions/v1/';
        const wQuery = `${cityKey}?apikey=${key}`;
        fetch(weatherApi + wQuery)
        .then(res => res.json())
        .then(data =>setGetWeather(data[0]))
    }, [getWeather])


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
                    <h4 className="dark:text-white">{getWeather?.WeatherText}, {getWeather?.Temperature?.Metric?.Value} <sup>&#176;</sup>C</h4>
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