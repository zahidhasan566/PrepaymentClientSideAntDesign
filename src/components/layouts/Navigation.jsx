import { Menu } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import AppUrl from '../../rest-client/AppUrl';
import RestClient from '../../rest-client/RestClient';
import Spinner from '../../components/utils/Spinner';
import { DashboardOutlined, DashOutlined, FileOutlined, HomeOutlined, PoweroffOutlined, UnderlineOutlined, UserOutlined } from '@ant-design/icons';

function Navigation() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const [current, setCurrent] = useState('mail');
    const [tokenStatus, setTokenStatus] = useState('')
    const [loading, setLoading] = useState(true)
    let items = '';

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
        items = [
      
        ]
    } else {
        items=[
			{label : "Home", key:"/home1", icon: <HomeOutlined/>},
			{label : "Dashboard",key:"/dashboard1", icon: <DashboardOutlined/>},
			{label : "Upload Data", key:"/upload_files1",icon: <FileOutlined/>},
			{label : "User List", key:"/user_list1", icon: <UnderlineOutlined/>},
			{label : "Profile", key:"/profile1", icon: <UserOutlined/>},
			{label : "signout", key:"/signout1", icon: <PoweroffOutlined/>},
			]
    }

    if(loading) {
        return <Spinner />
    }
    
    return (
        <Menu theme='dark' onClick={onClick} selectedKeys={[current]}  mode="inline" style={{ width: 256 }} className="ant-layout-sider ant-layout-sider-dark ant-layout-sider-collapsed" items={items} />
    )
}

export default Navigation