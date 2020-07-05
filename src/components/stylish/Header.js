import React from 'react'
import styled from 'styled-components'

import {transition} from '../../helper-styles'
import {screen} from '../../media-styles'

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
  ${transition};

  background-color: ${props => props.backgroundColor || "white"};
  text-align: ${props => props.center ? "center": "unset"};
  ${screen.font.setFont(30, 45)} };
  &:h1 {
    font-size: 45px;
    font-style: normal;
    font-weight: 300;
    margin: 0 auto;
  }
  &:h2 {
    font-size: 30px;
    line-height: 42px;
    color: rgba(179,0,0,0.8);
    font-style: normal;
    font-weight: 400;
    margin: 0 auto;
  }
  background-color: white;
  margin: 0 auto;
   ${screen.phone.phone`
      width: 100vw;
      h1,h2{width: 90vw; margin: 0 auto;}
   `}
   ${screen.tablet.tablet`
      width:100vw;
      h1,h2{width: 90vw; margin:0 auto;}
   `}
  ${screen.desktop.desktop`
    width:80vw;
  `}
`
