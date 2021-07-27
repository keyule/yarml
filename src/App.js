import MyTable from './table.js'
import React from 'react';
import {ThemeProvider, createTheme, Paper} from '@material-ui/core';

function App() {
  const theme = createTheme({
    palette: {
      type: 'dark',
      background: {
        paper: '#1e1e1e',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{height: "100vh"}}>
        <div className="App">
            <MyTable />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
