import React from 'react';
import Footer from './Footer';
// import Header from './Header';
import Navigation from './Navigation';
import { Image } from 'antd';
// import Sidebar from './Siderbar';
import Logo from '../../assets/Daraz.png';

const Layout =({children}) =>{
    return(
        <>
            <div>  
            {/* <Image
        width={100}
        src= {Logo}/> */}

            <Navigation/>
            {/* <Header/>   */}
                <section class="ant-layout">
                <main>
                    {children}
                </main>
                <Footer/> 
                </section>
            </div>
        
        </>
    )
}

export default Layout;