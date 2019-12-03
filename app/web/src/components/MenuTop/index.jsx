import React from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';

const MenuTop = props => {
  const menu = [
    { name: '首页', id: 1, url: '/' },
    { name: '项目管理', id: 2, url: '/products' },
    { name: '回归测试', id: 3, url: '/cases' },
    { name: '监控预警', id: 4, url: 'monitors' },
  ];
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      {menu.map(item => (
        <Menu.Item key={item.id}>
          <Link to={item.url}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuTop;
