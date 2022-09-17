import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';


const SideBar: React.FC = () => {


  return (
    <Menu
      mode="inline"
      style={{ width: 256, background: '#F1F2F7', padding: '40px 30px', height: 'calc(100vh - 70px)' }} >
      <h6 className='pl-[24px] mb-6'>MENU</h6>
      <Menu.Item>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-line-fill mr-3 text-[#9DACBE]" viewBox="0 0 16 16">
            <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
          </svg>
          Dashboard</span>
      </Menu.Item>
      <Menu.Item>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-map-fill mr-3 text-[#9DACBE]" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z" />
          </svg>
          Maps</span>
      </Menu.Item>
      <Menu.Item>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-text-fill mr-3 text-[#9DACBE]" viewBox="0 0 16 16">
            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
          </svg>
          Menu</span>
      </Menu.Item>
      <Menu.Item>
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots-fill mr-3 text-[#9DACBE]" viewBox="0 0 16 16">
            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          Menu</span>
      </Menu.Item>
    </Menu>
  );
};

export default SideBar;