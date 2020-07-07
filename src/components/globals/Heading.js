import React from 'react'
import {screen} from '../../media-styles'
import styled from 'styled-components'

const Header  = ({children,  text, num, className}) => {
  return (
    <div className={className}>
      { num > 1 ? 
         <h2>{text}</h2>:
         <h1>{text}</h1>
      }
    </div>
  )
}
export default styled(Header)`
  & {
    margin: 0 auto;
    background-color: ${props => props.backgroundColor || "white"};
    text-align: ${props => props.center ? "center": "unset"};
    ${screen.font.setFont(30, 45)};
  }
   ${screen.phone.phone`
      width: 100vw;
   `}
   ${screen.tablet.tablet`
      &{width: 100vw;}
      background: orange;
   `}
  ${screen.desktop.desktop`
      &{width: 80vw;}
      background: green;
  `}
`

