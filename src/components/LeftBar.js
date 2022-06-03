import React from 'react'
import MySimCard from './MySimCard'
import Profile from './Profile'


const LeftBar = () => {
  return (
    <div className='leftbar'>
      <Profile/>
      <MySimCard/>
    </div>
  )
}

export default LeftBar