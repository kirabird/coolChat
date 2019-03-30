import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../client/components/Sidebar';
// import ActiveUser from '../client/components/ActiveUser';

configure({ adapter: new Adapter() });

describe('Sidebar component', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Sidebar activeUsers=" " />);
  });

  it('Should render a sidebar div', () => {
    expect(wrapper.find('.sidebar')).toHaveLength(1);
  });

  describe('sidebar div', () => {
    let sidebarDiv;
    beforeAll(() => {
      sidebarDiv = wrapper.find('.sidebar').at(0);
    });

    it('should render a h3 tag with the text active users', () => {
      expect(sidebarDiv.find('h3')).toHaveLength(1);
      const activeUsersText = sidebarDiv.find('h3').at(0);
      expect(activeUsersText.text()).toEqual('Active Users');
    });

    // it.skip('should render an ActiveUser component for each active user', () => {
    //   expect(sidebarDiv.find(ActiveUser)).toEqual();
    // });
  });
});
