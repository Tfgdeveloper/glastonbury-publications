import Thankyoucontent from '../Components/Thankyoucontent'
import UpperHeader from '../Components/Header'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'



const Thanyou = () => {

  
  return (
    <div>
      
      <SEO 
        title="Thankyou For Choosing Us | Glastonbury Publications" 
        description="Thank you for choosing Glastonbury Publications. We appreciate your trust in our publishing services and look forward to serving you again." 
        keyword="Thankyou"
        focusKeyword="Thankyou"
        
       >
        <script>
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-17945570052/wjdqCJn9s4ocEITWju1C',
              'value': 1.0,
              'currency': 'USD'
            });
          `}
        </script>
       </SEO>
          
        <UpperHeader/>
      <Thankyoucontent/>
      <Footer/>
    </div>
  )
}

export default Thanyou
