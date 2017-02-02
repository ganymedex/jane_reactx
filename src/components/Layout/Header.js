import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/enusts">
        <Link to="/enusts"><Icon type="bars" />消息</Link>
      </Menu.Item>
      <Menu.Item key="/index">
        <Link to="/index"><Icon type="home" />主页</Link>
      </Menu.Item>
      <Menu.Item key="/main">
        <Link to="/main"><Icon type="star" />发布</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
