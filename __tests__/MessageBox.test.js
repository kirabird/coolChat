import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessageBox from '../client/components/MessageBox';

configure({ adapter: new Adapter() });

describe('MessageBox Component: ',
  () => {
    let wrapper;
    const clickFn = jest.fn();
    beforeAll(() => {
      wrapper = shallow(<MessageBox
        handleSend={clickFn}
    />);
    });

    it('Should render messageBox div', () => {
      expect(wrapper.find('.messageBox'))
        .toHaveLength(1);
    });

    it('Should render one button', () => {
      const msgBoxDiv = wrapper.find('.messageBox');
      expect(msgBoxDiv.find('button'))
        .toHaveLength(1);
    });

    describe('Send Button:', () => {
      it('Should be a button', () => {
        const sendBtn = wrapper.find('#sendBtn');
        expect(sendBtn.type()).toEqual('button');
      });

      it('Send button should trigger fn call on click', () => {
        const sendBtn = wrapper.find('#sendBtn');
        sendBtn.simulate('click');
        expect(clickFn.mock.calls.length).toBe(1);
      });
    });

    describe('Input', () => {
      it('Should have a text input', () => {
        const textInput = wrapper.find('#textInput');
        expect(textInput).toHaveLength(1);
      });
    });
  });// end of test
