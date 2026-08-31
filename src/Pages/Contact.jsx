import React from 'react'
import UpperHeader from '../Components/Header'
import HeroSection from '../Components/Hero'
import Footer from '../Components/Footer'
import ContactSection from '../Components/Contactsection'
import SEO from '../Components/SEO'
import Autopopup from "../Components/Autopopup";
const Contact = () => {
  return (
    <div>
      <Autopopup />
       <SEO 
        title="Contact Us | Publish Like A Pro | Glastonbury Publications" 
        description="Contact now with Glastonbury Publications to publish like a pro—expert help with editing, design, marketing & more!" 
        keyword="Contact"
        focusKeyword="Contact"
        />
      <UpperHeader/>
      <HeroSection
      welcomeText = ""
      title = "Get in Touch with Us"
      description1 = "At "
      linkText="Glastonbury Publications" // Passing the link text
      linkUrl="/" // Passing the link URL
      description2 = ", we value clear and open communication with our authors. Whether you have questions about our services, need assistance with your project, or are ready to start your publishing journey, we are here to help."
      />
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Contact
