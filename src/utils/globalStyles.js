import { createGlobalStyle } from 'styled-components';


// creates style for the whole website and toggles between themes
export const GlobalStyles = createGlobalStyle`
    body {
        transition: 0.4s linear;
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.text};
        overflow-x: hidden;
    }
`;