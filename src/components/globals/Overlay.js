import React from 'react'
import styled from 'styled-components'
import {setColor} from '../../helper-styles'


const  Overlay = ({className}) => {
  return  (<div className={className} id="overlay"/>
  )
}


const OverlayWrapper = styled(Overlay)`
  position: absolute; /* Sit on top of the page content */
  display: block; /* to hide use none  */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* Specify a stack order in case you're using a different order for other elements */
  background-color: ${setColor.mainWhite};
`
export default OverlayWrapper;
