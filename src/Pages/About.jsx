import React from 'react'
import UpperHeader from '../Components/Header'
import HeroSection from '../Components/Hero'
import Aboutsection from '../Components/Aboutsection'
import Section4 from '../Components/Section4'
import NeedHelpSection from '../Components/NeedHelpSection'
import TestimonialCarousel from '../Components/Testimonial'
import WhyChooseUsSection from '../Components/Whychose'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'

import Autopopup from "../Components/Autopopup";
const About = () => {
  return (
    <div>
<Autopopup />
      <SEO 
        title="About Glastonbury Publications | #1 Book Publishers in USA" 
        description="Discover about Glastonbury Publications—USA’s #1 book publisher for top-quality editing, design, publishing & marketing services." 
        keyword="About"
        focusKeyword="About"
        />
      <UpperHeader/>
      <HeroSection
      welcomeText = ""
      title = "About Us"
      description1 = "At , "
      linkText="Glastonbury Publications" // Passing the link text
      linkUrl="/" // Passing the link URL
      description2 = "we believe in the power of words to inspire, educate, and entertain. With over years of experience in the publishing industry, we specialize in turning your ideas into professionally published works that reach the right audience. Whether you're a debut author or a seasoned writer, we offer a full suite of publishing services designed to support your journey from concept to distribution."
      listItems={[
        "Experience turning ideas into professionally published books",
        "Services tailored for both debut authors and seasoned writers",
        "Expert guidance combined with industry knowledge to maximize the impact of your work.",
        "Committed to helping you share stories that inspire, educate, and entertain readers worldwide."
  ]}
      />
      <Aboutsection
      whyChooseUsText = "About Glastonbury Publications"
      mainHeading = "Your Partner in Publishing Success"
      description = "At Glastonbury Publications, we are committed to transforming your manuscript into a professionally published book. With over 25 years of experience in the publishing industry, our team of experts provides comprehensive services, from initial manuscript review to worldwide distribution. Whether you're a first-time author or a seasoned writer, we are here to guide you at every step."
      features = {[
    {
      title: "Creative Team",
      text: "Our passionate and skilled professionals bring your vision to life with high-quality designs, editing, and publishing solutions.",
    },
    {
      title: "Committed Service",
      text: "From the moment you partner with us, you’ll receive personalized attention, ensuring your book reflects your best work.",
    },
    {
      title: "Tailored Solutions",
      text: "We offer flexible publishing options that fit your specific needs, whether you’re aiming for self-publishing or seeking traditional routes.",
    },
    {
      title: "Round-the-Clock Support",
      text: "Our team is available 24/7 to assist you with any questions or concerns, ensuring a smooth publishing process.",
    },
  ]}
      />
      <Section4/>
      <WhyChooseUsSection
      whyChooseUsText = "Why Choose Glastonbury Publications?"
      mainHeading = "Comprehensive Support for Every Step of Your Publishing Journey"
      description = "With over 25 years of experience in the publishing industry, Glastonbury Publications is your trusted partner for bringing your book to life. We understand the complexities of the publishing world and are committed to offering solutions that cover all your needs while securing your future as an author."
      features = {[
    {
      title: "Hassle-Free Process",
      description: "Our well-organized workflow takes the burden off your shoulders, so you can focus entirely on your writing while we manage the publishing details.",
      icon: "/images/time.webp",
      hoverIcon: "/images/timew.webp",
    },
    {
      title: "Maximize Your Return on Investment",
      description: "We offer affordable publishing options that ensure you get the most value from every penny you spend while maintaining exceptional quality.",
      icon: "/images/ROI.webp",
      hoverIcon: "/images/ROIw.webp",
    },
    {
      title: "Comprehensive Protection for Your Work",
      description: "Your intellectual property is important. We safeguard your book with robust digital security and ensure your rights are protected every step of the way.",
      icon: "/images/Comprehensive.webp",
      hoverIcon: "/images/Comprehensivew.webp",
    },
  ]}
      />
      <TestimonialCarousel/>
      <Footer/>
    </div>
  )
}

export default About
