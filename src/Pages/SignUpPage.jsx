import { useState } from 'react';
import { styled } from 'styled-components';
import Logo from '../Components/Logo';
import { greenButtonColor } from '../Colors/colors';

export default function SignUpPage() {

  return (
    <SCSignUpPage>
       <Logo/>
       <form action="">
        <input type="text" placeholder='Nome'/>
        <input type="email" placeholder='E-mail'/>
        <input type="password" placeholder='Senha'/>
        <input type="password" placeholder='Confirmar Senha'/>

        <button>Criar Conta</button>
       </form>
    </SCSignUpPage>
  )
}

const SCSignUpPage = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  form{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 128px;
    max-width: 769px;
    width: 100%;
    gap: 25px;
    input{
      padding-left: 22px;
      height: 60px;
      width: 100%;
      border-radius: 12px;
      border: 1px solid rgba(120, 177, 89, 0.25) !important;
      background: #FFF;
      box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12)!important;
    }
    button{
      border-radius: 12px;
      background: ${greenButtonColor};
      color: white;
      border: 0;
      width: 182px;
      height: 60px;
    }
  }
`;