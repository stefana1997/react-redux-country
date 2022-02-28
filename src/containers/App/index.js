import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Routes from '../../routes';
import theme from '../../theme';
import { Provider } from 'react-redux';
import createStore from '../../store';

const store = createStore();
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
