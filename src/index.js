import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ScrollableTabs extends Component {
  static propTypes = {
    text: PropTypes.string,
    numTabs: PropTypes.number
  }

  render() {
    const {
      numTabs
    } = this.props

    return (
      <div className={styles.test}>
        This is a scrollable tab <br/>
        number of tabs: {numTabs}
        <p>test p 1</p>
        <p>test p 2</p>
        <p>test p 3</p>
      </div>
    )
  }
}
