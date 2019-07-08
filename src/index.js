import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ScrollableTabs extends Component {
  static propTypes = {
    tabs: PropTypes.array
  }

  renderTabs = () => {
    const tabs = this.props.tabs.map((item, index) => {
      return (
        <div className='tab' key={index}>
          tab {item.name}
        </div>
      );
    })

    return tabs;
  }
  render() {
    const {
      tabs
    } = this.props

    return (
      <div className={styles.test}>
        {this.renderTabs()}
      </div>
    )
  }
}
