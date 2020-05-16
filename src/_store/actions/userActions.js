/* eslint-disable import/prefer-default-export */
import { USERCONSTANTS } from '../constants';

const {
  SET_ALERT, UPDATE_BREADCRUMB,
} = USERCONSTANTS;


const actionCreator = (type, payload) => ({ type, payload });

export const setAlert = payload => actionCreator(SET_ALERT, payload);

export const updateBreadcrumb = payload => actionCreator(UPDATE_BREADCRUMB, payload);
