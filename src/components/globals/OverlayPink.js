import React from 'react'
import styled from 'styled-components'
import {setColor} from '../../helper-styles'


const  OverlayPink = ({className}) => {
  return  (<div className={className} id="overlay-zero"/>
  )
}

/* Cover the bottom of the stack with a pink background */
const OverlayPinkWrapper = styled(OverlayPink)`
  position: absolute; /* Sit on top of the page content */
  display: block; /* to hide use none  */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index:-11; /* Very Bottom of stack */
  background-color: ${(props) => props.backgroundColor? props.backgroundColor: setColor.mccPink};
`
export default OverlayPinkWrapper;
