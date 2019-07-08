import React from 'react';
import { shallow } from 'enzyme';
import ScrollableTabs from './'


describe('ScrollableTabs', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<ScrollableTabs />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render 3 <p />', () => {
    expect(wrapper.find('p').length).toEqual(3);
  });

})
