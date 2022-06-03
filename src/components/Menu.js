import {MdAddBox} from 'react-icons/md'
import {MdPieChartOutline} from 'react-icons/md'
import {MdInsertChartOutlined} from 'react-icons/md'
import {MdDocumentScanner} from 'react-icons/md'
import {MdOutlineCategory} from 'react-icons/md'
import {MdOutlineDataExploration} from 'react-icons/md'
import {MdTextSnippet} from 'react-icons/md'
import {MdOutlineLocationOn} from 'react-icons/md'


const Menu = () => {
  return (
    <div className='menu'>
      <div className='logo'>
        <span className='logo-font'>ایرانسل من</span>
      </div>
      <div className='menu-icons'>
        <span>شارژ سیمکارت</span>
        <MdAddBox  size='1.5em'/>
        <span>اینترنت </span>
        <MdPieChartOutline  size='1.5em'/>
        <span>کارکرد و فروش</span>
        <MdInsertChartOutlined  size='1.5em'/>
        <span>خدمات</span>
        <MdDocumentScanner size='1.5em'/>
        <span>مدیریت خدمات</span>
        <MdOutlineCategory  size='1.5em'/>
        <span>مدیریت سیمکارت</span>
        <MdOutlineDataExploration  size='1.5em'/>
        <span>سوالات متداول</span>
        <MdTextSnippet  size='1.5em'/>
        <span>ارتباط با ما</span>
        <MdOutlineLocationOn  size='1.5em'/>
      </div>
    </div>
  )
}

export default Menu