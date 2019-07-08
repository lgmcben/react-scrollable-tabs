import React, { Component } from 'react'

import ScrollableTabs from 'react-scrollable-tabs'

export default class App extends Component {

  
  
  render () {
    const tabs = [
      { name: 'tab 1'},
      { name: 'tab 2'},
      { name: 'tab 3'}
    ];
    
    return (
      <div>
        <ScrollableTabs tabs={tabs} />
      </div>
    )
  }
}
