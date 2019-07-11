import React from 'react';
import { shallow } from 'enzyme';
import ScrollableTabs, { Tab } from './'


describe('ScrollableTabs', () => {

  const props = {
    tabs: []
  }

  let wrapper;

  beforeEach(() => wrapper = shallow(<ScrollableTabs {...props} />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render x number of tabs according to tabs prop', () => {
    const tabs = [
      { name: 'tab 0'},
      { name: 'tab 1'},
      { name: 'tab 2'},
      { name: 'tab 3'},
      { name: 'tab 4'},
      { name: 'tab 5'}
    ];

    wrapper.setProps({
      tabs
    });

    // console.log('wrapper.debug()', wrapper.debug());

    expect(wrapper.find(Tab).length).toEqual(tabs.length);
  });

})
