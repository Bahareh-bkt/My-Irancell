
function RecmPackage() {
  const Packages = [
    {
      ExpDate: '4 شهریور 1401',
      PackageName: 'بسته اینترنت سه ماهه',
      Discount: '20%',
      Price: '130000'
    },
    {
      ExpDate: '12 خرداد 1401',
      PackageName: 'بسته ترکیبی هفتگی',
      Discount: '45%',
      Price: '45000'
    },
    {
      ExpDate: '15تیر 1401',
      PackageName: 'بسته اینترنت یکماهه',
      Discount: '15%',
      Price: '50000'
    },
  ]
  return (
    <div className='rcmpackage'>
      <p dir='rtl'>بسته های پیشنهادی مخصوص خود شما!</p>
      <RecmPackage Packages={Packages} />
    </div>
  )
}
export default RecmPackage