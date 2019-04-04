import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import { createShallow } from '@material-ui/core/test-utils';
import { Button } from '@material-ui/core';
import AuthContainer from '../client/components/AuthContainer';

configure({ adapter: new Adapter() });

describe('Auth Container Component: ', () => {
  let wrapper;
  const clickMe = jest.fn();
  const clickMe2 = jest.fn();
  const props = {
    clickFn: clickMe,
    clickFn2: clickMe2,
  };
  // const clickFn = jest.fn();
  // let shallow;

  beforeAll(() => {
    // shallow = createShallow();
    wrapper = shallow(<AuthContainer handleSignUp={props.clickFn} handleLogin={props.clickFn2} />);
  });

  it('Should render an auth div', () => {
    expect(wrapper.find('.auth')).toHaveLength(1);
  });

  it('Should render two buttons', () => {
    // const authDiv = wrapper.find('.auth');
    expect(
      // wrapper
      //   .find('.auth')
      //   .shallow()
      //   .find('form')
      //   .shallow()
      //   .find('div')
      //   .shallow()
      //   .find(Button),
      wrapper.find(Button),
    ).toHaveLength(2);
  });

  describe('Sign Up Button:', () => {
    it('Should be the first button', () => {
      const signUpBtn = wrapper.find('.signUp');
      expect(signUpBtn).toHaveLength(1);
      // const signUpBtn = authDiv.childAt(3);
      expect(signUpBtn.type()).toEqual(Button);
      // expect(signUpBtn.hasClass('signUp')).toBe(true);
    });

    it('Sign up button should trigger fn call on click', () => {
      // const signUpBtn = wrapper.find('form').childAt(3);
      // const signUpBtn = wrapper.find('.buttonsDiv');
      const signUpBtn = wrapper.find('.signUp');
      signUpBtn.simulate('click');
      // expect(props.clickFn).toHaveBeenCalled();
      expect(props.clickFn.mock.calls.length).toBe(1);
    });
  });

  describe('Login Button:', () => {
    it('Should be the second button', () => {
      const loginBtn = wrapper.find('.login');
      expect(loginBtn).toHaveLength(1);
      expect(loginBtn.type()).toEqual(Button);
    });

    it('Login button should trigger fn call on click', () => {
      const loginBtn = wrapper.find('.login');
      loginBtn.simulate('click');
      expect(props.clickFn2.mock.calls.length).toBe(1);
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
