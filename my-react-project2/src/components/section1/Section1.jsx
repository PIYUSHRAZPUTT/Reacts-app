import React from 'react'
import Navbar from './Navbar'
import Page1Content from './Page1Content'

const Section1 = (props) => {
  return (
    <div>
      <Navbar/>
      <Page1Content cards={props.cards} />
    </div>
  )
}

export default Section1
