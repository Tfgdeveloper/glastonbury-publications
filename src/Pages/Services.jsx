import React from 'react'
import UpperHeader from '../Components/Header'
import HeroSection from '../Components/Hero'
import Servicessection from '../Components/Servicessection'
import Section4 from '../Components/Section4'
import WhyChooseUsSection from '../Components/Whychose'
import NeedHelpSection from '../Components/NeedHelpSection'
import TestimonialCarousel from '../Components/Testimonial'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import Autopopup from "../Components/Autopopup";
const Services = () => {
  return (
    <div>
      <Autopopup />
      <SEO 
        title="Our Services | Glastonbury Publications" 
        description="Discover expert book publishing, editing, design & marketing services at Glastonbury Publications. Bring your book to life!" 
        keyword="Our Services"
        focusKeyword="Our Services"
                />
      <UpperHeader
      
      />
      <HeroSection
       welcomeText = ""
      title = "Our Services"
      description1 = "At Glastonbury Publications, we provide a comprehensive range of services designed to help you publish, "
      linkText="market" // Passing the link text
      linkUrl="/marketing-and-promotion" // Passing the link URL
      description2 = ", and distribute your book professionally. Whether you're a first-time author or an experienced writer, we have the tools and expertise to bring your vision to life."
      listItems={[
        "Comprehensive publishing, marketing, and distribution services tailored to your needs.",
        "Experienced team equipped to guide both new and established authors.",
        "Proven strategies to maximize your book’s reach and impact.",
        "Commitment to delivering professional results that reflect your unique vision."
  ]}
    />
      <Servicessection/>
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
      <NeedHelpSection
      faqs = {[
  {
    question: "How do I get started with publishing my book?",
    answer:"Simply contact us to discuss your project. We'll walk you through our process and tailor a plan to meet your needs.",
  },
  {
    question: "What services do you offer for authors?",
    answer: "We provide a full range of services including manuscript editing, cover design, book printing, e-book conversion, and marketing strategies to ensure your book's success.",
  },
  {
    question: "How long does it take to publish my book?",
    answer: "The timeline depends on the complexity of your project, but generally, it takes 4-6 months from manuscript submission to final publication.",
  },
  {
    question: "Can I publish my book digitally and in print?",
    answer: "Yes! We offer both print and digital publishing options to help you reach a wider audience.",
  },
  {
    question: "What types of marketing do you offer?",
    answer: "Our marketing services include social media campaigns, press releases, author websites, and more to help promote your book to the right audience.",
  },
]}
      />
      <TestimonialCarousel/>
      <Footer/>


    </div>
  )
}

export default Services
