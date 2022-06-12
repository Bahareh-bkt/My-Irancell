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
      <h1 style={{ float: 'right', padding: '0 20px 0 16px', fontSize: 20 }}>
      بسته های پیشنهادی مخصوص خود شما!</h1>
      <table dir='rtl'>
        <tr style={{ textAlign: 'right', marginRight: 33 }}>
          <th style={{ paddingRight: 33 }}>تاریخ انقضا بسته</th>
          <th>نام بسته</th>
          <th>تخفیف</th>
          <th>قیمت</th>
          <th></th>
        </tr> 
        <tbody>
          {mockRowData.map((item) => (
            <tr>
              <td style={{ paddingRight: 33 }}>{item.date}</td>
              <td>{item.PackageName}</td>
              <td>{item.Discount}</td>
              <td>{item.Price}</td>
              <td>
                <button className="buy-button">خرید</button>
              </td>
            </tr>
          ))}
        </tbody>       
      </table>
      {/* <RecmPackage Packages={Packages} /> */}
    </div>
  )
}
export default RecmPackage