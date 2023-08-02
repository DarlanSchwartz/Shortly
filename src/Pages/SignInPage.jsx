import { useContext, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Logo from '../Components/Logo';
import { greenButtonColor } from '../Colors/colors';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../Contexts/UserContext';

export default function SignInPage() {

  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value,
    };

    axios.post(`${import.meta.env.VITE_API_URL}/signin`, user)
      .then(res => {
        localStorage.setItem('token',res.data.token);
        navigate('/home');
      }).catch(error => {
        console.log(error);
      });
  }

  return (
    <SCSignUpPage>
       <Logo/>
       <form onSubmit={login}>
        <input required ref={email} type="email" placeholder='E-mail'/>
        <input required ref={password} type="password" placeholder='Senha'/>
        <button>Entrar</button>
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