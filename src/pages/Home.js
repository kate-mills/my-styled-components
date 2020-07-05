import React from 'react'

import Header from '../components/stylish/Header'
import {BasicImage} from '../components/stylish/Image'
import SlideShowEvent from '../components/globals/SlideShowEvent'
import styled from 'styled-components'

const Logo = {
  sm: "https://i.imgur.com/T2p4zYOt.jpg",
  med:"https://i.imgur.com/T2p4zYOm.jpg",
  lg:"https://i.imgur.com/T2p4zYOl.jpg", 
}

const Home = ({className}) => {
  return (
   <div className={className}>
     <Header
       center
       num={1}
       text="Beautifully Healthy Skin Starts Here"
       childs="above"
       childrenFirst
     >
       <BasicImage 
         src={Logo.md}
         alt={Logo.alt}
         width="auto"
         height="auto"
         overflow="auto"
       />
      </Header>
      <SlideShowEvent/>
    </div>
  )
}
export default styled(Home)`
`
