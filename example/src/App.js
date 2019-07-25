import React, { Component } from 'react'

import ScrollableTabs, { Tab } from 'react-scrollable-tabs'

export default class App extends Component {
  render () {
    return (
      <div>
        <ScrollableTabs clickHandler={()=> console.log('on click')}> 
          <Tab name='tab 1' paddingLeft='10vw' />
          <Tab name='tab 2' />
          <Tab name='tab 3' />
          <Tab name='tab 4' />
          <Tab name='tab 5' />
          <Tab name='tab 6' />
          <Tab name='tab 7' />
          <Tab name='tab 8' />
          <Tab name='tab 9' />
          <Tab name='tab 10' />
          <Tab name='tab 11' />
          <Tab name='tab 12' />
          <Tab name='tab 13' />
          <Tab name='tab 14' />
          <Tab name='tab 15' />
          <Tab name='tab 16' />
        </ScrollableTabs>

        <br/>
        <div>
          content 1
        </div>
        <div>
          content 2
        </div>
      </div>
    )
  }
}
