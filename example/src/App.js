import React, { Component } from 'react'

import ScrollableTabs from 'react-scrollable-tabs'

export default class App extends Component {
  render () {
    return (
      <div>
        <ScrollableTabs numTabs={5} />
      </div>
    )
  }
}
