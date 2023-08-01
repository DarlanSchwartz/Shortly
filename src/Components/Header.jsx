import { styled } from "styled-components";
import { greenButtonColor, headerLinksColor } from "../Colors/colors";

export default function Header() {
    function logout() {

    }
    return (
        <SCHeader>
            <Content>
                <h1>Seja bem-vindo(a), Pessoa!</h1>
                <Actions>
                    <a href="/signin">Entrar</a>
                    <a href="/signup">Cadastrar-se</a>
                    {/* <a href="/home">Home</a>
                    <a href="/ranking">Ranking</a>
                    <a onClick={logout}>Sair</a> */}
                </Actions>
            </Content>
        </SCHeader>
    );
}

const Content = styled.div`
    max-width: 1020px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SCHeader = styled.header`
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Actions = styled.aside`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 155px;

    h1{
        color: ${greenButtonColor};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal; 
    }
    a{
        color: ${headerLinksColor};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        cursor: pointer;
    }

`;


