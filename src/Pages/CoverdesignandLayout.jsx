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
const CoverdesignandLayout = () => {
  return (
    <div>
      <Autopopup />
        <SEO 
        title="Book Cover Design Services | Glastonbury Publications" 
        description="Eye-catching, professional book cover design services to help your book stand out and sell more. Work with Glastonbury Publications." 
        keyword="Book Cover Design Services"
        focusKeyword="Book Cover Design Services"
        />
      <UpperHeader
      
      />
      <HeroSection
      welcomeText = ""
      title = "Designs That Speak Louder Than Words"
      description1 = "Your book cover is the first impression—and often the deciding factor—when it comes to attracting readers. At Glastonbury Publications, we create stunning, professional covers that capture the essence of your story and draw readers in instantly."
      linkText="" // Passing the link text
      linkUrl="" // Passing the link URL
      description2 = ""
      
      listItems={[
        "Eye-catching designs that reflect your book’s unique voice and theme.",
        "Professional quality artwork crafted by experienced designers.",
        "Covers optimized for both print and digital formats.",
        "Focused on creating a strong visual impact to boost reader engagement."
  ]}
      />
      <Heroform/>
      <Servicescontent
       whyChooseUsText = "Cover Design And Layout"
       mainHeading = "Tailored Layouts for a Seamless Read."
       description = "The interior design of your book is just as important as the cover. Our skilled designers meticulously craft layouts that enhance readability and flow, whether for print or digital formats. We pay close attention to fonts, spacing, chapter headings, and overall page aesthetics to ensure your readers enjoy a comfortable and immersive experience. With expert formatting that meets industry standards, your manuscript transforms into a polished, professional publication that looks and feels as captivating as the story within."
       image="/images/Bookcover.webp"
      />
      <Section4/>
      <TestimonialCarousel/>
      <Footer/>
    </div>
  )
}

export default CoverdesignandLayout
