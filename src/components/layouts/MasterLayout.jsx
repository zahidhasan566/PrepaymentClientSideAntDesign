import React from 'react';
import MasterFooter from './Footer';
 import Masterheader from './Header';
import Navigation from './Navigation';
import { Image } from 'antd';
// import Sidebar from './Siderbar';
import Logo from '../../assets/Daraz.png';
import { Breadcrumb, Layout, Menu } from 'antd';
import './Navigation.css';

const MasterLayout =({children}) =>{

    const { Header, Content, Footer, Sider } = Layout;
    return(
        <>
            <Layout style={{ minHeight: '100vh' }}>
                {/* Sider Menu */}
                <Navigation/>
                     <Layout className="site-layout">

                        {/* Header */}
                         <Header className="site-layout-background" style={{ padding: 0 }} >
                          <Masterheader/>
                        </Header>

                         {/* Main Content */}
                        <Content style={{ margin: '0 16px' }}>
                                     {children}
                            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                               
                                Bill is a cat.
                            </div> */}
                        </Content>

                        {/* Footer */}
                        <Footer style={{ textAlign: 'center' }}>
                             <MasterFooter/>
                        </Footer>
                     </Layout>
            </Layout>
        </>
    )
}

export default MasterLayout;