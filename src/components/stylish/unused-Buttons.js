import React from 'react'
import styled from 'styled-components'
import {transition} from '../../helper-styles'

const StyledButton = ({text, className}) => {
  return(
    <button className={className}>
      {text}
    </button>
  )
}

export default styled(StyledButton)`
  ${props => props.still ? "transition:none": ${transition}};
  background: ${props => props.background ||  "white"};
  border: ${props => props.border || "none"};
  color: ${props => props.color || "black"};
  padding: ${props => props.padding || ".5rem"}; 
  text-transform: ${props => props.uppercase || "none" };
  font-size: 15px; 
  border: 1px solid rgba(0,0,0, 0);
  &:hover {
    background: rgba(0,0,0,0);
    cursor: pointer;
    border: 1px solid ${props => props.background};
  }
`
