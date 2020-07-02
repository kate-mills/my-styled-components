import React from 'react'
import HeroHeader from '../components/home/Header'


const Home = () => {
  return (
    <>
      <HeroHeader
        border='10%'
        color='rgba(225,225,225,0.95)'
        img={false}
        minHeight='100vh'
        header='Home'
      />
    </>
  )
}

export default Home
