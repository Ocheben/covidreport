import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { Input } from '../../../../components';
// import { shallow } from 'enzyme';
import { Login } from './Login';


describe('Login', () => {
  let shallow;
  let container;
  beforeAll(() => {
    shallow = createShallow();
    container = shallow(<Login />);
  });
  it('Should contain a phone input', () => {
    expect(container.find(Input).at(0).prop('name')).toEqual('phone');
  });
  it('Should have phone input connected to state', () => {
    container.find(Input).at(0).simulate('change', { target: { name: 'phone', value: '08034846400' } });
    expect(container.find(Input).at(0).prop('value')).toEqual('08034846400');
  });
  it('Should contain a password input', () => {
    expect(container.find(Input).at(1).prop('name')).toEqual('password');
  });
  it('Should have password input connected to state', () => {
    container.find(Input).at(1).simulate('change', { target: { name: 'password', value: 'Oche Onoja' } });
    expect(container.find(Input).at(1).prop('value')).toEqual('Oche Onoja');
  });
});
