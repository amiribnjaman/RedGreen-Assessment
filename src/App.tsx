import React from 'react';
import { Layout } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Shared/Header';
const { Footer, Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className='App'>
      <Header />
    </Layout>
  );
}

export default App;
