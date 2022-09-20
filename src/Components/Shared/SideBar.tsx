import { Menu } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import MapIcon from '../../Assets/map.png';
import HelpIcon from '../../Assets/Help.png';
import AccountIcon from '../../Assets/Accounts.png';
import SettingsIcon from '../../Assets/Settings.png';


const SideBar: React.FC = () => {
  return (
    <div className='hidden md:block z-10'>
      <Menu
        mode="inline"
        style={{ width: 250, background: '#F1F2F7', padding: '40px 30px', height: 'calc(100vh - 70px)' }} >

          {/* Main Menus */}
          <Menu.Item className='menu-header' style={{cursor: 'default', color: '#000', background: '#F1F2F7'}}>
            <span className="flex items-center">
              Menu</span>
          </Menu.Item>
        <Menu.Item>
          <Link to='/'>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bar-chart-line-fill mr-3 text-[#9DACBE]" viewBox="0 0 16 16">
                <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2z" />
              </svg>
              Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/maps'>
            <span className="flex items-center">
              <img className='mr-3' src={MapIcon} alt='' />
              Maps</span>
          </Link>
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


        {/* Settings Menu */}
        <Menu.Item className='menu-header' style={{cursor: 'default', color: '#000', background: '#F1F2F7', marginTop: '30px'}}>
            <span className="">
              Settings</span>
          </Menu.Item>
        <Menu.Item>
          <span className="flex items-center">
          <img className='mr-3' src={SettingsIcon} alt='' />
            Settings</span>
        </Menu.Item>
        <Menu.Item>
          <span className="flex items-center">
            <img className='mr-3' src={AccountIcon} alt='' />
            Accounts</span>
        </Menu.Item>
        <Menu.Item>
          <span className="flex items-center">
          <img className='mr-3' src={HelpIcon} alt='' />
            Helps</span>
        </Menu.Item>

      </Menu>

    </div>
  );
};

export default SideBar;