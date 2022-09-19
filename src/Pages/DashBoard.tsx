import React from 'react';
import DashBoardBottom from '../Components/DashBoard/DashBoardBottom';
import Notification from '../Components/DashBoard/Notification';
import SaleComponent from '../Components/DashBoard/SaleComponent';

const DashBoard: React.FC = () => {
    return (
        <div className='w-[93%] mx-auto py-10'>
            <h4 className='mb-4 text-lg'>Redgreen Sales</h4>
            <Notification />
            <SaleComponent />
            <DashBoardBottom />
        </div>
    );
};

export default DashBoard;