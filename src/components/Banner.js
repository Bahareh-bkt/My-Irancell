import React from 'react'
import bannerImg from "../assets/images/banner-img.png"


function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="BannerImg" style={{width: "100%"}}/>
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
              fontSize: 14,
              direction: 'rtl',
              background: '#FDC816',
              color: 'white',
              width: 100,
              height: 60,
              textAlign: 'center',
              borderRadius: 5,
              marginLeft:'60px',
            }}>اینجا چه خبره !</span>
    </div>
  )
}

export default Banner