import React from 'react'
import dnldImg from '../assets/images/download-app-img.png'
import { MdOutlineMailOutline, MdOutlineWifi } from 'react-icons/md'
import ConsumChart from './ConsumChart'

function MySimCard () {
  return (
    <div className='my-simcard'>
      MySimCard
      <div style={{display: 'flex', alignments:'center', justifyContent:'center', flexDirection:'column'}}>
      <h1>شارژ باقی مانده سیمکارت</h1>
      <div style={{position: 'relative', width:200, height:200}}>
        <ConsumChart/>
        <p
            style={{
                position: 'absolute',
                bottom: 70,
                left: 58,
                direction: 'rtl',
                color: '#00A3FF',
            }}
            >
              6000تومان
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
              <p className='sub-text'>تا تاریخ31 خرداد1400</p>
            </div>
          </section>
          <section>
            <div className="icon-box">
              <MdOutlineWifi color="rgba(253, 200, 22, 1)" size={20} />
            </div>
            <div>
              <p className='sub-text'>بسته اینترنت ماهانه</p>
              <p className='sub-text'>تا تاریخ 12خرداد 1400</p>
            </div>
          </section>
        </div>
  
      <img src={dnldImg} alt="downloadImg" width={250} height={100} style={{margin:"20px 5 50px 5"}}/>
    </div>
  )
}

export default MySimCard

