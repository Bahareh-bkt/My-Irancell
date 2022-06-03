import { useState } from 'react'
import { icons } from 'react-icons'
import {MdAddBox} from 'react-icons/md'


const Menu = () => {
  return (
    <div className='menu-items'>
        <span>شارژ سیمکارت</span>
        <MdAddBox className='menu-icons' size={'1.5em'}/>
        <span>اینترنت </span>
        <MdAddBox className='menu-icons' size={'1.5em'}/>
        <span>کارکرد و فروش</span>
        <MdAddBox className='menu-icons' size={'1.5em'}/>
        <span>خدمات</span>
        <MdAddBox className='menu-icons' size={'1.5em'}/>
        <span>مدیریت سیمکارت</span>
        <MdAddBox className='menu-icons' size={'1.5em'}/>
        <span>سوالات متداول</span>
        <MdAddBox className='menu-icons' size={'1.5em'}/>
        <span>ارتباط با ما</span>
        <MdAddBox className='menu-icons' size={'1.5em'}/>
    </div>
  )
}

export default Menu