import React from 'react'
import styled from 'styled-components'
import {setColor} from '../../helper-styles'
import {screen} from '../../media-styles'



const  OverlayWhite = ({className, id, zIndex}) => {
  return  (<div className={className} id={id || "overlay"}/>
  )
}


const OverlayWhiteWrapper = styled(OverlayWhite)`
  position: absolute; /* Sit on top of the page content */
  display: block; /* to hide use none  */
  margin: 0 auto;
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => props.id ? props.id : -1000}; /* Specify a stack order in case you're using a different order for other elements */
  background-color: ${setColor.mainWhite};
  width: 80vw; /* Full width (cover the whole page) */
  ${screen.phone.phone`width:100vw;`};
  ${screen.tablet.tablet`width:100vw;`};
  ${screen.desktop.desktop`width:80vw;`}
`
export default OverlayWhiteWrapper;
