import React from 'react'
import styled from 'styled-components'

import {screen} from '../../helper-styles'

const Header  = ({childrenFirst, childrenLast, children,  text, num, className}) => {
  return (
    <div className={className}>
      {childrenFirst ? <div>{children}</div>: <></>}

      { num > 1 ? 
         <h2>{text}</h2>:
         <h1>{text}</h1>
      }

      {childrenLast ? <div>{children}</div>: <></>}
    </div>
  )
}

export default styled(Header)`
  transition: ${props => props.transition || "all 1s ease-in-out"};
  background-color: ${props => props.backgroundColor || "white"};
  text-align: ${props => props.center ? "center": "unset"};
  h1 {
    font-size: "45px"};
    line-height: 54px;
    color: #222222;
    font-style: normal;
    font-weight: 300;
  }
  h2 {
    font-size: 30px;
    line-height: 42px;
    color: rgba(179,0,0,0.8);
    font-style: normal;
    font-weight: 400;
  }
   ${screen.phone.phone`
      background-color: red;
   `}
   ${screen.tablet.tablet`
      background-color: orange;
   `}
  ${screen.desktop.desktop`
    background-color: green;
  `}
`
