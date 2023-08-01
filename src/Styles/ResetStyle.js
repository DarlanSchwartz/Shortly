import { createGlobalStyle } from "styled-components";

const ResetStyle = createGlobalStyle`


*{
    font-family: 'Lexend Deca', sans-serif;
    transition: all 200ms;
    box-sizing: border-box;
}

button{
    cursor: pointer;
}

input{
    border-radius: 12px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
}

a{
    text-decoration: none;
}
`;