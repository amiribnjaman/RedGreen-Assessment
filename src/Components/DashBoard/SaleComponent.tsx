import { Card } from 'antd';
import React from 'react';
import TotalChart from './TotalChart';
import DailyChart from './DailyChart'
import Icon from '../../Assets/Icon.png'
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';

const SaleComponent: React.FC = () => {

  const Format = 'DD/MM/YY';

  return (
    <div className='mt-4 mb-4 md:mb-0 gap-4 md:flex justify-between'>
      {/* Total sales card */}
      <div className='mb-4 dark:bg-[#15202B] p-7 border dark:border-0 rounded md:mb-0 md:w-8/12 shadow'>
        <div className='flex justify-between mb-5'>
          {/* Total sales heading */}
          <h3 className='font-semibold text-[19px] dark:text-white'>Total Sales</h3>
          <div>
            <div className='flex'>
              <DatePicker defaultValue={moment('01/09/22', Format)} format={Format} picker="month" />
              <div className='ml-4'>
                <img height={2} width={3} src={Icon} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='align-right'>
          <TotalChart />
        </div>
      </div>


      {/* Daily sale card */}
      <div className='md:w-4/12 dark:bg-[#15202B] p-7 border dark:border-0 rounded shadow'>
        <div className='flex justify-between'>
          {/* Daily sale heading */}
          <div>
            <h3 className='m-0 font-semibold text-[19px] dark:text-white'>Sales Chart</h3>
            <h2 className='m-0 mt-1 text-[11px] dark:text-white'>Today Sale</h2>
            <h2 className='m-0 text-[17px] font-semibold dark:text-white'>156</h2>
          </div>
          <div>
            <img height={2} width={3} src={Icon} alt='' />
          </div>
        </div>
        <div className="dailychart">
          <DailyChart />
        </div>
      </div>
    </div>
  );
};

export default SaleComponent;