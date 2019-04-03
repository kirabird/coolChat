import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserMsg from '../client/components/UserMsg';

configure({ adapter: new Adapter() });

describe('User Message Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(
      <UserMsg
        username="TurnCycle02"
        message="I'm cooler"
      />,
    );
  });

  it('Should contain a div with the class userMessage', () => {
    expect(wrapper.find('.userMessage')).toHaveLength(1);
  });

  it('Should contain two inner divs', () => {
    expect(wrapper
      .find('.userMessage')
      .children()
      .find('div')).toHaveLength(2);
  });

  describe('Username Div', () => {
    let userWrapper;
    beforeAll(() => {
      userWrapper = wrapper.find('.username');
    });

    it('Should be the second div', () => {
      expect(userWrapper).not.toBe(undefined);
      console.log(userWrapper);
      expect(wrapper.find('.userMessage').childAt(1)).toEqual(userWrapper);
    });

    it('Should have a child node', () => {
      expect(userWrapper.children.length).not.toBe(0);
    });

    it('Should have a p tag that contains the user\'s username', () => {
      const usernameNode = userWrapper.childAt(0);
      expect(usernameNode.first().type()).toBe('p');
      expect(usernameNode.first().text()).toBe('TurnCycle02');
    });

    describe('Message Div', () => {
      let messageWrapper;
      beforeAll(() => {
        messageWrapper = wrapper.find('.msg');
      });

      it('Should be the first div', () => {
        expect(messageWrapper).not.toBe(undefined);
        expect(wrapper.find('.userMessage').childAt(0)).toEqual(messageWrapper);
      });

      it('Should have a child node', () => {
        expect(messageWrapper.children.length).not.toBe(0);
      });

      it('Should have a p tag that contains the user\'s message', () => {
        const messageNode = messageWrapper.childAt(0);
        expect(messageNode.first().type()).toBe('p');
        expect(messageNode.first().text()).toBe('I\'m cooler');
      });
    });
  });
});
