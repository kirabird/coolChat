import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Msg from '../client/components/Msg';

configure({ adapter: new Adapter() });

describe('Message Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <Msg
        username="FrontLeg"
        message="I'm Cool"
      />,
    );
  });

  it('Should contain a div with the class message', () => {
    expect(wrapper.find('.message')).toHaveLength(1);
  });

  it('Should contain two inner divs', () => {
    expect(wrapper.find('.message').children().find('div')).toHaveLength(2);
  });

  describe('Username Div', () => {
    let userWrapper;
    beforeAll(() => {
      userWrapper = wrapper.find('.username');
    });

    it('Should be the first div', () => {
      expect(userWrapper).not.toBe(undefined);
      expect(wrapper.find('.message').childAt(0)).toEqual(userWrapper);
    });

    it('Should have a child node', () => {
      expect(userWrapper.children.length).not.toBe(0);
    });

    it('Should have a p tag that contains the user\'s username', () => {
      const usernameNode = userWrapper.children().first();
      expect(usernameNode.first().type()).toBe('p');
      expect(usernameNode.first().text()).toBe('FrontLeg');
    });
  });

  describe('Message Div', () => {
    let messageWrapper;
    beforeAll(() => {
      messageWrapper = wrapper.find('.msg');
    });

    it('Should be the second div', () => {
      expect(messageWrapper).not.toBe(undefined);
      expect(wrapper.find('.message').childAt(1)).toEqual(messageWrapper);
    });

    it('Should have a child node', () => {
      expect(messageWrapper.children.length).not.toBe(0);
    });

    it('Should have a p tag that contains the user\'s message', () => {
      const messageNode = messageWrapper.children().first();
      expect(messageNode.first().type()).toBe('p');
      expect(messageNode.first().text()).toBe('I\'m Cool');
    });
  });
});
