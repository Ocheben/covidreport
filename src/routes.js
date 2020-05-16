import React from 'react';
import Loadable from 'react-loadable';
import { CircularProgress } from '@material-ui/core';

import { Content, colors } from './components';

const Loading = () => (
  <Content height="100%" flex justify="center" position="absolute" style={{ zIndex: 1100 }} align="center">
    <CircularProgress style={{ color: colors.primary }} size={24} />
  </Content>
);

const Reports = Loadable({
  loader: () => import('./views/Reports/Reports'),
  loading: Loading,
});

const routes = [
  {
    path: '/reports', exact: true, name: 'Reports', component: Reports
  },
];

export default routes;
