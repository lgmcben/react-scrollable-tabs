import React from 'react';
import { shallow } from 'enzyme';
import ScrollableTabs, { Tab } from './'


describe('ScrollableTabs', () => {

  const props = {
    tabs: []
  }

  let wrapper;

  beforeEach(() => wrapper = shallow(<ScrollableTabs {...props} />));

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
