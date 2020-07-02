import React from 'react'
import Hero from '../globals/Hero'
//img='https://i.imgur.com/X2oj0mu.jpg'

const HeroBackground = (props) => {
  return (
    <Hero
      border={`${props.border|| '10%'}`}
      color={`${props.color || 'rgba(225,225,225,0.95)'}`}
      img={`${props.img|| false}`}
      minHeight={`${props.minHeight || false}`}
    >
      <h1>{props.header}</h1>
    </Hero>
    )
}

export default HeroBackground
