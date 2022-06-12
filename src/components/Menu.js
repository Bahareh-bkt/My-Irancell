import React from 'react'
import {
  MdOutlineHome,
  MdAddBox,
  MdPieChartOutline,
  MdInsertChartOutlined,
  MdDocumentScanner,
  MdOutlineCategory,
  MdOutlineDataExploration,
  MdTextSnippet,
  MdOutlineLocationOn 
} from 'react-icons/md'

import menuImage from '../assets/images/my-irancell-img.png'


function Menu () {
  return (
    <div className='menu'>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <img src={menuImage} alt="menuImage" width={150} height={35} style={{margin:"20px 5 50px 5"}}/>

      <div className="search-box">
        <input type="text" placeholder="جستجو" dir="rtl" />
      </div>
      </div>

      <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",marginRight:68}}>
      <div style={{width:"100%",marginBottom:40}}>
        <div>  
          <p className="">صفحه اصلی</p>
          <MdOutlineHome color="#f4dc50" size='1.5em' />
        </div> 
      

      <p className=''>سرویس ها</p>
      <div>
        <div className='menu-icons'>
          <p>شارژ سیمکارت</p>
          <MdAddBox  size='1.5em'/>
        <div/>
        <div className='menu-icons'>
          <p>اینترنت </p>
          <MdPieChartOutline  size='1.5em'/>
        </div>
        <div className='menu-icons'>
          <p>کارکرد و فروش</p>
          <MdInsertChartOutlined  size='1.5em'/>
        </div>
        <div className='menu-icons'>
          <p>خدمات</p>
          <MdDocumentScanner size='1.5em'/>
        </div>
      </div>
      <div>
        <div className='menu-icons'>
          <p>مدیریت خدمات</p>
          <MdOutlineCategory  size='1.5em'/>
        </div>
        <div className='menu-icons'>
          <p>مدیریت سیمکارت</p>
          <MdOutlineDataExploration  size='1.5em'/>
        </div>
      </div>
      <div>
        <div className='menu-icons'>
          <p>سوالات متداول</p>
          <MdTextSnippet  size='1.5em'/>
        </div>
        <div className='menu-icons'>
          <p>ارتباط با ما</p>
          <MdOutlineLocationOn  size='1.5em'/>
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
  )
}

export default Menu