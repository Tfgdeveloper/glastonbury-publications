import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import UpperHeader from '../Components/Header'
import HeroSection from '../Components/Hero'
import Servicescontent from '../Components/Servicescontent'
import Section4 from '../Components/Section4'
import WhyChooseUsSection from '../Components/Whychose'
import NeedHelpSection from '../Components/NeedHelpSection'
import TestimonialCarousel from '../Components/Testimonial'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import VideoCarousel from '../Components/Timesquare'
import Portfoliosection from '../Components/Portfoliosection'
import Ctasection from '../Components/Ctasection'
import Autopopup from "../Components/Autopopup";
const launchSteps = [
  { step: '01', title: 'Category Strategy', desc: "We research and identify the Amazon categories where your book has the highest realistic chance of hitting number one — balancing competition, relevance, and search volume.", icon: '/images/Consultation & Author Coaching.webp', hoverIcon: '/images/Consultation & Author Coachingw.webp' },
  { step: '02', title: 'Metadata Optimization', desc: "Your title, subtitle, book description, and backend keywords are fully optimized for Amazon's algorithm to drive organic discoverability alongside your launch push.", icon: '/images/Cover Design & Layout.webp', hoverIcon: '/images/Cover Design & Layoutw.webp' },
  { step: '03', title: 'Pre-Launch List Building', desc: 'We build and warm up your email list and ARC reader team in the weeks before launch — ensuring a concentrated surge of sales and reviews on day one.', icon: '/images/Marketing & Promotion.webp', hoverIcon: '/images/Marketing & Promotionw.webp' },
  { step: '04', title: 'Amazon Ads Campaign', desc: 'Targeted Amazon Sponsored Product ads are launched strategically to drive additional sales velocity during your launch window and continue momentum afterward.', icon: '/images/Publishing Solutions.webp', hoverIcon: '/images/Publishing Solutionsw.webp' },
  { step: '05', title: 'Coordinated Launch Day Push', desc: 'A precisely timed launch day execution — email blasts, social posts, ad activation, and reader team coordination all fire simultaneously to spike your Amazon rank.', icon: '/images/Ghost writing.webp', hoverIcon: '/images/Ghost writingw.webp' },
  { step: '06', title: 'Bestseller Status & Beyond', desc: 'Once you hit number one, we help you capture the badge and build a post-launch strategy to sustain momentum and capitalize on your new status.', icon: '/images/Global Distribution.webp', hoverIcon: '/images/Global Distributionw.webp' },
]

