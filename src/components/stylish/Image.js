import styled  from 'styled-components'
import logo from '../../images/logo-300x220.jpg'
import {screen} from '../../media-styles'


export const LogoImage = styled.img.attrs(props => ({
  alt: props.alt || "Michele Corley Logo",
  src: props.src || logo,
  display: props.display || "block",
  width: props.width || "auto"
}))`
  margin: 0 auto;
  background-color: rgba(225,100,92,0);
  object-fit: contain;
    ${screen.phone.phone`
  width:256px;
  `}
    ${screen.tablet.tablet`
  width:256px;
  `}
`
