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
const packageItems = [
  { title: 'Custom Billboard Design', desc: "Our creative team designs a stunning full-color billboard featuring your book cover, title, and author name — breathtaking on the world's most famous screens.", icon: '/images/Cover Design & Layout.webp', hoverIcon: '/images/Cover Design & Layoutw.webp' },
  { title: 'Prime Times Square Placement', desc: 'Your announcement runs across multiple high-traffic digital screens in the heart of Times Square, seen by thousands of live visitors.', icon: '/images/Publishing Solutions.webp', hoverIcon: '/images/Publishing Solutionsw.webp' },
  { title: 'Professional HD Video', desc: 'We capture a professional HD video of your book lighting up Times Square — a priceless marketing asset you will use for years to come.', icon: '/images/Marketing & Promotion.webp', hoverIcon: '/images/Marketing & Promotionw.webp' },
  { title: 'Social Media Content Pack', desc: 'Edited clips and photos from your Times Square appearance, formatted and ready to share across all your social media platforms.', icon: '/images/Global Distribution.webp', hoverIcon: '/images/Global Distributionw.webp' },
  { title: 'Official Press Release', desc: 'A professionally written press release announcing your Times Square feature, ready for distribution to media contacts and literary press outlets.', icon: '/images/E-book & Audiobook Publishing.webp', hoverIcon: '/images/E-book & Audiobook Publishingw.webp' },
  { title: 'Certificate of Recognition', desc: "An official certificate commemorating your book's appearance in Times Square — a keepsake celebrating this landmark moment in your author journey.", icon: '/images/Ghost writing.webp', hoverIcon: '/images/Ghost writingw.webp' },
]

const PackageItemCard = ({ item }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className="rounded-lg p-5 flex flex-col items-start transition-all duration-300 cursor-pointer"
      style={{ background: hovered ? 'linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)' : '#f0f0f0', color: hovered ? '#fff' : '#000', justifyContent: 'space-between' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div className="mb-3" animate={{ y: hovered ? 10 : 0, scale: hovered ? 1.08 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
        <img src={hovered ? item.hoverIcon : item.icon} loading="lazy" className="w-15" alt={item.title} />
      </motion.div>
      <div style={{ fontFamily: 'Lora, serif', fontSize: 20, fontWeight: 600 }} className="mb-1">{item.title}</div>
      <div style={{ fontFamily: 'Lora, serif', fontSize: 16, fontWeight: 400 }}>{item.desc}</div>
    </div>
  )
}

const TimesSquareBookAnnouncement = () => {
  return (
    <div>
      <Autopopup />
      <SEO
        title="Times Square Book Announcement | Glastonbury Publications"
        description="Get your book featured on the iconic Times Square billboards in New York City. A once-in-a-lifetime announcement that creates buzz, credibility, and unforgettable memories."
        keyword="Times Square book announcement, book billboard NYC, author Times Square"
        focusKeyword="Times Square Book Announcement"
      />
      <UpperHeader />
      <HeroSection
        welcomeText=""
        title="Light Up Times Square With Your Book"
        description1="Imagine your book glowing on the biggest, boldest screens in the world — right in the heart of New York City. Our Times Square Book Announcement package creates a landmark moment that boosts your credibility and generates massive attention."
        linkText=""
        linkUrl=""
        description2=""
        listItems={[
          "Custom billboard design featuring your book cover and author name.",
          "Prime placement across multiple high-traffic Times Square screens.",
          "Professional HD video of your book's Times Square appearance.",
          "Social media content pack and official press release included.",
        ]}
      />
      <Servicescontent
        whyChooseUsText="Times Square Book Announcement"
        mainHeading="The World's Most Famous Address Is Now Your Book's Biggest Stage"
        description="Times Square attracts over 50 million visitors annually and reaches billions more online. A book announcement here carries the weight of a major press moment — establishing instant credibility, generating shareable content, and creating a buzz that ripples far beyond New York City. Authors who feature in Times Square consistently report increased media interest, higher sales, and stronger reader confidence from the moment their announcement goes live."
        image="/images/Times-Square-Book-Announcement.png"
      />
      <Ctasection />

      {/* Complete Package Breakdown */}
      <section className="w-full bg-white py-20 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p style={{ fontFamily: 'Lora, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500 }} className="mb-2">Your Complete Package</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, fontWeight: 700 }} className="mb-4">Everything Included in Your Times Square Announcement</h2>
            <p style={{ fontFamily: 'Lora, serif', fontSize: 16, color: '#555' }} className="max-w-2xl mx-auto">We handle every detail from start to finish. Here is exactly what you receive when you book your Times Square moment with Glastonbury Publications.</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {packageItems.map((item, i) => <PackageItemCard key={i} item={item} />)}
          </motion.div>
        </div>
      </section>

      <Section4 />
      <WhyChooseUsSection
        leftImage="/images/4.jpeg"
        leftGif={null}
        leftImageClass="w-full h-full rounded-lg"
        whyChooseUsText="Why Times Square?"
        mainHeading="A Times Square Announcement Creates Credibility That No Other Marketing Can Match"
        description="The moment your book lights up Times Square, you join a select group of authors who have used one of the world's most iconic stages to announce their work. It's a statement that readers, media, and publishers instantly recognize."
        features={[
          {
            title: "Instant Global Credibility",
            description: "Times Square is recognized worldwide. Featuring your book here immediately elevates your standing as a serious, professional author in the eyes of readers and media.",
            icon: "/images/Comprehensive.webp",
            hoverIcon: "/images/Comprehensivew.webp",
          },
          {
            title: "Viral Social Media Content",
            description: "Your HD Times Square video and photos are among the most shareable content any author can post — generating organic reach, reactions, and press attention.",
            icon: "/images/Marketing & Promotion.webp",
            hoverIcon: "/images/Marketing & Promotionw.webp",
          },
          {
            title: "A Milestone Worth Celebrating",
            description: "Beyond marketing, a Times Square announcement celebrates your achievement as a published author in the most spectacular way possible.",
            icon: "/images/time.webp",
            hoverIcon: "/images/timew.webp",
          },
        ]}
      />
      <NeedHelpSection
        faqs={[
          {
            question: "How long does my book appear on the Times Square screens?",
            answer: "Your book's announcement plays across multiple Times Square digital displays over a scheduled time window. The full HD recording captures every moment for you to keep and share.",
          },
          {
            question: "Can I use the Times Square footage for marketing?",
            answer: "Absolutely. The HD video and photos are yours to use across social media, your website, press releases, and any other marketing materials — forever.",
          },
          {
            question: "How far in advance do I need to book?",
            answer: "We recommend booking at least 3–4 weeks in advance to allow time for design, approval, and scheduling. Rush bookings may be available — contact us to check availability.",
          },
          {
            question: "Is this only for published authors?",
            answer: "No. Many authors use their Times Square announcement as part of their pre-launch buzz strategy. You do not have to wait until after publication to claim your moment.",
          },
          {
            question: "What do I need to provide?",
            answer: "Simply send us your book cover, title, author name, and any branding preferences. Our creative team handles the full billboard design and all arrangements from there.",
          },
        ]}
      />
      <TestimonialCarousel />
      <Footer />
    </div>
  )
}

export default TimesSquareBookAnnouncement