/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { withStyles } from '@material-ui/core/styles';
import {
  InputAdornment, IconButton, CircularProgress
} from '@material-ui/core';
import { VisibilityOutlined, VisibilityOffOutlined } from '@material-ui/icons';
import firebase from 'firebase/app';
import {
  Content, Input, SText, StyledButton, AtIcon, LockIcon, SImg
} from '../../../components';
import logo from '../../../assets/img/logo.png';
import { setAlert } from '../../../_store/actions';
import { login } from '../../../_store/actions/authActions';


export const Login = (props) => {
  const { dispatch, userInfo, history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userInfo.isLoggedIn) history.push('/reports');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const submit = async () => {
    setLoading(true);
    await firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      dispatch(setAlert({ open: true, variant: 'info', message: 'Login Successful' }));
      dispatch(login({ isLoggedin: true }));
      history.push('/reports');
    })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'invalid-email') {
          dispatch(setAlert({ open: true, variant: 'error', message: 'Invalid Email' }));
        } else if (errorCode === 'user-not-found') {
          dispatch(setAlert({ open: true, variant: 'error', message: 'No user With that email' }));
        } else {
          dispatch(setAlert({ open: true, variant: 'error', message: errorMessage }));
        }
      });
    setLoading(false);
  };

  return (
    <Content
      height="100vh"
      mobHeight="100vh"
      bg="#e9e9e9"
      flex
      justify="center"
      align="center"
    >
      <Content borderR="0.5em" height="50%" width="25%" mobWidth="80%" bg="#fff" padding="2em" flex align="center" justify="space-evenly" mobJustify="space-evenly" mobHeight="50%">
        <Content justify="center" align="center" flex>
          <SImg maxWidth="15%" src={logo} alt="logo" />
        </Content>
        <Content width="90%" mobWidth="90%" bmargin="1.5em">
          <SText size="27px" weight="600" color="#444444" lineHeight={1.2}>Sign In</SText>
          <SText size="14px" weight="400" color="#999999">Sign in to your account</SText>
        </Content>
        <Content width="90%" mobWidth="90%" height="30%" mobHeight="30%" flex justify="space-around" mobJustify="space-around">
          <Input
            label="Email"
            type="email"
            variant="outlined"
            name="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AtIcon color="#666666" size="16px" />
                </InputAdornment>
              )
            }}
          />
          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            name="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon color="#666666" size="16px" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </Content>
        <Content flex align="center" justify="center" height="20%" mobWidth="100%" mobHeight="20%">
          <StyledButton
            color="primary"
            width="80%"
            style={{ color: '#ffffff' }}
            variant="contained"
            onClick={submit}
          >
            {loading ? <CircularProgress style={{ color: '#ffffff' }} size={24} /> : 'Sign In '}
          </StyledButton>
        </Content>
        <Content flex horizontal mobHorizontal align="center">
          <SText size="14px">
            Don&apos;t have an account?
          </SText>
          <StyledButton color="primary" width="auto" onClick={() => history.push('signup')}>Sign Up</StyledButton>
        </Content>
      </Content>
    </Content>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

export default connect(mapStateToProps)(Login);
