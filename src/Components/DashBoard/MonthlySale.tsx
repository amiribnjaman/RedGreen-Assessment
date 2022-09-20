import React from 'react';
import { Card } from 'antd';
import SingleProduct from './SingleProduct';
import Icon from '../../Assets/Icon.png'

const MonthlySale: React.FC = () => {
  return (
    <div className='shadow'>
      <Card>
        <div className='flex justify-between'>
          {/* Monthly sale heading */}
          <h3 className='text-[19px] font-semibold'>Sales</h3>
          <span>
          <img height={2} width={3} src={Icon} alt='' />
          </span>
        </div>
        <div className='flex justify-between'>
          <div>
            <h4 className='m-0 text-[13px]'>Monthly Sale</h4>
            <h5 className='font-semibold text-[18px] m-0'>981</h5>
          </div>
          <h4>Date</h4>
        </div>

        {/* Monthly sale body */}
        <SingleProduct 
        productName='Chuwi Laptop' 
        productDate='21/9/22' 
        productAuthor='Debashis D. Dev'
        />
        <hr />

        <SingleProduct 
        productName='Oneplus TV' 
        productDate='20/9/22' 
        productAuthor='Israfil Arif'
        />
        <hr />

        <SingleProduct 
        productName='UMI Phone' 
        productDate='16/9/22' 
        productAuthor='Sajib Hossain'
        />
        <hr />
      <p className='text-blue-600 text-[11px] font-semibold mb-0 mt-3'>Show more</p>
      </Card>
    </div>
  );
};

export default MonthlySale;