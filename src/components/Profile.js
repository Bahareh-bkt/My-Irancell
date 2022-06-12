import React from 'react'
import CustomerImg from '../assets/images/customer.png'

function Profile() {
  return (
    <div className='profile'>
      <section>
        <h3>سلام، بهاره بختیاری </h3>
        <p>+98 9360011223</p>
      </section>
      <img src={CustomerImg} alt="CustomerImage" width={60} height={60} />
    </div>
  )
}

export default Profile
