import { useContext, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Logo from '../Components/Logo';
import { greenButtonColor } from '../Colors/colors';
import ShortenedLink from '../Components/ShortenedLink';
import axios from 'axios';
import UserContext from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const url = useRef();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/users/me`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(res => {
        console.log(res.data);
       setUser(res.data);
      })
      .catch(error =>  navigate('/')); //console.log(error.response.data)
  }, []);

  function shortenUrl(e)
  {
    e.preventDefault();

    axios.post(`${import.meta.env.VITE_API_URL}/urls/shorten`,{url:url.current.value},{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
    .then(res =>{
      console.log(res);
    })
    .catch(error =>{
      console.log(error);
    });
  }

  return (
    <SCHomePage>
      <Content>
        <Logo />
        <form onSubmit={shortenUrl}>
          <input required ref={url} type="text" id='url-to-short' name='url-to-short' placeholder='Links que cabem no bolso' />
          <button>Encurtar link</button>
        </form>
        <div className='links-list'>
          {
            user && user.shortenedUrls.map((url,index) =>{
            return (
              <ShortenedLink key={index} url={url}/>
            );
           })
          }
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
      border: 1px solid rgba(0,0,0,0);
      border-radius: 12px;
      width: 182px;
      height: 60px;
      color: white;

      &:hover{
        border: 1px solid ${greenButtonColor};
        background-color: white;
        color: ${greenButtonColor};
      }
    }
  }
`;