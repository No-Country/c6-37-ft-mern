import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './context/UserContext';
import './index.css';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
    </UserProvider>
  </React.StrictMode>
);
