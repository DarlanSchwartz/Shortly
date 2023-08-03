import { useState } from 'react';
import UserContext from './Contexts/UserContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import HomePage from './Pages/HomePage';
import IndexPage from './Pages/IndexPage';
import RankingPage from './Pages/RankingPage';
import Header from './Components/Header';
import ResetStyle from './Styles/ResetStyle';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [user, setUser] = useState(null);

  function updateUser() {
    axios.get(`${import.meta.env.VITE_API_URL}/users/me`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(res => {
        //console.log(res.data);
        setUser(res.data);
      })
      .catch(error => navigate('/')); //console.log(error.response.data)
  }

  return (
    <UserContext.Provider value={{ user, setUser, updateUser }}>
      <ToastContainer />
      <BrowserRouter>
        <ResetStyle />
        <Header />
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/ranking' element={<RankingPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}