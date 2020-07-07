import React from 'react'

import Header from '../components/stylish/Header'
import {LogoImage} from '../components/stylish/Image'
import SlideShowEvent from '../components/globals/SlideShowEvent'
import styled from 'styled-components'
import {Img} from '../constants/imageurls.js'


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
     <div className="img-box">
       <LogoImage 
         src={Img.logo.md}
         alt={Img.logo.alt}
         crossOrigin=""
       />
     </div>
      </Header>
      <SlideShowEvent/>
    </div>
  )
}
export default styled(Home)`
.img-box {margin-bottom: 20px;}
`
