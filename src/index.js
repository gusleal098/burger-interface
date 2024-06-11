import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles';
import { UserProvider } from './hooks/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <UserProvider>
  <Login/>
  </UserProvider>
  <ToastContainer autoClose={2000} theme='colored'/>
  <GlobalStyles/>
  </>
);