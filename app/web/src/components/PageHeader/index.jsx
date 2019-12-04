import React from 'react';
import { Breadcrumb } from 'antd';
import styles from 'index.less';

const PageHeader = props => {
  return (
    <div className={styles.pageHeader}>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.detail}>
      </div>
    </div>
  )
};
