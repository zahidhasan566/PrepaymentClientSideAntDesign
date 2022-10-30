import React, { Fragment } from "react";
import { Route, Routes, useNavigate} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ProtectedRoutes from './components/utils/ProtectedRoutes';
import { Menu } from 'antd';
import { DashboardOutlined, DashOutlined, FileOutlined, HomeOutlined, PoweroffOutlined, UnderlineOutlined, UserOutlined } from '@ant-design/icons';
import Navigation from "./components/layouts/Navigation";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Signin from "./pages/auth/Signin";
function App(){
    return(
		<div>
			<Header />
			<div style={{display:"flex", flexDirection:"row"}}>
			<SideMenu />
			<Content />

			</div>
			
			<Footer />

		</div>
          
    );
}
function SideMenu(){
	const navigate = useNavigate();
	return(
		<div>
		<Menu onClick={({key})=>{
			if(key === "signout"){
	
			}
			else{
				navigate(key)
			}
	
		}}
		
		items={[
			{label : "Home", key:"/home1", icon: <HomeOutlined/>},
			{label : "Dashboard",key:"/dashboard1", icon: <DashboardOutlined/>},
			{label : "Upload Data", key:"/upload_files1",icon: <FileOutlined/>},
			{label : "User List", key:"/user_list1", icon: <UnderlineOutlined/>},
			{label : "Profile", key:"/profile1", icon: <UserOutlined/>},
			{label : "signout", key:"/signout1", icon: <PoweroffOutlined/>},
			]}>
	</Menu>
	</div>
	)

}
function Content(){
    return(
        <>
            <div>
               <Routes>
                <Route path="/home1" element={<Signin/>}></Route>
                <Route path="/dashboard1" element={<div>d1</div>}></Route>
                <Route path="/upload_files1" element={<div>u1</div>}></Route>\
                <Route path="/user_list1" element={<div>us</div>}></Route>
                <Route path="/profile1" element={<div>pe</div>}></Route>
               </Routes>
            </div>
        
        </>
    )
}


export default App;
