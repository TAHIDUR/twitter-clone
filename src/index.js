import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { MoralisProvider } from 'react-moralis'

const appId = 'uQPWCdY0ULcyy2S6yt5EKjBvRaTcHRebaITfT2Su';
const serverUrl = 'https://m53au5ddlosx.usemoralis.com:2053/server';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark'
  }
})

ReactDOM.render(
  <React.StrictMode>  
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
