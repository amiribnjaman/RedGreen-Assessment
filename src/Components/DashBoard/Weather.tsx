import React from 'react';
import { Card } from 'antd';

const Weather = () => {
    const key = 'vm4930c2lYACDcMJ0ovtPCbtN30jvQjF'

    // Get city Id
    const getCity = async (city: string) => {
        const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search';
        const query = `?apikey=${key}&q=${city}`;

        const res = await fetch(baseUrl + query)
        const data = await res.json();
        return data[0];

    }

    // Get weather 
    const getWeather = async (cityId: Promise<any>) => {
        const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1/';
        const query = `${cityId}?apikey=${key}`;

        const res = await fetch(baseUrl + query)
        const data = await res.json()
        return data[0]
    }

    // Final weather
    const weather = async () => {
        const cityDetails = await getCity('dhaka');
        const weather = await getWeather(cityDetails.Key);

        return weather
    }

    console.log(weather())

    return (
        <div className='md:w-full dark:text-white dark:bg-[#15202B] mt-4 p-7 rounded shadow'>

                Weather
        </div>
    );
};

export default Weather;