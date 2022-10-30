import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import { Menu } from 'antd';
import { Route, Routes, useNavigate} from 'react-router-dom';
import { DashboardOutlined, DashOutlined, FileOutlined, HomeOutlined, PoweroffOutlined, UnderlineOutlined, UserOutlined } from '@ant-design/icons';

function Sidebar(){
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
export default Sidebar;