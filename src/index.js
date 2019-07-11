import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
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

// const Tab = (props) => {
//   return (
//     <StyledTab paddingLeft={props.paddingLeft}>
//       {props.name}
//     </StyledTab>
//   );
// }

ScrollableTabs.propTypes = {
  tabs: PropTypes.array
}

const renderTabs = (tabs) => {
  const tabsJsx = tabs.map((item, index) => {
    return (
        <StyledTab key={index}>
             {item.name}
        </StyledTab>
    );
  })
  return tabsJsx;
}

const StyledTab = styled.div`
  flex: 0 0 auto;
  padding-left: ${props => props.paddingLeft || '1vw'};
  padding-right: 1vw;
`

export default ScrollableTabs;
