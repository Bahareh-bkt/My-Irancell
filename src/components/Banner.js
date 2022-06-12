import React from 'react'
import bannerImg from "../assets/images/banner-img.png"


function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="BannerImg" style={{width: "100%"}}/>
    </div>
  )
}

export default Banner