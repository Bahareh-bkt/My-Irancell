import React from 'react'
import dnldImg from '../assets/images/download-app-img.png'
import { MdOutlineMailOutline, MdOutlineWifi } from 'react-icons/md'
import ConsumChart from './ConsumChart'

function MySimCard () {
  return (
    <div className='my-simcard'>
      <div style={{display: 'flex', alignments:'center', justifyContent:'center', flexDirection:'column'}}>
      <h3>شارژ باقی مانده سیمکارت</h3>
      <div style={{position: 'relative', width:100, height:60}}>
        
        <p
            style={{
                position: 'absolute',
                bottom: 10,
                left: 75,
                direction: 'rtl',
                color: '#00A3FF',
            }}
            >
              43,000تومان
            </p>
      </div>
      <span
            style={{
              fontWeight: 400,
              fontSize: 15,
              direction: 'rtl',
              background: '#FDC816',
              color: 'white',
              width: 200,
              height: 30,
              textAlign: 'center',
              borderRadius: 5,
            }}
          >
            سیمکارتت رو شارژ کن!
          </span>
      </div>
      <div style={{ margin: '35px' }}>
          <p
            style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'black',
              textAlign: 'right',
            }}
          >
            خدمات فعال
          </p>
          <section>
            <div className="icon-box">
              <MdOutlineMailOutline color="rgba(253, 200, 22, 1)" size={20} />
            </div>
            <div>
              <p className='sub-text'>بسته پیامک هفتگی</p>
              <p className='sub-text'>تا تاریخ 25 تیر 1401</p>
            </div>
          </section>
          <section>
            <div className="icon-box">
              <MdOutlineWifi color="rgba(253, 200, 22, 1)" size={20} />
            </div>
            <div>
              <p className='sub-text'>بسته اینترنت ماهانه</p>
              <p className='sub-text'>تا تاریخ 17 مرداد 1401</p>
            </div>
          </section>
        </div>
  
      <img src={dnldImg} alt="downloadImg" width={150} height={70} style={{margin:"05"}}/>
    </div>
  )
}

export default MySimCard

