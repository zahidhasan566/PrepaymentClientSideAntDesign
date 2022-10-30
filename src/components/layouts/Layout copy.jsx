import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
// import Sidebar from './Siderbar';

const Layout =({children}) =>{
    return(
        <>
            <div>
                <Navigation/>
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        
        </>
    )
}

export default Layout;