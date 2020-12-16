import { createGlobalStyle } from 'styled-components';


// creates style for the whole website and toggles between themes
export const GlobalStyles = createGlobalStyle`
    body {
        transition: 0.4s linear;
        background: ${({ theme }) => theme.backgroundColor};
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
        color: ${({ theme }) => theme.text};
        overflow-x: hidden;
    }
`;