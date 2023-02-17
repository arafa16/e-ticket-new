import React from 'react';
import './App.css';
import env from 'react-dotenv';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login/Login.jsx';
import CreateStatus from './pages/setting/CreateStatus';
import NotFound from './components/error/NotFound';
import Setting from './pages/setting/Setting';
import UserTicket from './pages/ticket/UserTicket';
import User from './pages/user/User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/users' element={<User />} />
          <Route path='/ticket' element={<UserTicket />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/createStatus' element={<CreateStatus />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
