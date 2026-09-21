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
const Bookdesignandformatting = () => {
  return (
    <div>
      <Autopopup />
        <SEO 
        title="Book Formatting Services | Best Book Design Services" 
        description="Professional book formatting & design services to make your book print & eBook-ready. Expert layout, fonts & styles for all genres." 
        keyword="Book Formatting Services"
        focusKeyword="Book Formatting Services"
        />
      <UpperHeader
      
      />
      <HeroSection
      welcomeText = ""
      title = "Beautiful Books That Speak Volumes"
      description1 = "A great story deserves an equally stunning presentation. At Glastonbury Publications, our expert designers and formatters craft visually appealing book layouts and covers that capture your book’s essence and attract readers."
      linkText="" // Passing the link text
      linkUrl="" // Passing the link URL
      description2 = ""
      listItems={[
        "Expert Book Design",
        "Visually Stunning Layouts",
        "Captivating Covers",
        "Essence-Capturing Presentations"
  ]}
      />
      <Heroform/>
      <Servicescontent
       whyChooseUsText = "Book Design and Formatting"
       mainHeading = "Custom Design and Precision Formatting"
       description = "We understand that a book’s design is more than just aesthetics—it’s about creating an immersive experience that reflects the tone and personality of your story. That’s why we meticulously tailor every detail, including font selection, spacing, chapter headings, margins, and pagination, to ensure your manuscript not only meets but exceeds industry standards for both print and digital formats. Whether your book will be published as a physical hardcover, paperback, eBook, or all formats, we optimize the layout for smooth navigation and consistent formatting on every device and platform. This precision formatting guarantees a polished, professional look that enhances your narrative’s impact and keeps readers fully engaged from the first page to the last."
       image="/images/Customservice.webp"
      />
      <Section4/>
      <TestimonialCarousel/>
      <Footer/>
    </div>
  )
}

export default Bookdesignandformatting
