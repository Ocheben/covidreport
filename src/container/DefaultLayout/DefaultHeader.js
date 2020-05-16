import React, { useState } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Icon
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Media from 'react-media';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { styles } from '../../assets/styles/style';
import { logout } from '../../_store/actions/authActions';
import { SImg } from '../../components';
// import { removeUser } from '../../_actions/authAction';


const DefaultHeader = (props) => {
  const {
    dispatch, history, classes, open, handleDrawerOpen, sidebarFixed, userInfo
  } = props;
  const initialState = {
    isMobile: '',
    anchorEl: null,
  };
  const { client } = userInfo;
  const [state, setstate] = useState(initialState);

  const handleProfileMenuOpen = (event) => {
    setstate(s => ({ ...s, anchorEl: event.currentTarget }));
  };

  const handleLogout = () => {
    // setstate(s => ({ ...s, anchorEl: null }));
    dispatch(logout());
    history.push('/login');
  };

  const { isMobile, anchorEl } = state;
  return (
    <AppBar
      position="fixed"
      className={classNames({
        [classes.appBarShift]: isMobile ? false : sidebarFixed,
        [classes.appBar]: !isMobile,
        [classes.mobileAppBar]: isMobile ? true : userInfo.role !== 'admin'

      })}
    >
      <Media query="(max-width: 992px)" onChange={matches => setstate(s => ({ ...s, isMobile: matches }))} />
      <Toolbar disableGutters={false}>
        { isMobile && userInfo.role === 'admin'
              && (
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              )
          }
        {/* <img className={classes.appBarLogo} alt="" src={logo} /> */}
        <a
          href="https://www.samsplc.com"
          style={{
            height: '2em', margin: 0, padding: 0, textDecoration: 'none'
          }}
        >
          <SImg maxWidth="10em" src={logo} alt="logo" />
        </a>
        <div>
          <Typography variant="h5" color="inherit" noWrap>
            {isMobile ? '' : ''}
          </Typography>
        </div>
        <div className={classes.grow} />
        <Typography variant="button" color="inherit" style={{ float: 'right', marginLeft: '1em' }} noWrap>
          {isMobile ? '' : client}
        </Typography>
        <IconButton
          aria-owns={anchorEl ? 'material-appbar' : undefined}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Icon>account_circle</Icon>
        </IconButton>
        <Menu
          id="material-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setstate(s => ({ ...s, anchorEl: null }))}
          style={{ marginTop: 35 }}
          classes={{ paper: classes.menu }}
        >
          <MenuItem onClick={handleLogout}>
            <Icon style={{ color: '#b71c1c', marginRight: 10 }}>exit_to_app</Icon>
            Logout
          </MenuItem>
        </Menu>

      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userInfo,
  userData: state.userData
});

// eslint-disable-next-line max-len
export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(DefaultHeader)));
