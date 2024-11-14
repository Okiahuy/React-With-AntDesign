import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
        const response = await axios.post('http://localhost:5084/api/auth/login', {
            UserName: values.username,
            Password: values.password,
        });
        const { fullName, roleID, email, token } = response.data;
        // Lưu thông tin người dùng vào LocalStorage
        localStorage.setItem('user', JSON.stringify({
            fullName,
            roleID,
            email,
            token,
        }));
        message.success('Đăng nhập thành công!');
        // Kiểm tra RoleID và điều hướng người dùng
        if (roleID === 1) {
            // Điều hướng đến trang admin nếu RoleID là 1
            window.location.href = '/admin'; //  đường dẫn đến trang admin 
        } else if (roleID === 2) {
            // Điều hướng đến trang user nếu RoleID là 2
            window.location.href = '/user'; // đường dẫn đến trang user
        } else { 
            window.location.href = '/admin'; 
            message.error('Đăng nhập thất bại!');
        }
    } catch (error) {
        message.error(error.response?.data || 'Đăng nhập thất bại!');
    } finally {
        setLoading(false); // Đặt loading về false trong cả trường hợp thành công và lỗi
    }
};

  return (
    <div style={{ maxWidth: 300, margin: '0 auto', padding: '50px' }}>
      <h2>Đăng nhập</h2>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
        >
          <Input placeholder="Tên đăng nhập" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
        >
          <Input.Password placeholder="Mật khẩu" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
