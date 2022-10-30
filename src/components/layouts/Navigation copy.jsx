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
            {
                label: '[ Blog ]',
                key: '/'
            },
            {
                label: '[ Create Post ]',
                key: '/post-create'
            },
            {
                label: '[ My Posts ]',
                key: '/my-posts'
            },
            {
                label: '[ My Profile ]',
                key: '/my-profile'
            },
            {
                label: '[ Sign out ]',
                key: '/sign-out'
            }
        ]
    } else {
        items = [
            {
              label: '[ Blog ]',
              key: '/'
            },
            {
                label: '[ Sign In ]',
                key: '/sign-in'
            },
            {
                label: '[ Sign Up ]',
                key: '/sign-up'
            }
        ]
    }

    if(loading) {
        return <Spinner />
    }
    
    return (
        <Menu theme='dark' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}

export default Navigation