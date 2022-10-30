import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import Result from 'ant-design-pro/lib/Result';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
             <App />
    // </React.StrictMode>
);

