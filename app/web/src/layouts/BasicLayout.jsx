import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { connect } from 'dva';
import HeaderTop from '@/components/HeaderTop';
const { Header, Content, Footer } = Layout;

const BasicLayout = props => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <HeaderTop userInfo={{ userName: 'Eacan' }} />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
};

export default connect()(BasicLayout);
