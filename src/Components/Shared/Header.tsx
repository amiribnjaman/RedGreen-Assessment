import React from 'react';
import { Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Logo from '../../Assets/Logo.png'
import Bell from '../../Assets/bell.png'
import Person from '../../Assets/person.png'

const { Search } = Input;

const Header: React.FC = () => {
    return (
        // <div className="site-page-header-ghost-wrapper shadow-md">
        //     <PageHeader
        //         className="site-page-header"
        //         extra={[
        //             <img src={Bell} alt="" />,
        //             <img src={Person} alt="" />,
        //             <h6>Riandra</h6>
        //         ]}
        //         avatar={{ src: Logo }}
        //     >
        //     </PageHeader>
        // </div>

        <div className='w-full bg-white h-[70px] shadow-md flex items-center'>
            <div className='w-11/12 mx-auto flex justify-between'>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-5/12 flex justify-between'>
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div>
                            <Input placeholder="Search" bordered={false} suffix={
                                <Tooltip title="Extra information">
                                    <SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                                </Tooltip>} style={{ width: 280, background: '#E1E1E1', color: '#8F8F8F' }} />
                        </div>
                    </div>
                    <div className=' w-2/12'>
                        <div className='flex items-center justify-around'>
                            <div>
                                <img src={Bell} alt="" />
                            </div>
                            <div>
                                <img src={Person} alt="" />
                            </div>
                            <h6 className='mb-0'>Riandra</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Header;