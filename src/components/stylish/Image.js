import styled  from 'styled-components'
import logo from '../../images/small-logo.png'


export const BasicImage = styled.img.attrs(props => ({
  alt: props.alt || "Michele Corley",
  src: props.src || logo,
  width: props.width || "auto",
  height: props.height || "auto",
  display: props.display || "block",
}))`
  background-color: rgba(225,100,92,1);
  object-fit: cover;
`
