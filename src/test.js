import React from 'react';
import { shallow } from 'enzyme';
import ScrollableTabs from './'


describe('ScrollableTabs', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<ScrollableTabs />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render x number of tabs according to tabs prop', () => {
    const tabs = [
      { name: 'tab 1'},
      { name: 'tab 2'},
      { name: 'tab 3'}
    ];

    wrapper.setProps({
      tabs
    });
    expect(wrapper.find('.tab').length).toEqual(tabs.length);
  });

})
