import React from 'react';
import { connect } from 'react-redux';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import { SText } from '../styledComponents';

const MainBreadcrumbs = ({ userData: { breadcrumbData } }) => (
  <div style={{ display: 'flex', position: 'relative' }}>
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} arial-label="Breadcrumb">
      <HomeIcon color="primary" style={{ verticalAlign: 'top', height: '0.8em' }} />
      {breadcrumbData.parent && <SText color="#666666" size="15px">{breadcrumbData.parent}</SText>}
      {breadcrumbData.child && <SText color="#666666" size="15px">{breadcrumbData.child}</SText>}
    </Breadcrumbs>
  </div>
);

const mapStateToProps = state => ({
  userData: state.userData,
});

export default connect(mapStateToProps)(MainBreadcrumbs);
