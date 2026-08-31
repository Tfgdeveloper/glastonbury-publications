import React from 'react'
import UpperHeader from '../Components/Header'
import HeroSection from '../Components/Hero'
import Servicescontent from '../Components/Servicescontent'
import Section4 from '../Components/Section4'
import TestimonialCarousel from '../Components/Testimonial'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import VideoCarousel from '../Components/Timesquare'
import Portfoliosection from '../Components/Portfoliosection'
import Autopopup from "../Components/Autopopup";
const Marketingandpromotion = () => {
  return (
    <div>
      <Autopopup />
       <SEO 
        title="Book Marketing Services | Hire Best Book Marketers in USA" 
        description="Boost your book sales with top-rated book marketing services. Hire expert book marketers in the USA to grow your author brand." 
        keyword="Book Marketing Services"
        focusKeyword="Book Marketing Services"
        />
      <UpperHeader
      
      />
      <HeroSection
      welcomeText = ""
      title = "Amplify Your Book’s Reach"
      description1 = "A great book deserves to be seen and celebrated. At Glastonbury Publications, we specialize in tailored marketing and promotional strategies that connect your story with the right readers, building buzz and driving sales."
      linkText="" // Passing the link text
      linkUrl="" // Passing the link URL
      description2 = ""
      listItems={[
        "Customized marketing plans designed to target your ideal audience.",
        "Multi-channel promotion including social media, email, and events.",
        "Proven techniques to increase visibility and generate excitement.",
        "Dedicated support to help maximize your book’s sales potential."
  ]}
      />
      <Servicescontent
       whyChooseUsText = "Marketing And Promotion"
       mainHeading = "Strategic Promotion That Puts Your Book in the Spotlight"
       description = "Navigating the world of book marketing can be overwhelming, but our expert team is here to guide you every step of the way. We craft customized campaigns that include social media outreach, targeted advertising, author branding, and media engagement to maximize visibility. From launch planning to ongoing promotion, we leverage proven tactics and innovative tools to create excitement around your book. Our approach ensures that your work reaches bookstores, online platforms, and readers worldwide, helping you build a loyal audience and long-term success."
       image="/images/Bookmarketing.webp"
      />
      
      <Section4/>
      <TestimonialCarousel/>
      <Footer/>
    </div>
  )
}

export default Marketingandpromotion
