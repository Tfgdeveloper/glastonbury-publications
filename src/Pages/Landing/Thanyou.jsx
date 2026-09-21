import { useEffect } from "react";



import Header from '../../Components/landing/Header'
import Footer from '../../Components/landing/Footer'
import Thankyoucontent from '../../Components/Thankyoucontent'

const Thankyou = () => {
  useEffect(() => {
    if (window.gtag) {
window.gtag('event', 'conversion', {
send_to: 'AW-17438847902/rg6kCKv_9fYbEJ7nvvtA',
value: 1.0,
currency: 'USD'
});
}
}, []);
  return (
    <div>
      
        <Header/>
      <Thankyoucontent/>
      <Footer/>
    </div>
  )
}

export default Thankyou
