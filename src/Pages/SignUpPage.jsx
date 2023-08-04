import { useRef, useState } from 'react';
import { styled } from 'styled-components';
import Logo from '../Components/Logo';
import { greenButtonColor } from '../Colors/colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const password2 = useRef();
  const navigate = useNavigate();

  function register(e) {
    e.preventDefault();

    const user = {
      name: name.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: password2.current.value,
    };

    axios.post(`${import.meta.env.VITE_API_URL}/signup`, user)
      .then(res => {
        alert("Cadastrado com sucesso");
        navigate('/signin');
      }).catch(error => {
        alert(error.response.data);
      });
  }

  return (
    <SCSignUpPage>
      <Logo />
      <form onSubmit={register}>
        <input required ref={name} type="text" placeholder='Nome' />
        <input required ref={email} type="email" placeholder='E-mail' />
        <input required ref={password} type="password" placeholder='Senha' />
        <input required ref={password2} type="password" placeholder='Confirmar Senha' />
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
      &:hover{
        border: 1px solid ${greenButtonColor};
        background-color: white;
        color: ${greenButtonColor};
      }
    }
  }
`;