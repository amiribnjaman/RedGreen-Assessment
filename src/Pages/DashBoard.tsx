import React from 'react';
import DashBoardBottom from '../Components/DashBoard/DashBoardBottom';
import Notification from '../Components/DashBoard/Notification';
import SaleComponent from '../Components/DashBoard/SaleComponent';



const DashBoard = () => {
    return (
        <div className='bg-white dark:bg-[#121212]'>
            <div className='w-[93%] mx-auto z-[-100] py-10'>
            <h4 className='mb-4 text-lg dark:text-white'>Redgreen Sales</h4>
            <Notification />
            <SaleComponent />
            <DashBoardBottom />
        </div>
        </div>
    );
};

export default DashBoard;