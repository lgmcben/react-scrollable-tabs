import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import styles from './styles.css'

const ScrollableTabs = (props) => {
    const {
      tabs
    } = props
    
    return (
      <StyledContainer>
        {renderTabs(tabs)}
      </StyledContainer>
    );
}

export const Tab = (props) => {
  return (
    <StyledTab {...props}>
      {props.name}
    </StyledTab>
  );
}

ScrollableTabs.propTypes = {
  tabs: PropTypes.array
}

const renderTabs = (tabs) => {
    const tabsJsx = tabs.map((item, index) => {
    const tabProps = {
      name: item.name
    }
    return (
        <Tab key={index} {...tabProps} />
    );
  })
  return tabsJsx;
}

/*
reference:
https://iamsteve.me/blog/entry/using-flexbox-for-horizontal-scrolling-navigation

[1]: Make a flex container so all our items align as necessary
[2]: Prevent items from wrapping
[3]: Automatic overflow means a scroll bar won’t be present if it isn’t needed
[4]: Make it smooth scrolling on iOS devices
[5]: Hide the ugly scrollbars in Edge until the scrollable area is hovered
[6]: Hide the scroll bar in WebKit browsers
*/
const StyledContainer = styled.div`
  display: flex; // 1
  flex-wrap: nowrap; // 2
  overflow-x: auto; // 3
  -webkit-overflow-scrolling: touch; // 4
  -ms-overflow-style: -ms-autohiding-scrollbar; // 5

  &::-webkit-scrollbar {
    display: none; // 6
  }
`

const StyledTab = styled.div`
  flex: 0 0 auto;
  padding-left: ${props => props.paddingLeft || '1vw'};
  padding-right: ${props => props.paddingRight || '1vw'};
`

export default ScrollableTabs;
