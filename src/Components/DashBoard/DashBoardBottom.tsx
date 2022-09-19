import React from 'react';
import MostPopularProduct from './MostPopularProduct';
import MonthlySale from './MonthlySale';

const DashBoardBottom: React.FC = () => {
    return (
        <div className='mt-4 gap-4 flex justify-between'>
            <MostPopularProduct />
            <div className='w-1/2'>
                <MonthlySale />
            </div>
        </div>
    );
};

export default DashBoardBottom;