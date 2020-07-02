import styled from 'styled-components'
import {setFlex, setBackground} from '../../helper-styles'


const Hero = styled.header`
  min-height: ${props => props.minHeight || '100vh'};

  ${props => setBackground({img:props.img, color: "rgba(0, 0, 0, 0.5)"})};
  ${setFlex()};
`

export default Hero
