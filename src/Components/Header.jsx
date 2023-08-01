import { styled } from "styled-components";

export default function Header() {
    return (
        <SCHeader>Header</SCHeader>
    );
}

const SCHeader = styled.header`

height: 90px;
width: 100%;
display: flex;
justify-content: space-evenly;

`;

