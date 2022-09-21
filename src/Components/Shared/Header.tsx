import React from 'react';
import { Input, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Logo from '../../Assets/Logo.png'
import Bell from '../../Assets/bell.png'
import Person from '../../Assets/person.png'


// Header Props type
type HeaderProps = {
    isDark: boolean,
    setIsDark: any
}

const Header = ({ isDark, setIsDark }: HeaderProps) => {
    return (

        <div className='header'
        style={{borderBottom: isDark ? '0': '.1px solid rgba(0,0,0,0.1)'}}
        >
            <div className='shadow-md w-full dark:text-white bg-white dark:bg-[#192734] h-[70px] z-50 flex items-center'>
                <div className='w-11/12 mx-auto flex justify-between'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-[47%] flex justify-between'>
                            <div>
                                <img src={Logo} alt="" />
                            </div>
                            <div className='hidden md:block'>
                                <Input placeholder="Search" bordered={false} suffix={
                                    <Tooltip title="Extra information">
                                        <SearchOutlined style={{ color: isDark ? '#fff' : '#8F8F8F' }} />
                                    </Tooltip>} style={isDark ? { width: 320, background: '#8899A6', color: '#fff' }: {width: 320, background: '#F1F3F8', color: '#8F8F8F'}} />
                            </div>
                        </div>
                        <div className='w-1/2 md:w-2/12'>
                            <div className='flex items-center justify-around'>
                                <div>
                                    <img src={Bell} alt="" />
                                </div>
                                <div>
                                    <img src={Person} alt="" />
                                </div>
                                <h6 className='mb-0 dark:text-white'>Riandra</h6>
                                <div>
                                    {isDark ? <span 
                                    onClick={()=> setIsDark(!isDark)}
                                    className='cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill text-white" viewBox="0 0 16 16">
                                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                    </svg>
                                    </span> : <span
                                        onClick={()=> setIsDark(!isDark)}
                                     className='cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                    </svg>
                                        </span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;