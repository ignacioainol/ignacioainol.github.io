import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import MainPage from './components/MainPage';

const theme = createTheme({
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#ffa500"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
