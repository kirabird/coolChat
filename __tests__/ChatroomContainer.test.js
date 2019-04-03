import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ChatroomContainer from '../client/components/ChatroomContainer';
import Sidebar from '../client/components/Sidebar';
import ChatContainer from '../client/components/ChatContainer';

configure({ adapter: new Adapter() });

describe('Chatroom Container Component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ChatroomContainer />);
  });

  it('Should render a chatroom div', () => {
    expect(wrapper.find('.chatroom')).toHaveLength(1);
  });

  it('Should render a Sidebar component', () => {
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });

  it('Should render a Chat Container component', () => {
    expect(wrapper.find(ChatContainer)).toHaveLength(1);
  });
});
