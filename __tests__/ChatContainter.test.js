import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { wrap } from 'module';
import MessageBox from '../client/components/MessageBox';
import ChatContainer from '../client/components/ChatContainer';

configure({ adapter: new Adapter() });

describe('Chat Container:', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ChatContainer />);
  });

  it('Should render chatContainer div', () => {
    expect(wrapper.find('#chatContainer')).toHaveLength(1);
  });

  it('Should render allMsgs div', () => {
    expect(wrapper.find('#allMsgs')).toHaveLength(1);
  });

  it('Should render MessageBox div', () => {
    const chatDiv = wrapper.find('#chatContainer');
    expect(chatDiv.find(MessageBox)).toHaveLength(1);
  });
}); // end of test
