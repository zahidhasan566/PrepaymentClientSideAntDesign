// import { Menu } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppUrl from '../../rest-client/AppUrl';
import RestClient from '../../rest-client/RestClient';
import Spinner from '../../components/utils/Spinner';
import Logo from '../../assets/Daraz.png';
import { DashboardOutlined, DashOutlined, FileOutlined, HomeOutlined, PoweroffOutlined, UnderlineOutlined, UserOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import './Navigation.css';

function Navigation() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const [current, setCurrent] = useState('mail');
    const [tokenStatus, setTokenStatus] = useState('')
    const [loading, setLoading] = useState(true)
    let items = '';
    const { Header, Content, Footer, Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        getTokenStatus()
    }, [])

    const getTokenStatus = async () => {
        const response = await RestClient.getRequest(AppUrl.validateToken)
        setTokenStatus(response.data)
        setLoading(false)
    }

    const onClick = (e) => {
        setCurrent(e.key);
        navigate(e.key)
    };
    items=[
        // { title:"Prepayment",  key:"/", icon: <img src={Logo}  height={40} style={{paddingTop:0}}/>},
        {label : "Home", key:"/dashboard", icon: <HomeOutlined/>},
        {label : "Dashboard",key:"/dashboard1", icon: <DashboardOutlined/>},
        {label : "Upload Data", key:"/dashboard2",icon: <FileOutlined/>},
        {label : "User List", key:"/dashboard3", icon: <UnderlineOutlined/>},
        {label : "Profile", key:"/dashboard4", icon: <UserOutlined/>},
        {label : "signout", key:"/dashboard5", icon: <PoweroffOutlined/>},
        ]

    // if(token && tokenStatus != 'user not found') {
    //     items = [
      
    //     ]
    // } else {

    // }

    // if(loading) {
    //     return <Spinner />
    // }
    
    return (
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo">
          <img src={Logo}  height={60}/>
            <p >Daraz Prepayment</p>
            </div>
          <Menu theme="dark" onClick={onClick} selectedKeys={[current]} defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
        </Layout>
        // <div>
        //     <div className="logo">
        //                     <Image
        // width={100}
        // src= {Logo}/>
        //     </div>
        //     <Menu theme='dark' onClick={onClick} selectedKeys={[current]} mode="vertical" style={{ width: 256 , float: 'left', height:'100vh' }} className="ant-layout-sider ant-layout-sider-dark ant-layout-sider-collapsed" items={items} />
        // </div>
        
    )
}

export default Navigation