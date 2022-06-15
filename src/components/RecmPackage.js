import React from 'react'

function RecmPackage() {
  const Packages = [
    {
      ExpDate: '4 شهریور 1401',
      PackageName: 'بسته اینترنت سه ماهه',
      Discount: '20%',
      Price: '130,000'
    },
    {
      ExpDate: '12 خرداد 1401',
      PackageName: 'بسته ترکیبی هفتگی',
      Discount: '45%',
      Price: '45,000'
    },
    {
      ExpDate: '15 تیر 1401',
      PackageName: 'بسته اینترنت یکماهه',
      Discount: '15%',
      Price: '50,000'
    },
  ]
  return (
    <div className='rcmpackage'>
      <h1 style={{direction: 'rtl', float: 'right', padding: '0 20px 0 16px', fontSize: 20 }}>
      بسته های پیشنهادی مخصوص خود شما!</h1>
      <table className='table' dir='rtl'>
        <tr className='tr' style={{ textAlign: 'right', marginRight: 33 }}>
          <th className='th' style={{ paddingRight: 33 }}>تاریخ انقضا بسته</th>
          <th className='th' style={{ paddingRight: 33 }}>نام بسته</th>
          <th className='th' style={{ paddingRight: 33 }} >تخفیف</th>
          <th className='th' style={{ paddingRight: 33 }}>قیمت</th>
          <th></th>
        </tr> 
        <tbody>
          {Packages.map((item) => (
            <tr className='tr' style={{ textAlign: 'right', marginRight: 33 }}>
              <td className='td' style={{ paddingRight: 33 }}>{item.ExpDate}</td>
              <td className='td' style={{ paddingRight: 33 }}>{item.PackageName}</td>
              <td className='td' style={{ paddingRight: 33 }}>{item.Discount}</td>
              <td className='td' style={{ paddingRight: 33 }}>{item.Price}</td>
              <td>
                <button className="buy-button" 
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  direction: 'rtl',
                  background: '#FDC816',
                  borderColor:'white',
                  color: 'white',
                  width: 50,
                  height: 40,
                  borderRadius: 5,
                }}>خرید</button>
              </td>
            </tr>
          ))}
        </tbody>       
      </table>
    </div>
  )
}
export default RecmPackage