import React, { Component } from 'react'

import ExampleComponent from 'react-scrollable-tabs'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent numTabs={5} />
      </div>
    )
  }
}
