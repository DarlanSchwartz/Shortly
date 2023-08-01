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

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{user,setUser}}>
      <ResetStyle/>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/ranking' element={<RankingPage/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}