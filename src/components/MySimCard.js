import React from 'react'
import dnldImg from '../assets/images/download-app-img.png'

const MySimCard = () => {
  return (
    <div className='my-simcard'>
      MySimCard
      <img src={dnldImg} alt="downloadImg" width={250} height={100} style={{margin:"20px 5 50px 5"}}/>
    </div>
  )
}

export default MySimCard