/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-cycle */
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { Redirect, Route, Switch, } from 'react-router-dom';
import { connect } from 'react-redux';
import Media from 'react-media';
import routes from '../../routes';
import DefaultHeader from './DefaultHeader';
import { styles } from '../../assets/styles/style';

const DefaultLayout = (props) => {
  const { classes, userInfo, history } = props;
  const initialState = {
    drawerOpen: false,
    sidebarFixed: false,
    isMobile: ''
  };
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    if (!userInfo.isLoggedIn) history.push('/login');
  }, []);


  const handleDrawerOpen = () => {
    setstate(s => ({ ...s, drawerOpen: true }));
  };
  const { drawerOpen, sidebarFixed, isMobile } = state;

  return (
    <div className={classes.root}>
      <Media query="(max-width: 992px)" onChange={matches => setstate(s => ({ ...s, isMobile: matches }))} />
      <CssBaseline />
      <DefaultHeader
        handleDrawerOpen={handleDrawerOpen}
        open={drawerOpen}
        sidebarFixed={sidebarFixed}
      />
      <div
        className={classNames(classes.container, {
          [classes.contentShift]: sidebarFixed,
          [classes.content]: !isMobile,
          [classes.mobileContent]: isMobile ? true : userInfo.role !== 'admin',
        })}
          //    className={classes.content}
      >
        <Switch>
          {routes.map(route => (route.component ? (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={prop => (
                <route.component {...prop} />
              )}
            />
          ) : (null)))}
          {
            <Redirect from="/" to="/reports" />
          }
        </Switch>
      </div>
    </div>

  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

export default connect(mapStateToProps)(withStyles(styles)(DefaultLayout));
