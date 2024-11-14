import React from 'react';
import { Layout} from 'antd';

const { Header} = Layout;
const AdminHeader = () => {
  return (
      <Header theme="dark" style={{ height: '100px',  padding: 0, textAlign: 'center',color: 'white' }}>
          <h1>BOOK</h1>
      </Header>
  );
};


export default AdminHeader;
