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

      <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",marginRight:80}}>
      <div style={{width:"100%",marginBottom:40}}>
        <div className="">
           <span> صفحه اصلی </span> 
          <MdOutlineHome color="#f4dc50" size='1.5em' />
        </div> 

      <div className='' style={{display:"flex",color:"#b8b8b8",flexDirection:"column",alignItems:"flex-end"}}><p >سرویس ها</p></div>
      <div className='menu-icons'>
        <div >
          <span> شارژ سیمکارت          </span>
          <MdAddBox  size='1.5em'/>
        <div/>
        <div >
          <span>اینترنت          </span>
          <MdPieChartOutline  size='1.5em'/>
        </div>
        <div>
          <span>کارکرد و فروش          </span>
          <MdInsertChartOutlined  size='1.5em'/>
        </div>
        <div>
          <span>خدمات         </span>
          <MdDocumentScanner size='1.5em'/>
        </div>
      </div>
      
      <div className='' style={{display:"flex",color:"#b8b8b8",flexDirection:"column",alignItems:"flex-end"}}><p > مدیریت</p></div>
      <div className='menu-icons'>
        <div>
          <span>مدیریت خدمات         </span>
          <MdOutlineCategory  size='1.5em'/>
        </div>
        <div>
          <span>مدیریت سیمکارت         </span>
          <MdOutlineDataExploration  size='1.5em'/>
        </div>
      </div>
      <div className='' style={{display:"flex"}}><p > </p></div>
      <div>
        <div>
          <span>سوالات متداول         </span>
          <MdTextSnippet  size='1.5em'/>
        </div>
        <div>
          <span>ارتباط با ما         </span>
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