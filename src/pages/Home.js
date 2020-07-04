import React from 'react'


import {BasicImage} from '../components/stylish/Image'
import {Header} from '../components/stylish/Header'

const Logo = {
  sm: "https://i.imgur.com/T2p4zYOt.jpg",
  med:"https://i.imgur.com/T2p4zYOm.jpg",
  lg:"https://i.imgur.com/T2p4zYOl.jpg", 
}

const Home = () => {
  return (
    <>
     <Header
       center
       num={1}
       text="Beautifully Healthy Skin Starts Here"
       childs="above"
       childrenFirst
     >
       <BasicImage 
         src={Logo.md}
         alt="michele Corley Basic Logo"
         width="auto"
         height="auto"
       />
      </Header>
   </>
  )
}

export default Home
