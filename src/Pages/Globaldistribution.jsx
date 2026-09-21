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
import Heroform from '../Components/Heroform'
const Globaldistribution = () => {
  return (
    <div>
      <Autopopup />
      <SEO 
        title="Global Book Distribution Services | Glastonbury Publications" 
        description="Expand your book’s reach worldwide with Glastonbury Publications’ global book distribution services for authors and publishers." 
        keyword="Book Distribution Services"
        focusKeyword="Book Distribution Services"
        />
      <UpperHeader
      
      />
      <HeroSection
      welcomeText = ""
      title = "Taking Your Book to the World"
      description1 = "At Glastonbury Publications, we ensure your book reaches readers far and wide by leveraging our extensive distribution network across both print and digital platforms. Our strategic approach opens doors to global markets, connecting your work with diverse audiences worldwide. Whether through traditional bookstores, online retailers, or emerging digital channels. "
      linkText="" // Passing the link text
      linkUrl="" // Passing the link URL
      description2 = ""
      listItems={[
        "Extensive distribution network covering global print and digital markets.",
        "Partnerships with major bookstores, online retailers, and digital platforms.",
        "Strategies designed to maximize visibility ",
        "Seamless integration of print and digital channels "
  ]}
      />
      <Heroform/>
      <Servicescontent
       whyChooseUsText = "Global Distribution"
       mainHeading = "Seamless Access to International Markets"
       description = "Publishing a book is just the beginning—getting it into the hands of readers worldwide is where the true journey begins. Our comprehensive distribution network connects your work with major bookstores, online retailers, libraries, and distributors across multiple countries. We manage inventory, logistics, and partnerships so your book is available in both print and digital formats on key global platforms. Whether you’re targeting local readers or an international audience, we provide transparent tracking and support to maximize your book’s reach and sales potential."
       image="/images/Globaldistribution.webp"
      />
      
      <Section4/>
      <TestimonialCarousel/>
      <Footer/>
    </div>
  )
}

export default Globaldistribution
