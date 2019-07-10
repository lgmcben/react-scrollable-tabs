import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const renderTabs = () => {
  const tabs = this.props.tabs.map((item, index) => {
    return (
      <div className='tab' key={index}>
        tab {item.name}
      </div>
    );
  })
  return tabs;
}

export default ScrollableTabs = () => {
  // static propTypes = {
  //   tabs: PropTypes.array
  // }

    const {
      tabs
    } = this.props
    
    return (
      <div className={styles.test}>
        {this.renderTabs()}
      </div>
    );
}
