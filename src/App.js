import React from 'react';
import { connect } from 'react-redux';
import { createMuiTheme } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import {
  Route, Switch, BrowserRouter
} from 'react-router-dom';
import Loadable from 'react-loadable';
import { CircularProgress } from '@material-ui/core';
import { Alert, Content, colors } from './components';
import { setAlert } from './_store/actions';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#87bcc4' },
    secondary: { main: '#11cb5f' },
    error: { main: '#c62828' }
  },
  typography: {
    fontFamily: ['Poppins', 'Roboto']
  }
});

// Loadable
const Loading = ({ error, pastDelay }) => {
  if (error) {
    return <div>error</div>;
  }
  if (pastDelay) {
    return (
      <Content height="100%" flex justify="center" position="absolute" style={{ zIndex: 1100 }} align="center">
        <CircularProgress style={{ color: colors.primary }} size={24} />
      </Content>
    );
  }
  return null;
};

const ConnectedLogin = Loadable({
  loader: () => import('./views/Pages/Login/Login'),
  loading: Loading,
  delay: 200
});

const ConnectedSignup = Loadable({
  loader: () => import('./views/Pages/Signup/Signup'),
  loading: Loading,
  delay: 200
});

const DefaultLayout = Loadable({
  loader: () => import('./container/DefaultLayout/DefaultLayout'),
  loading: Loading,
  delay: 200
});

const App = (props) => {
  const { dispatch, userData: { alert } } = props;
  const history = createBrowserHistory();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Alert
          open={alert.open}
          variant={alert.variant}
          message={alert.message}
          handleClose={() => dispatch(setAlert({ open: false, variant: 'info', message: '' }))}
        />
        <BrowserRouter history={history}>
          <Switch>
            {/* <Route exact path="/" name="Landing Page" component={LandingPage} /> */}
            <Route exact path="/login" name="Login" component={ConnectedLogin} />
            <Route exact path="/signup" name="Signup" component={ConnectedSignup} />
            <Route path="/" name="Main App" component={DefaultLayout} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData
});
export default connect(mapStateToProps)(App);
