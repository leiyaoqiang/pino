import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'umi/link';

const breadcrumbNameMap = {
  '/products': '项目管理',
  '/cases': '回归测试',
  '/monitors': '监控预警',
};

export default props => {
  const { location } = props;
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="/">
      <Link to="/">首页</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return <Breadcrumb style={props.style}>{breadcrumbItems}</Breadcrumb>;
};
