import React, {useState} from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Shared/Header';
import SideBar from './Components/Shared/SideBar'
import DashBoard from './Pages/DashBoard';
import Maps from './Pages/Maps';
import { Routes, Route } from "react-router-dom";

const { Sider, Content } = Layout;

const App = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={`App ${isDark ? 'dark' : ''}`}>
      <Layout>
        <Header isDark={isDark} setIsDark={setIsDark}/>
      </Layout>
      
      <Layout>
        <div className=' hidden md:block'>
        <Sider>
          <SideBar isDark={isDark} />
        </Sider>
        </div>

        <Content>
          <Routes>
            <Route path='/' element={<DashBoard />} />
            <Route path='/maps' element={<Maps />} />
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
