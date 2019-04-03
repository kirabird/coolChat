import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ActiveUser from '../client/components/ActiveUser';

configure({ adapter: new Adapter() });

describe('ActiveUser component:', () => {
  let wrapper;
  const username = 'CoolGuy123';
  beforeAll(() => {
    wrapper = shallow(<ActiveUser username={username} />);
  });

  it('Should render a activeUser Div', () => {
    expect(wrapper.find('.activeUser')).toHaveLength(1);
    expect(wrapper.find('.activeUser').type()).toEqual('div');
  });

  let userDiv;
  beforeAll(() => {
    userDiv = wrapper.find('.activeUser').at(0);
  });

  it('Should render a <p> tag with the correct username', () => {
    expect(userDiv.find('p')).toHaveLength(1);
    expect(userDiv.find('p').text()).toEqual(username);
  });

  it('Should render a greenCircle div', () => {
    expect(userDiv.find('.greenCircle')).toHaveLength(1);
  });
});
