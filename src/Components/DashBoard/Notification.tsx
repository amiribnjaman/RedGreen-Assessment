import React from 'react';
import { Alert } from 'antd';
import Rainy from '../../Assets/Rainy.png'


const Notification = () => (
  <Alert
    message={<h4 className='font-semibold text-[#9D8506] dark-white mb-0'> Notification </h4>}
    description={<p className='text-[#9D8506] mb-0'>You have enough stock for your next campaign</p>}
    type="warning"
    showIcon
    icon={
      <img src={Rainy} alt='' />
    }
    closable
    style={{border: '0', borderLeft: '3px solid #9D8506', borderRadius: '0'}}
  />
);

export default Notification;