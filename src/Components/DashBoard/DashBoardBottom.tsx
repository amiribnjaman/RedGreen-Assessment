import React from 'react';
import MostPopularProduct from './MostPopularProduct';
import MonthlySale from './MonthlySale';
import Weather from './Weather';

const DashBoardBottom = () => {
    return (
        <div className='mt-4 gap-4 md:flex justify-between'>
            <MostPopularProduct />
            <div className='md:w-1/2'>
                <MonthlySale />
                <Weather />
            </div>
        </div>
    );
};

export default DashBoardBottom;