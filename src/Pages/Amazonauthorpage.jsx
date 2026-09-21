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
const pageElements = [
    { step: '01', title: 'Professional Author Bio', desc: 'A keyword-rich biography that tells your story and makes readers feel connected before they even open your book.', icon: '/images/Publishing Solutions.webp', hoverIcon: '/images/Publishing Solutionsw.webp' },
    { step: '02', title: 'Complete Book Catalog', desc: 'Every title with optimized descriptions, cover images, and direct buy links — making it effortless for readers to discover your catalog.', icon: '/images/Cover Design & Layout.webp', hoverIcon: '/images/Cover Design & Layoutw.webp' },
    { step: '03', title: 'Editorial Reviews', desc: 'Strategically placed reviews and endorsements that add instant social proof and give new readers the confidence to buy.', icon: '/images/Consultation & Author Coaching.webp', hoverIcon: '/images/Consultation & Author Coachingw.webp' },
    { step: '04', title: 'Author Photo & Branding', desc: 'A polished, professional author photo and consistent visual branding that makes your page memorable and trustworthy.', icon: '/images/Marketing & Promotion.webp', hoverIcon: '/images/Marketing & Promotionw.webp' },
    { step: '05', title: 'Blog Feed Integration', desc: 'Your Author Page synced with your blog feed so readers always see your latest updates, thoughts, and announcements.', icon: '/images/E-book & Audiobook Publishing.webp', hoverIcon: '/images/E-book & Audiobook Publishingw.webp' },
    { step: '06', title: 'Ongoing Optimization', desc: 'We monitor and update your page regularly to keep it current and performing as your catalog and career grows.', icon: '/images/Global Distribution.webp', hoverIcon: '/images/Global Distributionw.webp' },
]

const PageElementCard = ({ el }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className="rounded-lg p-5 flex flex-col items-start transition-all duration-300 cursor-pointer"
            style={{ background: hovered ? 'linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)' : '#f0f0f0', color: hovered ? '#fff' : '#000', justifyContent: 'space-between' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={{ background: hovered ? 'rgba(255,255,255,0.25)' : 'linear-gradient(145deg,#3b6635,#2d6588)', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, transition: 'background 0.3s' }}>
                <span style={{ color: '#fff', fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 700 }}>{el.step}</span>
            </div>
            <motion.div className="mb-3" animate={{ y: hovered ? 10 : 0, scale: hovered ? 1.08 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <img src={hovered ? el.hoverIcon : el.icon} loading="lazy" className="w-15" alt={el.title} />
            </motion.div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 20, fontWeight: 600 }} className="mb-1">{el.title}</div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 16, fontWeight: 400 }}>{el.desc}</div>
        </div>
    )
}

const AmazonAuthorPage = () => {
    return (

        <div>
         <Autopopup />
            <SEO
                title="Amazon Author Page Setup & Optimization | Glastonbury Publications"
                description="Let us build and optimize your Amazon Author Page to establish your brand, showcase your books, and convert browsers into loyal readers and buyers."
                keyword="Amazon author page, author central, Amazon book page, author profile setup"
                focusKeyword="Amazon Author Page"
            />
            <UpperHeader />
            <HeroSection
                welcomeText=""
                title="Own Your Space on Amazon"
                description1="Your Amazon Author Page is your home base for millions of readers. We build and optimize it to reflect your brand, showcase your books, and turn casual visitors into dedicated fans and loyal buyers."
                linkText=""
                linkUrl=""
                description2=""
                listItems={[
                    "Professional author bio written to connect with your target readers.",
                    "Full book catalog setup with optimized descriptions and buy links.",
                    "Editorial reviews and blurbs strategically placed for credibility.",
                    "Ongoing page monitoring and updates as your catalog grows.",
                ]}
            />
            <Servicescontent
                whyChooseUsText="Amazon Author Page"
                mainHeading="Your Amazon Author Page Works For You 24 Hours a Day, 7 Days a Week"
                description="When a reader clicks on your name, they land on your Amazon Author Page. In that moment, your page either earns their trust — or loses them to another author. We make sure your page is polished, complete, and compelling enough to convert every visit into a sale. Our team sets up and optimizes every element of your Author Central profile — from your biography and author photo to your blog feed, editorial reviews, and full book catalog."
                image="/images/Amazon-Author-Page.png"
            />
            <Ctasection />

            {/* What We Set Up */}
            <section className="w-full bg-white py-20 px-4 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500 }} className="mb-2">Every Element Covered</p>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, fontWeight: 700 }} className="mb-4">What We Build on Your Amazon Author Page</h2>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 16, color: '#555' }} className="max-w-2xl mx-auto">We set up and optimize every element of your Author Central profile so your page earns trust and drives sales from the very first visit.</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        {pageElements.map((el, i) => <PageElementCard key={i} el={el} />)}
                    </motion.div>
                </div>
            </section>

            <Section4 />
            <WhyChooseUsSection
                leftImage="/images/1.jpeg"
                leftGif={null}
                leftImageClass="w-full h-full rounded-lg"
                whyChooseUsText="Why Your Amazon Author Page Matters"
                mainHeading="First Impressions on Amazon Determine Whether Readers Buy Your Book"
                description="Millions of readers browse Amazon every day. A complete, professional Author Page is the difference between a reader who buys your book and one who moves on to someone else."
                features={[
                    {
                        title: "Build Instant Credibility",
                        description: "A polished Author Page signals to readers and reviewers that you are a serious, professional author worth their time, attention, and money.",
                        icon: "/images/Comprehensive.webp",
                        hoverIcon: "/images/Comprehensivew.webp",
                    },
                    {
                        title: "Drive More Sales",
                        description: "Readers who land on a well-crafted Author Page are significantly more likely to purchase multiple titles, boosting your overall revenue.",
                        icon: "/images/ROI.webp",
                        hoverIcon: "/images/ROIw.webp",
                    },
                    {
                        title: "Grow Your Author Brand",
                        description: "Your Amazon Author Page is the foundation of your brand on the world's largest bookstore. We build it to reflect your unique voice and long-term identity.",
                        icon: "/images/time.webp",
                        hoverIcon: "/images/timew.webp",
                    },
                ]}
            />
            <NeedHelpSection
                faqs={[
                    {
                        question: "Do I need an Amazon account to get started?",
                        answer: "Yes, you will need an Amazon Author Central account. We guide you through the setup process and handle all the optimization on your behalf.",
                    },
                    {
                        question: "How long does it take to set up my Author Page?",
                        answer: "Our team typically completes your Amazon Author Page setup and optimization within 3–5 business days after receiving your materials.",
                    },
                    {
                        question: "Can you help if I already have an Author Page?",
                        answer: "Absolutely. We offer full page audits and optimization services for existing Amazon Author Pages that need a professional refresh.",
                    },
                    {
                        question: "Will this help my book rank higher on Amazon?",
                        answer: "A complete and active Author Page contributes positively to your overall Amazon presence and supports better discoverability for your titles.",
                    },
                    {
                        question: "What information do I need to provide?",
                        answer: "We need your author bio, a professional photo, your book details, and any existing editorial reviews. Our team handles everything else from there.",
                    },
                ]}
            />
            <TestimonialCarousel />
            <Footer />
        </div>
    )
}

export default AmazonAuthorPage