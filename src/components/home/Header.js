import React from 'react'
import Hero from '../globals/Hero'
//img='https://i.imgur.com/X2oj0mu.jpg'

const HeroBackground = (props) => {
  return (
    <Hero
      color={props.color}
      img={`${props.img || false}`}>
      <h1>{props.header}</h1>
    </Hero>
    )
}

export default HeroBackground
