import { useState } from 'react';
import { styled } from 'styled-components';
import Logo from '../Components/Logo';
import { greenButtonColor } from '../Colors/colors';
import ShortenedLink from '../Components/ShortenedLink';

export default function HomePage() {

  return (
    <SCHomePage>
        <Content>
        <Logo/>
        <form action="">
          <input type="text" id='url-to-short' name='url-to-short' placeholder='Links que cabem no bolso' />
          <button>Encurtar link</button>
        </form>
        <div className='links-list'>
        <ShortenedLink/>
        <ShortenedLink/>
        <ShortenedLink/>
        </div>
        
        </Content>
    </SCHomePage>
  )
}

const Content = styled.div`
  display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   max-width: 1020px;
   width: 100%;

   .links-list{
    margin-top: 60px;
    display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: 42px;
   }
`;

const SCHomePage = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;

  form{
    margin-top: 136px;
    display: flex;
    flex-direction: row;
    gap: 69px;
    width: 100%;

    input{
      height: 60px;
      max-width:769px;
      width: 100%;
      padding-left: 10px;
    }

    button{
      border: 0;
      background-color: ${greenButtonColor};
      border-radius: 12px;
      width: 182px;
      height: 60px;
      color: white;
    }
  }
`;