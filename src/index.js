import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const ScrollableTabs = (props) => {
    const {
      tabs
    } = props
    
    return (
      <div className={styles.container}>
        {renderTabs(tabs)}
      </div>
    );
}

const Tab = (props) => {
  return (
    <div className={styles.tab}>
      {props.name}
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
        <Tab name={item.name} />
      </div>
    );
  })
  return tabsJsx;
}

export default ScrollableTabs;
