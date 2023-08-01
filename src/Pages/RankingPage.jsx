import { useState } from 'react';
import Logo from '../Components/Logo';
import RankingComponent from '../Components/RankingComponent';
import { styled } from 'styled-components';

export default function RankingPage() {

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