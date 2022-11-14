import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css'
import PostCreate from "./pages/post/PostCreate";
import PostView from "./pages/post/PostView";
import Signin from "./pages/auth/Signin";
import BlogIndex from "./pages/blog/BlogIndex";
import './App.css'
import ProtectedRoutes from './components/utils/ProtectedRoutes';
import Logout from "./components/utils/Logout";
import MyPost from "./pages/post/MyPost";
import PostEdit from "./pages/post/PostEdit";
import Signup from "./pages/auth/Signup";
import MyProfile from "./pages/profile/MyProfile";
import DashBoard from "./pages/Dashboard";
import ExportItem from "./pages/Reports/exportItem";

function App() {
	return (
		<Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Signin />} />
					<Route path="/sign-in" element={<Signin />} />
					<Route path="/sign-up" element={<Signup />} />
					
			
					<Route path="/dashboard" element={<DashBoard />} />
					<Route path="/export-item" element={<ExportItem />} />
					<Route path="/sign-out" element={<Logout />} />
				
				</Routes>
			</Router>
			
			<Toaster />
		</Fragment>
	);
}

export default App;
