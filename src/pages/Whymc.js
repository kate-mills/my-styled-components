import React from 'react'

import HeadingOneOrTwo from '../components/globals/HeadingOneOrTwo'
import PageLogo  from '../components/globals/PageLogo'
import styled from 'styled-components'


const Whymc = ({className}) => {
  return (
   <div className={className}>
       <PageLogo/>
      <HeadingOneOrTwo num={2} text="Why Choose Michele Corley Clinical Skincare?"/>
    </div>
  )
}
export default styled(Whymc)`
`

