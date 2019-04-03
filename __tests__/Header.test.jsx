import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../client/components/Header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  let wrapper;
  const clickFn = jest.fn();
  beforeAll(() => {
    wrapper = shallow(
      <Header
        username="TurnCycle02"
        handleLogOut={clickFn}
      />,
    );
  });

  it('Should contain a div with the id header', () => {
    expect(wrapper.find('#header')).toHaveLength(1);
  });

  describe('Username', () => {
    it('Should display user\'s name', () => {
      expect(wrapper.find('.username')).toHaveLength(1);
      expect(wrapper.find('.username').text()).toBe('TurnCycle02');
    });
  });

  describe('Title', () => {
    it('Should display the app\'s title', () => {
      expect(wrapper.find('#title')).toHaveLength(1);
      expect(wrapper.find('#title').text()).toEqual('Cool Chat');
    });
  });

  describe('Logout Button', () => {
    it('Should a exist', () => {
      expect(wrapper.find('#logout')).toHaveLength(1);
      expect(wrapper.find('#logout').type()).toBe('button');
    });

    it('Should invoke fn on click', () => {
      wrapper.find('#logout').simulate('click');
      expect(clickFn.mock.calls.length).toBe(1);
    });
  });
});
