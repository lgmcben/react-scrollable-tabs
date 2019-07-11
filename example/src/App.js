import React, { Component } from 'react'

import ScrollableTabs from 'react-scrollable-tabs'

export default class App extends Component {

  
  
  render () {
    const tabs = [
      { name: 'tab 1'},
      { name: 'tab 2'},
      { name: 'tab 3'},
      { name: 'tab 4'},
      { name: 'tab 5'},
      { name: 'tab 6'},
      { name: 'tab 7'},
      { name: 'tab 8'},
      { name: 'tab 9'},
      { name: 'tab 10'},
      { name: 'tab 11'},
      { name: 'tab 12'},
      { name: 'tab 13'},
      { name: 'tab 14'},
      { name: 'tab 15'},
      { name: 'tab 16'}
    ];
    
    return (
      <div>
        <ScrollableTabs tabs={tabs} />
      </div>
    )
  }
}
