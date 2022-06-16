import React from 'react'
import Banner from './Banner'
import ConsumChart from './ConsumChart'
import RecmPackage from './RecmPackage'


const MiddleBar = () => {
  return (
    <div className='middlebar'>
      <Banner/>
      <p className='text-nemodar'> نمودار میزان مصرف کل</p>
      <ConsumChart/>
      <RecmPackage/>
    </div>
  )
}

export default MiddleBar