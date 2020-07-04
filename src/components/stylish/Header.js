import React from 'react'
import styled from 'styled-components'
//img='https://i.imgur.com/X2oj0mu.jpg'

const StyledHeader  = ({childrenFirst, childrenLast, children,  text, num, className}) => {
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

export const Header = styled(StyledHeader)`
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
  &:hover {
  }
`
