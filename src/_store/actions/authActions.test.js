import { AUTHCONSTANTS } from '../constants';
import { login, logout } from './authActions';


describe('authActions', () => {
  it('should create an action to login', () => {
    const payload = 'Login info';
    const expectedAction = {
      type: AUTHCONSTANTS.LOGIN,
      payload
    };
    expect(login(payload)).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = {
      type: AUTHCONSTANTS.LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });
});
