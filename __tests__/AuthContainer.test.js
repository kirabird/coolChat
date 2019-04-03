import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthContainer from '../client/components/AuthContainer';

configure({ adapter: new Adapter() });

describe('Auth Container Component: ', () => {
  let wrapper;
  const clickFn = jest.fn();
  beforeAll(() => {
    wrapper = shallow(<AuthContainer
      handleSignUp={clickFn} 
      handleLogin={clickFn}
    />);
  });

  it('Should render an auth div', () => {
    expect(wrapper.find('.auth')).toHaveLength(1);
  });

  it('Should render two buttons', () => {
    const authDiv = wrapper.find('.auth');
    expect(authDiv.find('button')).toHaveLength(2);
  });

  describe('Sign Up Button:', () => {
    it('Should be the first button', () => {
      const signUpBtn = wrapper.find('.signUp');
      expect(signUpBtn).toHaveLength(1);
      // const signUpBtn = authDiv.childAt(3);
      expect(signUpBtn.type()).toEqual('button');
      // expect(signUpBtn.hasClass('signUp')).toBe(true);
    });

    it('Sign up button should trigger fn call on click', () => {
      const signUpBtn = wrapper.find('.auth').childAt(3);
      signUpBtn.simulate('click');
      expect(clickFn.mock.calls.length).toBe(1);
    });
  });

  describe('Login Button:', () => {
    it('Should be the second button', () => {
      const loginBtn = wrapper.find('.login');
      expect(loginBtn).toHaveLength(1);
      expect(loginBtn.type()).toEqual('button');
    });

    it('Login button should trigger fn call on click', () => {
      const loginBtn = wrapper.find('.login');
      loginBtn.simulate('click');
      expect(clickFn.mock.calls.length).toBe(2);
    });
  });

  describe('Inputs', () => {
    it('Should have a username input', () => {
      const usernameInput = wrapper.find('#usernameInput');
      expect(usernameInput).toHaveLength(1);
    });

    it('Should have a password input', () => {
      const passwordInput = wrapper.find('#passwordInput');
      expect(passwordInput).toHaveLength(1);
    });
  });
});
