import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
function RouteContent(){
    return(
        <>
            <div>
               <Routes>
                <Route path="/home1" element={<div>d1</div>}></Route>
                <Route path="/dashboard1" element={<div>d1</div>}></Route>
                <Route path="/upload_files1" element={<div>u1</div>}></Route>\
                <Route path="/user_list1" element={<div>us</div>}></Route>
                <Route path="/profile1" element={<div>pe</div>}></Route>
               </Routes>
            </div>
        
        </>
    )
}
export default RouteContent;