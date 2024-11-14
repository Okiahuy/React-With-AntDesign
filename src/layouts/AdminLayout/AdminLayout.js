import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet để render các trang con trong layout
import Sidebar  from '../../components/AdminComponent/LayoutComponent/Sidebar'
import AdminHeader from '../../components/AdminComponent/LayoutComponent/AdminHeader';
import { Layout} from 'antd';
const {  Content } = Layout;

const AdminLayout = () => {
  return (
      <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar (Sider) */}
          <Sidebar />
          {/* Main layout */}
        <Layout>
          {/* Header */}
          <AdminHeader />
          {/* Content area */}
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Outlet />
          </Content>

        </Layout>

      </Layout>

  );
};

export default AdminLayout;
