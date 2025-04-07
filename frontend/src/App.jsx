import React, { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './ComPonents/NaviBar/Navbar';
import Home from './Pages/Home';
import Notification from './Pages/Notification';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Network from './ComPonents/Network/Network';
import Message from './ComPonents/Messages/Message';
import Job from './ComPonents/Jobs/Job';
import Profile from './Pages/Profile';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Box sx={{ height: '100%', background: '#F4F2EE' }}>
        {isAuthenticated && <Navbar />}
        <Routes>
          <Route path={'/'} element={isAuthenticated ? <Home /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/signup' element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path='/network' element={<Network />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/message' element={<Message />} />
          <Route path='/jobs' element={<Job />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;


