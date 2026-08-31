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
import HeroSectionwithform from '../Components/Herowithform'
const Ghostwriting = () => {
  return (
    <div>
      <Autopopup />
      <SEO
        title="Professional Ghostwriting Services For Authors and Businesses"
        description="Professional ghostwriting services for authors & businesses. Get high-quality, original content tailored to your voice & goals."
        keyword="Ghostwriting Services"
        focusKeyword="Ghostwriting Services"
      />
      <UpperHeader

      />
      <HeroSectionwithform
        welcomeText=""
        title="Ghostwriting Services That Bring Your Ideas to Life"
        description="Not everyone has the time, experience, or confidence to write their story—and that’s where Glastonbury Publications steps in to help. Our skilled ghostwriters and editors collaborate closely with you to capture your unique voice and vision, transforming your ideas into a polished, compelling manuscript. We handle the writing and editing process with professionalism and care, ensuring your story resonates with readers and meets industry standards."
        linkText="" // Passing the link text
        linkUrl="" // Passing the link URL
        description2="Not everyone has the time, experience, or confidence to write their story—and that’s where Glastonbury Publications steps in to help. Our skilled ghostwriters and editors collaborate closely with you to capture your unique voice and vision, transforming your ideas into a polished, compelling manuscript. We handle the writing and editing process with professionalism and care, ensuring your story resonates with readers and meets industry standards."
        listItems={[
          "Experienced ghostwriters who bring your ideas vividly to life.",
          "Professional editors dedicated to refining and enhancing your manuscript.",
          "Collaborative process focused on maintaining your authentic voice.",
          "Support that transforms your vision into a captivating, ready-to-publish book. "
        ]}
      />
      
      <Servicescontent
        whyChooseUsText="Ghost Writing"
        mainHeading="Collaborative Writing and Editing Tailored to You"
        description="Whether you have ideas jotted down or just a concept in mind, our experienced ghostwriters transform your thoughts into engaging, well-structured narratives that sound authentically like you. Alongside this, our professional editors refine your manuscript with meticulous attention to grammar, flow, and consistency, ensuring your story shines at every level. We maintain open communication throughout the process, welcoming your feedback and making sure the final product reflects your unique voice and message. With our combined expertise, your book will be clear, captivating, and ready for publication."
        image="/images/Ghostwriting.webp"
      />
      <Section4 />
      <TestimonialCarousel />
      <Footer />
    </div>
  )
}

export default Ghostwriting
