import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex py-1 px-20 h-[90vh]'>
      <LeftContent/>
      <RightContent cards={props.cards}/>
    </div>
  )
}

export default Page1Content
