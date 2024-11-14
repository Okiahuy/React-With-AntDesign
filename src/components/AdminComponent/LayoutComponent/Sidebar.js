import React from 'react';
import { Layout, Menu, Button} from 'antd';
import { Link} from 'react-router-dom';
import {
  DashboardOutlined,
  SettingOutlined,
  ProductOutlined,
  UserOutlined,
  StopTwoTone
} from '@ant-design/icons';

import myImage from '../../../assets/admin.png'; // Đường dẫn đến ảnh

const { Sider } = Layout;
const logout = () => {
  // Xóa thông tin người dùng khỏi localStorage
  localStorage.removeItem('user');
  console.log('Đăng xuất thành công.');
  // Có thể thêm logic điều hướng về trang đăng nhập hoặc trang chính
  window.location.href = '/login'; // Thay đổi đường dẫn tùy ý 
};
const user = JSON.parse(localStorage.getItem('user')); // Lấy thông tin người dùng từ localStorage

if (user) {
  const FullName = user.fullName; // Lấy Token
  console.log('User:', FullName); // In ra Token để kiểm tra
} else {
  // handle();
  console.log('Không có người dùng đăng nhập.');
}
const Sidebar = () => {
  return (
      <Sider collapsible style={{ width: '500px' }}>
      <div className="logo" style={{ color: 'white', padding: '16px', textAlign: 'center' }}>
          <img
          src={myImage} 
          alt="Mô tả ảnh" 
          style={{ width: '150px', height: '150px', borderRadius: '100%' }}
      />
      </div>
      <Menu
          theme="dark"
          mode="inline"
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: <Link to="/admin/dashboard">TRANG CHỦ</Link>,
            },
            {
              key: '2',
              icon: <SettingOutlined />,
              label: <Link to="/admin/fetch-book">FETCH BOOK</Link>,
            },
            {
              key: '3',
              icon: <SettingOutlined />,
              label: <Link to="/admin/axios-book">AXIOS BOOK</Link>,
            },
            user != null ? {
              key: '5', 
              icon: <UserOutlined />,
              label: (
                <>
                  <span style={{ marginRight: 20 }}>Xin chào, {user.fullName}!</span>
                </>
              ),
              children: [
                {
                  key: '5-1',
                  label:(
                    <>
                     
                      <Button
                        style={{  color: 'black' }}
                        onClick={logout}
                      >
                        <StopTwoTone /> Đăng xuất
                      </Button>
                    </>
                  ),
                },
              ],
            } : {
              key: '4',
              icon: <ProductOutlined />,
              label: <Link to="/admin/login">ĐĂNG NHẬP</Link>,
            }
          ]}
        />

  </Sider>
  );
};

export default Sidebar;
