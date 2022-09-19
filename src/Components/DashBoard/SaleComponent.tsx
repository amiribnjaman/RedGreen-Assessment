import { Card } from 'antd';
import React from 'react';
import TotalChart from './TotalChart';

const SaleComponent: React.FC = () => {
  return (
    <div className='mt-4 gap-4 md:flex justify-between'>
      {/* Total sales card */}
      <div className='w-7/12 shadow'>
        <Card>
          <div className='flex justify-between mb-5'>
            {/* Total sales heading */}
            <h3 className='font-semibold text-[15px]'>Total Sales</h3>
            <div>
              date
            </div>
          </div>
          <TotalChart />
        </Card>
      </div>


      {/* Daily sale card */}
      <div className='w-5/12 shadow'>
        <Card>
          <div className='flex justify-between'>
            {/* Daily sale heading */}
            <h3>Sales Card</h3>
            <div>
              :
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SaleComponent;