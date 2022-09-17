import React from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Shared/Header';
import SideBar from './Components/Shared/SideBar'
import DashBoard from './Pages/DashBoard';

const { Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className='App'>
      <Layout>
      <Header />

      </Layout>
      <Layout>
        <Sider style={{ background: '#F1F2F7' }}>
          <SideBar />
        </Sider>
        <Content style={{background: '#fff'}}>
          <DashBoard />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
