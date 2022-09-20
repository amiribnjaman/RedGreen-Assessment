import { Card } from 'antd';
import React from 'react';
import TotalChart from './TotalChart';
import DailyChart from './DailyChart'

const SaleComponent: React.FC = () => {
  return (
    <div className='mt-4 mb-4 md:mb-0 gap-4 md:flex justify-between'>
      {/* Total sales card */}
      <div className='mb-4 md:mb-0 md:w-7/12 shadow'>
        <Card>
          <div className='flex justify-between mb-5'>
            {/* Total sales heading */}
            <h3 className='font-semibold text-[17px]'>Total Sales</h3>
            <div>
              date
            </div>
          </div>
          <TotalChart />
        </Card>
      </div>


      {/* Daily sale card */}
      <div className='md:w-5/12 shadow'>
        <Card>
          <div className='flex justify-between'>
            {/* Daily sale heading */}
            <div>
            <h3 className='m-0 font-semibold text-[17px]'>Sales Chart</h3>
            <h2 className='m-0 mt-1 text-[11px]'>Today Sale</h2>
            <h2 className='m-0 text-[17px] font-semibold'>156</h2>
            </div>
            <div>
              :
            </div>
          </div>
          <div className="dailychart">
            <DailyChart />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SaleComponent;