/* eslint-disable import/prefer-default-export */
import { USERCONSTANTS, AUTHCONSTANTS } from '../../constants';

export const initState = {
  client: '',
  loading: true,
  compLoad: '',
  alert: {
    open: false,
    variant: 'info',
    message: ''
  },
  breadcrumbData: {
    parent: 'Reports',
    child: null
  },
};

const {
  SET_LOADING, SET_ALERT, COMP_LOAD, UPDATE_BREADCRUMB
} = USERCONSTANTS;
const { LOGOUT } = AUTHCONSTANTS;

const userData = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };

    case COMP_LOAD:
      return {
        ...state,
        compLoad: action.payload
      };

    case SET_ALERT:
      return {
        ...state,
        alert: { ...state.alert, ...action.payload }
      };

    case UPDATE_BREADCRUMB:
      return {
        ...state,
        breadcrumbData: { ...state.breadcrumbData, ...action.payload }
      };
    case LOGOUT:
      return {
        ...initState
      };

    default: return state;
  }
};

export default userData;
