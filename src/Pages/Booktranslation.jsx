import React from 'react'
import Footer from '../Components/Footer'
import TestimonialCarousel from '../Components/Testimonial'
import Section4 from '../Components/Section4'
import Servicescontent from '../Components/Servicescontent'
import HeroSection from '../Components/Hero'
import UpperHeader from '../Components/Header'
import SEO from '../Components/SEO'
import VideoCarousel from '../Components/Timesquare'
import Portfoliosection from '../Components/Portfoliosection'
import Autopopup from "../Components/Autopopup";
import Heroform from '../Components/Heroform'
const Booktranslation = () => {
  return (
    <div>
      <Autopopup />
       <SEO 
        title="Book Translation Services For Authors And Businesses" 
        description="Reach global audiences with expert book translation services for authors & businesses. Accurate, fast, and culturally tailored." 
        keyword="Book Translation Services"
        focusKeyword="Book Translation Services"
        />
      <UpperHeader
      
      />
      <HeroSection
     welcomeText = ""
      title = "Bridging Cultures Through Your Words"
      description1 = "Take your story beyond borders with Glastonbury Publications’ professional book translation services. We connect you with readers in new languages while preserving your unique voice and message."
      linkText="" // Passing the link text
      linkUrl="" // Passing the link URL
      description2 = ""
      listItems={[
        "Global Language Reach",
        "Voice Preservation",
        "Cultural Sensitivity",
        "Seamless Translations"
  ]}
      />
      <Heroform/>
      <Servicescontent
       whyChooseUsText = "Book Translation"
       mainHeading = "Accurate and Nuanced Translation"
       description = "Our skilled translators specialize in literary adaptation, carefully capturing not just the words but the spirit and style of your original text. We ensure your book reads naturally and fluently in the target language, preserving the author’s unique voice and emotional tone while making it accessible and engaging for new audiences. Beyond basic translation, our team is deeply attuned to cultural nuances and regional variations, so your story resonates authentically with readers across different cultures and backgrounds. We manage the entire process from the initial translation through multiple rounds of rigorous editing and proofreading, delivering a polished, flawless final manuscript. This comprehensive approach guarantees that your translated book maintains the highest quality standards and the integrity of your original work."
       image="/images/AuthorConsultation.webp"
      />
      <Section4/>
      <TestimonialCarousel/>
      <Footer/>
    </div>
  )
}

export default Booktranslation
