import styled, {css, keyframes} from 'styled-components'

const rotate = keyframes`
0%{
  transform: rotate(0deg)
}
50%{
  transform: rotate(360deg)
}
100%{
  transform: rotate(-360deg)
}
`

const BoxStyles = css`
  animation: ${rotate} 3s ease-in-out infinite;
  margin: 3rem;
  width: 150px;
  height: 150px;
  border: ${props => props.border || "1px solid rgba(225, 225, 225, .5)"};
`

export const Box = styled.div`
    ${BoxStyles};
`
