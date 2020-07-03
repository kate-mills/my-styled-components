import styled from 'styled-components'
import {setFlex, setBackground} from '../../helper-styles'

const Hero = styled.header`
  ${props => setBackground({ img: props.img, color: props.color})}};
  ${setFlex()};
`
export default Hero
