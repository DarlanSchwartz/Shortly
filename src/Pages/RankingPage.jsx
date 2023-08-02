import { useContext, useEffect, useState } from 'react';
import Logo from '../Components/Logo';
import RankingComponent from '../Components/RankingComponent';
import { styled } from 'styled-components';
import UserContext from '../Contexts/UserContext';
import axios from 'axios';

export default function RankingPage() {

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/users/me`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(res => {
       // console.log(res.data);
       setUser(res.data);
      })
      .catch(error => {

        return navigate('/');
        //console.log(error.response.data);
      });
  }, [])

  return (
    <SCIndexPage>
      <Logo />
      <RankingComponent />
    </SCIndexPage>
  )
}

const SCIndexPage = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

    h2{
      color: #000;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-top: 82px;
  }
`;