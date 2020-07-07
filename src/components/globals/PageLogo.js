import React from 'react'
import {screen} from '../../media-styles'
import {setFlex} from '../../helper-styles'
import styled from 'styled-components'
import {Img} from '../../constants/imageurls'

const PageLogo  = ({className}) => {
  return (
    <div className={className}>
       <img 
         src={Img.logo.md}
         alt={Img.logo.alt}
         crossOrigin=""
         width="auto"
       />
    </div>
  )
}
export default styled(PageLogo)`
  & {
    ${setFlex({x:"center", y:"center"})}
    object-fit: contain;
  }
  ${screen.phone.phone`img{width: 256px;};`}
  ${screen.tablet.tablet`img{width: 256px;}`}
  ${screen.desktop.desktop`img{width: 320px;}`}
`
