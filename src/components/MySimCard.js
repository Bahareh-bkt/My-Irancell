import React from 'react'
import dnldImg from '../assets/images/download-app-img.png'
import { MdOutlineMailOutline, MdOutlineWifi } from 'react-icons/md'
import PieChart from './PieChart'

function MySimCard () {
  return (
    <div className='my-simcard'>
      <div>
        <div style={{display: 'flex', alignments:'center', justifyContent:'center', flexDirection:'column'}}>
          <h3 style={{
              fontSize: '20px',
              fontWeight: '400',
              color: 'black',
              textAlign: 'center',
              
            }}>شارژ باقی مانده سیمکارت</h3>
          <div style={{position: 'relative', width:200, height:200}}>
            <PieChart/>
            <p
                style={{
                    position: 'absolute',
                    bottom: 70,
                    left: 75,
                    direction: 'rtl',
                    color: '#00A3FF',
                }}
                >
                   43,000 تومان 
                </p>
          </div>
          <span
            style={{
              fontWeight: 600,
              fontSize: 18,
              direction: 'rtl',
              background: '#FDC816',
              color: 'white',
              width: 200,
              height: 30,
              textAlign: 'center',
              borderRadius: 5,
              marginLeft:'20px',
            }}
          >
            سیمکارتت رو شارژ کن!
          </span>
        </div>
        <br/>
        <div style={{ margin: '35px' }}>
          <p
            style={{
              fontSize: '20px',
              fontWeight: '400',
              color: 'black',
              textAlign: 'right',
            }}
          >
            خدمات فعال
          </p>       <br/>
          <section>
            
            <div>
            <div dir='rtl'>
              <span className='sub-text'>بسته پیامک هفتگی</span></div>
              <div className="icon-box" >
              <MdOutlineMailOutline color="rgba(253, 200, 22, 1)" size={20}  />
            </div>
            <div dir='rtl'>
              <span className='sub-text'>تا تاریخ 25 تیر 1401    </span>
            </div></div>
          </section>
          <br/>
          <br/>
          <section>
           <div> 
            <div dir='rtl'>
              <span className='sub-text'>بسته اینترنت ماهانه</span>
              </div>
              <div className="icon-box">
              <MdOutlineWifi color="rgba(253, 200, 22, 1)" size={20} />
            </div>
            <div dir='rtl'>
              <span className='sub-text'>تا تاریخ17مرداد1401</span>
            </div></div>
          </section>
        </div>
        </div>
  
      <img className='img-a' src={dnldImg} alt="downloadImg" width={150} height={70}/>
    </div>
  )
}

export default MySimCard

