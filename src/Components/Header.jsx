import { styled } from "styled-components";
import { greenButtonColor, headerLinksColor } from "../Colors/colors";
import UserContext from "../Contexts/UserContext";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const { setUser, user } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    function logout() {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    }

    return (
        <SCHeader>
            <Content>
                {user ? <h1>Seja bem-vindo(a),{user.name}</h1> : <EmptyDiv />}
                <Actions>
                    {
                        user ?
                        
                            <>
                                <CustomLink active={location.pathname == '/home' ? 'true' : 'false'} href="/home">Home</CustomLink>
                                <CustomLink active={location.pathname == '/ranking' ? 'true' : 'false'} href="/ranking">Ranking</CustomLink>
                                <CustomLink active='false' onClick={logout}>Sair</CustomLink>
                            </>

                            :

                            <>
                                <CustomLink active={location.pathname == '/signin' ? 'true' : 'false'} href="/signin">Entrar</CustomLink>
                                <CustomLink active={location.pathname == '/signup' ? 'true' : 'false'} href="/signup">Cadastrar-se</CustomLink>
                            </>
                    }
                </Actions>
            </Content>
        </SCHeader>
    );
}

const EmptyDiv = styled.div`

width: 30px;
height: 20px;

`;

const CustomLink = styled.a`
    color: ${(props) => props.active == 'true' ? greenButtonColor : headerLinksColor};
    font-size: 14px;
    font-style: normal;
    font-weight: ${(props) => props.active == 'true' ? 'bold' : 400};;
    line-height: normal;
    cursor: pointer;
`;

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
`;