const LaunchStepCard = ({ s }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="rounded-lg p-5 flex flex-col items-start transition-all duration-300 cursor-pointer"
      style={{ background: hovered ? 'linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)' : '#f0f0f0', color: hovered ? '#fff' : '#000', justifyContent: 'space-between' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ background: hovered ? 'rgba(255,255,255,0.25)' : 'linear-gradient(145deg,#3b6635,#2d6588)', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, transition: 'background 0.3s' }}>
        <span style={{ color: '#fff', fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 700 }}>{s.step}</span>
      </div>
      <motion.div className="mb-3" animate={{ y: hovered ? 10 : 0, scale: hovered ? 1.08 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
        <img src={hovered ? s.hoverIcon : s.icon} loading="lazy" className="w-15" alt={s.title} />
      </motion.div>
      <div style={{ fontFamily: 'Lora, serif', fontSize: 20, fontWeight: 600 }} className="mb-1">{s.title}</div>
      <div style={{ fontFamily: 'Lora, serif', fontSize: 16, fontWeight: 400 }}>{s.desc}</div>
    </div>
  )
}

const BecomeAmazonBestseller = () => {
  return (
    <div>
      <Autopopup />
      <SEO
        title="Become An Amazon Bestselling Author | Glastonbury Publications"
        description="Join hundreds of authors who have achieved Amazon Bestseller status with our proven launch strategy. We handle everything from category selection to launch day execution."
        keyword="Amazon bestseller author, become Amazon bestseller, book launch strategy"
        focusKeyword="Become An Amazon Bestselling Author"
      />
      <UpperHeader />
      <HeroSection
        welcomeText=""
        title="Earn the Amazon Bestselling Author Title"
        description1="The Amazon Bestselling Author title opens doors, builds credibility, and boosts sales — permanently. Our proven launch strategy has helped hundreds of authors claim that coveted number one badge and use it to build thriving, lasting careers."
        linkText=""
        linkUrl=""
        description2=""
        listItems={[
          "Strategic category selection to maximize your bestseller odds.",
          "Coordinated launch day sales push to spike your Amazon rank.",
          "Pre-launch email list and ARC reader team setup.",
          "Amazon Sponsored Ads campaign to drive additional sales velocity.",
        ]}
      />
      <Servicescontent
        whyChooseUsText="Become An Amazon Bestselling Author"
        mainHeading="The Badge That Lasts a Lifetime — We Help You Earn It"
        description="Once you achieve Amazon Bestseller status, that title follows you everywhere — on your book cover, your website, your speaker bio, and every piece of marketing you ever create. Our team has a proven, step-by-step playbook to get you there and we execute it with precision. From smart category selection and full metadata optimization to pre-launch list building, review generation, and a perfectly timed launch day sales push — we handle every detail of your path to number one."
        image="/images/Become-An-Amazon-Bestselling-Author.png"
      />
      <Ctasection />

      {/* Our Bestseller Launch Strategy Steps */}
      <section className="w-full bg-white py-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ fontFamily: 'Lora, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500 }} className="mb-2">How We Get You to Number One</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, fontWeight: 700 }} className="mb-4">Our Proven Amazon Bestseller Launch Strategy</h2>
            <p style={{ fontFamily: 'Lora, serif', fontSize: 16, color: '#555' }} className="max-w-2xl mx-auto">Every step is deliberate, every action is timed, and every decision is backed by 25 years of experience launching bestselling books on Amazon.</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {launchSteps.map((s, i) => <LaunchStepCard key={i} s={s} />)}
          </motion.div>
        </div>
      </section>

      <Section4 />
      <WhyChooseUsSection
        leftImage="/images/3.jpeg"
        leftGif={null}
        leftImageClass="w-full h-full rounded-lg"
        whyChooseUsText="Why Amazon Bestseller Status Matters"
        mainHeading="Three Words That Permanently Transform Your Author Career"
        description="Amazon Bestselling Author is not just a title — it is a career accelerator. Every author we have worked with who achieved this status reports a significant, lasting impact on their visibility, media opportunities, and book sales for years after launch."
        features={[
          {
            title: "Permanent Credibility Boost",
            description: "Once earned, the Amazon Bestselling Author title stays with you forever — on your cover, bio, website, and every piece of marketing from that day forward.",
            icon: "/images/Comprehensive.webp",
            hoverIcon: "/images/Comprehensivew.webp",
          },
          {
            title: "Proven Launch Playbook",
            description: "We have refined our bestseller launch strategy over 25 years and hundreds of successful campaigns. We know exactly what works and execute it for every author.",
            icon: "/images/time.webp",
            hoverIcon: "/images/timew.webp",
          },
          {
            title: "Sales Momentum That Lasts",
            description: "Bestseller status triggers Amazon's recommendation algorithm, increasing organic visibility and continuing to drive sales long after your launch week ends.",
            icon: "/images/ROI.webp",
            hoverIcon: "/images/ROIw.webp",
          },
        ]}
      />
      <NeedHelpSection
        faqs={[
          {
            question: "Is achieving Amazon Bestseller status guaranteed?",
            answer: "While no one can guarantee specific rankings, our proven strategy has achieved bestseller status for over 400 authors. We have refined our approach over 25 years to maximize your chances.",
          },
          {
            question: "How long does the launch process take?",
            answer: "Our full bestseller launch program typically spans 6–8 weeks from strategy session to launch day, including all preparation, setup, and execution.",
          },
          {
            question: "Do I need a big existing audience?",
            answer: "No. Many of our most successful launches have been for debut authors with no prior following. Our strategy is designed to generate sales momentum from scratch.",
          },
          {
            question: "What happens after I achieve bestseller status?",
            answer: "You get to use that title forever. We also provide a post-launch support plan to help you sustain momentum and capitalize on your new bestseller status.",
          },
          {
            question: "Can you help with both eBook and print bestseller campaigns?",
            answer: "Yes. We develop strategies for both Kindle eBook and print categories on Amazon and identify the best opportunities across both formats for your specific book.",
          },
        ]}
      />
      <TestimonialCarousel />
      <Footer />
    </div>
  )
}

export default BecomeAmazonBestseller