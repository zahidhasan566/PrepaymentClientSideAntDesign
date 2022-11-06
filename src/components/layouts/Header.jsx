import React from 'react'
import { Menu } from 'antd';

function Header() {
    return (
        <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px',fontSize:20,paddingLeft:20, color:'white' }}
      >
            Dashboard
        {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    )
}

export default Header