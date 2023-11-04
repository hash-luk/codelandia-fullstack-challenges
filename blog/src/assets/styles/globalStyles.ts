import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
    }

    body {
        background-color: ${props => props.theme.color.darkScale.dark30};
    }
`;


export default GlobalStyle;