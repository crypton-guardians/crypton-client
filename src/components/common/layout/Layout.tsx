import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout as AntLayout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Sider } = AntLayout;

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const CustomLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntLayout style={{ height: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
      </Header>
      <AntLayout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <AntLayout style={{ padding: '0 24px 24px', height: '100%' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              height: '100%',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            <Outlet />
          </Content>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
};

export default CustomLayout;
