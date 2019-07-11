import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const ScrollableTabs = (props) => {
    const {
      tabs
    } = props
    
    return (
      <div className={styles.test}>
        {renderTabs(tabs)}
      </div>
    );
}

ScrollableTabs.propTypes = {
  tabs: PropTypes.array
}

const renderTabs = (tabs) => {
  const tabsJsx = tabs.map((item, index) => {
    return (
      <div className='tab' key={index}>
        tab {item.name}
      </div>
    );
  })
  return tabsJsx;
}

export default ScrollableTabs;
