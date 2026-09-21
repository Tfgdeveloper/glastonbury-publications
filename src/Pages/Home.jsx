import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import HeroSection from '../Components/Hero'
import TestimonialCarousel from '../Components/Testimonial'
import NeedHelpSection from '../Components/NeedHelpSection'
import WhyChooseUsSection from '../Components/Whychose'
import Section4 from '../Components/Section4'

import Ctasection from '../Components/Ctasection'

import Aboutsection from '../Components/Aboutsection'
import Servicessection from '../Components/Servicessection'
import SEO from '../Components/SEO'
import VideoCarousel from '../Components/Timesquare'
import Portfoliosection from '../Components/Portfoliosection'
import PublishingProcess from '../Components/PublishingProcess'
import Heroform from '../Components/Heroform'
import BestSellerPopup from '../Components/BestSellerPopup'





const Home = () => {
  return (
    <div>
      
      <BestSellerPopup/>
       
          <SEO 
            title="Glastonbury Publications | Building Successful Author Brands" 
            description="We provide expert book publishing services—from editing, formatting, and cover design to ghostwriting and targeted book marketing." 
            keyword="Glastonbury Publications"
            focusKeyword="Glastonbury Publications"
          />
      <Header/>
      <HeroSection
      welcomeText = "Welcome to Glastonbury Publications"
      title = "Book Publishing Services Built for Bold New Voices"
      description1 = "At Glastonbury Publications, we’re a book publishing company helping authors bring their stories to life. Whether you're a first-time writer or seasoned storyteller, our expert self publishing services are designed to guide you every step of the way. As a trusted book publisher for new authors, we combine creativity, strategy, and support to help your book succeed."
      linkText="" // Passing the link text
      linkUrl="" // Passing the link URL
      description2 = ""
      listItems={[
  ]}
      />
      <section className='hidden md:flex md:mt-[-85px] bg-[#EAE9E9] w-full flex justify-center items-center z-[9999]'>
        <Heroform/>
              
      </section>
      
      <Servicessection/>
      <Ctasection/>
      <Aboutsection
      whyChooseUsText = "About Glastonbury Publications"
      mainHeading = "Where New Voices Find Their Way to the World"
      description = "We are more than just a book publishing company — we’re your creative launchpad. Whether you’re dreaming big or just getting started, our expert team is here to guide you with tailored book publishing services. From first draft to finished masterpiece, we empower every author—especially those seeking self publishing services or a supportive book publisher for new authors."
      features = {[
    {
      title: "Creative Visionaries",
      text: "We bring bold stories to life through captivating cover design, professional editing, and strategic publishing insight. With our expert eye and passion for storytelling, we elevate your vision from manuscript to masterpiece.",
    },
    {
      title: "Author-First Approach",
      text: "As a values-driven book publisher, we put your voice at the center of every decision we make.We work closely with you to honor your message, tone, and creative control throughout the process. Because at Glastonbury, your book isn’t just a project—it’s your legacy, and we treat it that way.",
    },
    {
      title: "Flexible Pathways",
      text: "Whether you prefer the freedom of self publishing services or a more guided route, we’ve got you. Our personalized approach gives you the tools, control, and support you need—on your terms. We adapt to fit your journey, not the other way around.",
    },
    {
      title: "Real-Time Support",
      text: "Questions? You’ll never feel stuck. Our responsive team is here 24/7 with answers and real solutions. We’re with you from the first draft to final upload—and everything in between.Because great service isn’t a bonus—it’s built into how we operate.",
    },
  ]}
      />
      
      <PublishingProcess
       title="The Book Publishing"
        highlightedText="Process"
        steps={[
          {
            imgSrc: "/images/01.png",
            heading: "Manuscript Submission",
            text: "Submit your manuscript to us. Our team will review your work to ensure it’s ready for the next phase of the publishing process. We’ll assess the content, structure, and overall quality to provide you with the best guidance."
          },
          {
            imgSrc: "/images/02.png",
            heading: "Editing and Proofreading",
            text: "Once your manuscript is ready, we proceed with editing and proofreading. Our expert editors will refine the language, improve flow, and ensure your manuscript is free of errors, making it ready for publication."
          },
          {
            imgSrc: "/images/03.png",
            heading: "Design and Formatting",
            text: "This step focuses on transforming your manuscript into a visually appealing book. We design an engaging cover and format the interior to make sure it looks polished in both print and digital formats."
          }
        ]}
        image="/images/section6.png"
        />
      <Section4/>
      <WhyChooseUsSection
      whyChooseUsText = "Why Choose Us?"
      mainHeading = "Expert-Led Book Publishing Services That Guide You Every Step of the Way"
      description = "With 25+ years of experience, Glastonbury Publications is more than just a book publishing company — we’re a long-term partner in your author journey. Whether you're just starting out or scaling up, our full-suite book publishing services are designed to simplify the process, protect your work, and maximize your success."
      features = {[
    {
      title: "Hassle-Free Process",
      description: "Our streamlined system removes the guesswork and stress. You focus on writing, while our experienced book publisher team handles editing, design, printing, and distribution—making your journey smooth from day one.",
      icon: "/images/time.webp",
      hoverIcon: "/images/timew.webp",
    },
    {
      title: "Maximize Your ROI",
      description:"We offer budget-friendly book publishing and book marketing plans built to get you the most out of every dollar. From launch campaigns to retail placement, we make sure your investment delivers real, measurable results.",
      
      icon: "/images/ROI.webp",
      hoverIcon: "/images/ROIw.webp",
    },
    {
      title: "Comprehensive Protection for Your Work",
      description: "Your intellectual property matters. As a trusted book publisher for new authors, we provide top-tier digital security and licensing guidance to keep your rights protected across formats and borders.",
      icon: "/images/Comprehensive.webp",
      hoverIcon: "/images/Comprehensivew.webp",
    },
  ]}
      />
      
            <NeedHelpSection
      faqs = {[
  {
    question: "How do I get started with publishing my book?",
    answer:"Starting with Glastonbury Publications is easy. Reach out to us, and our expert team will walk you through our book publishing services, whether you want to self-publish or need a book publisher for new authors to help bring your story to life.",
  },
  {
    question: "What services do you offer for authors?",
    answer: "We offer comprehensive services including editing, formatting, cover design, ghostwriting, and book marketing services to ensure that your book reaches its full potential in the market.",
  },
  {
    question: "How long does it take to publish my book?",
    answer: "The timeline depends on the complexity of your project, but with our efficient process, we ensure your book moves quickly through book publishing stages. From manuscript to finished product, we aim to get your book to you in the shortest time possible.",
  },
  {
    question: "Can I publish my book digitally and in print?",
    answer: "Yes! Whether you're aiming for an eBook, audiobook, or printed copies, we provide full book publishing services for both digital and print formats, allowing you to reach readers across all platforms.",
  },
  {
    question: "What types of marketing do you offer?",
    answer: "We provide targeted book marketing services that help you build an audience and increase book sales. From social media campaigns to press releases, we have the tools and experience to boost your book's visibility.",
  },
]}
      />
      <Portfoliosection/>
      

      
      <VideoCarousel/>
      <TestimonialCarousel/>
      
      

      <Footer/>
    </div>
  )
}

export default Home
