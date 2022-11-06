import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppUrl from '../../rest-client/AppUrl';
import RestClient from '../../rest-client/RestClient';
import Spinner from '../../components/utils/Spinner';
import Logo from '../../assets/Daraz.png';
import { DashboardOutlined, DashOutlined, FileOutlined, HomeOutlined, PoweroffOutlined, UnderlineOutlined, UserOutlined } from '@ant-design/icons';
import { Image } from 'antd';
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


    if(token && tokenStatus != 'user not found') {
        items=[
            // { title:"Prepayment",  key:"/", icon: <img src={Logo}  height={40} style={{paddingTop:0}}/>},
            {label : "Dashboard",key:"/dashboard", icon: <DashboardOutlined/>},
            {label : "Upload Data", key:"/dashboard2",icon: <FileOutlined/>},
            {label : "User List", key:"/dashboard3", icon: <UnderlineOutlined/>},
            {label : "Profile", key:"/dashboard4", icon: <UserOutlined/>},
            {label : "signout", key:"/sign-out", icon: <PoweroffOutlined/>},
            ]
    } else {
        return <Spinner />
    }

    // if(loading) {
    //     return <Spinner />
    // }
    
    return (
             <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
              <div className="logo">
                <img src={Logo}  height={60}/>
                    <p >Daraz Prepayment</p>
              </div>
                <Menu theme="dark" onClick={onClick} selectedKeys={[current]} defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
    )
}

export default Navigation