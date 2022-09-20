import { Card } from 'antd';
import React from 'react';
import TotalChart from './TotalChart';
import DailyChart from './DailyChart'
import Icon from '../../Assets/Icon.png'

const SaleComponent: React.FC = () => {
  return (
    <div className='mt-4 mb-4 md:mb-0 gap-4 md:flex justify-between'>
      {/* Total sales card */}
      <div className='mb-4 md:mb-0 md:w-8/12 shadow'>
        <Card>
          <div className='flex justify-between mb-5'>
            {/* Total sales heading */}
            <h3 className='font-semibold text-[19px]'>Total Sales</h3>
            <div>
              <img height={2} width={3} src={Icon} alt='' />
            </div>
          </div>
          <div className='align-right'>
          <TotalChart />
          </div>
        </Card>
      </div>


      {/* Daily sale card */}
      <div className='md:w-4/12 shadow'>
        <Card>
          <div className='flex justify-between'>
            {/* Daily sale heading */}
            <div>
            <h3 className='m-0 font-semibold text-[19px]'>Sales Chart</h3>
            <h2 className='m-0 mt-1 text-[11px]'>Today Sale</h2>
            <h2 className='m-0 text-[17px] font-semibold'>156</h2>
            </div>
            <div>
              <img height={2} width={3} src={Icon} alt='' />
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