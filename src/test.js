import React from 'react';
import { shallow } from 'enzyme';
import ScrollableTabs from './'


describe('ScrollableTabs', () => {
  it('is truthy', () => {
    expect(ScrollableTabs).toBeTruthy()
  })

  it('should render a <div />', () => {
    const wrapper = shallow(<ScrollableTabs />);
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render 3 <p />', () => {
    const wrapper = shallow(<ScrollableTabs />);
    expect(wrapper.find('p').length).toEqual(3);
  });

})
