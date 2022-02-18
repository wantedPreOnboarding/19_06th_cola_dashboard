import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import MaterialGlobalStyles from 'styles/MUIGlobalStyles';
import { theme } from 'styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import MUIGlobalStyles from 'styles/MUIGlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MUIGlobalStyles />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
