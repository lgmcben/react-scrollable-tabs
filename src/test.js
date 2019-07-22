import React from 'react';
import { shallow } from 'enzyme';
import ScrollableTabs, { Tab } from './'


describe('ScrollableTabs', () => {

  let wrapper;

  beforeEach(
    () => wrapper = shallow(<ScrollableTabs />)
  );

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('execute the passed click handler', () => {
    const mockCallBack = jest.fn();
    wrapper.setProps({ clickHandler: mockCallBack });
    wrapper.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });

})
