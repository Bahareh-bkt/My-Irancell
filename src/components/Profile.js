import React from 'react'
import CustomerImg from '../assets/images/customer.png'

function Profile() {
  return (
    <div className='profile'>
      <section>
        <h1>سلام، بهاره بختیاری </h1>
        <p>+98 9360011223</p>
      </section>
      <img src={CustomerImg} alt="CustomerImage" width={62} height={62} />
    </div>
  )
}

export default Profile
