import Logo from '../Components/Logo';
import RankingComponent from '../Components/RankingComponent';
import { styled } from 'styled-components';

export default function IndexPage() {
  return (
    <SCIndexPage>
      <Logo />
      <RankingComponent />
      <a href='/signup' >Crie sua conta para usar nosso serviço!</a>
    </SCIndexPage>
  )
}

const SCIndexPage = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

    a{
      color: #000;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-top: 82px;
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }

      @media (max-width: 750px) {
          font-size: 18px;
          text-align: center;
      }
  }
`;