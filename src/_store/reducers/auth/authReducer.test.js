import userInfo, { initState } from './authReducer';
import { AUTHCONSTANTS } from '../../constants';

describe('authReducer', () => {
  const loginPayload = {
    user_type: 'ADMIN',
    client: 'STETiS Ltd'
  };

  it('should return initial state', () => {
    expect(userInfo(undefined, {})).toEqual(initState);
  });

  it('should handle login', () => {
    expect(userInfo(initState, {
      type: AUTHCONSTANTS.LOGIN,
      payload: loginPayload
    })).toEqual({
      ...initState,
      ...loginPayload,
      isLoggedIn: true
    });
  });

  it('should handle logout', () => {
    expect(userInfo({
      ...initState,
      ...loginPayload
    }, { type: AUTHCONSTANTS.LOGOUT })).toEqual(initState);
  });
});
