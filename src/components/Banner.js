import React from 'react'
import bannerImg from "../assets/images/banner-img.png"


function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="BannerImg"/>
      <div className='text-b' style={{
              fontSize: '20px',
              fontWeight: '700',
              color: 'black',
              textAlign: 'left',
              direction: 'rtl'
              
            }}><p>اینهمه بسته بی سابقه ست!</p>
      </div>
          <span style={{
              fontWeight: 400,
              fontSize: '14px',
              direction: 'rtl',
              background: '#FDC816',
              color: 'white',
              width: 80,
              height: 60,
              textAlign: 'center',
              borderRadius: 5,
              marginLeft:'70px',
            }}>اینجا چه خبره !</span>
    </div>
  )
}

export default Banner