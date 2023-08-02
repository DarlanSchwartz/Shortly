import { useEffect, useState } from 'react';
import Logo from '../Components/Logo';
import RankingComponent from '../Components/RankingComponent';
import { styled } from 'styled-components';
import axios from 'axios';

export default function IndexPage() {

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/ranking`)
    .then(res =>{
      console.log(res);
    })
    .catch(error =>{

    });

  },[])

  return (
    <SCIndexPage>
      <Logo />
      <RankingComponent />
      <h2>Crie sua conta para usar nosso serviço!</h2>
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