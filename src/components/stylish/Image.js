import styled  from 'styled-components'
import logo from '../../images/small-logo.png'


export const BasicImage = styled.img.attrs(props => ({
  alt: props.alt || "oops",
  src: props.src || logo,
  width: props.width || "auto",
  height: props.height || "222px",

}))`
  background-color: rgba(225,100,92,1);
`
