import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');

  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }
  body {
    font-weight: 400;
    font-family: "Source Sans 3", sans-serif;
    color: ${props => props.theme.color.blk};
    line-height: 1.2;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
  ol, ul {
    list-style: none;
  }
`;

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyle />
          <App />
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);