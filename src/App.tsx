import React from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Shared/Header';
import SideBar from './Components/Shared/SideBar'
import DashBoard from './Pages/DashBoard';
import Maps from './Pages/Maps';
import { Routes, Route } from "react-router-dom";

const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className='App'>
      <Layout>
      <Header />

      </Layout>
      <Layout>
        <div className='hidden md:block'>
        <Sider style={{ background: '#F1F2F7' }}>
          <SideBar />
        </Sider>
        </div>

        <Content style={{background: '#fff', }}>
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
