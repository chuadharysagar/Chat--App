import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Chat from './pages/chat/Chat'
import ProfileUpdate from './pages/profileUpdate/ProfileUpdate'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
   return (
      <> <ToastContainer />
         <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/chat' element={<Chat />}></Route>
            <Route path='/profile' element={<ProfileUpdate />}></Route>
         </Routes>
      </>
   )
}

export default App;
