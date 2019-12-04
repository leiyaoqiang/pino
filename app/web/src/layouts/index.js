import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import HeaderTop from '@/components/HeaderTop';
import Breadcrumb from '@/components/Breadcrumb';
const { Header, Content, Footer } = Layout;

const BasicLayout = props => {
  return (
    <>
      <Layout className="layout">
        <Header>
          <HeaderTop userInfo={{ userName: 'Eacan' }} />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb location={props.location} style={{ margin: '16px 0' }} />
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
