import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Ctasection from '../Components/Ctasection'
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
import Autopopup from "../Components/Autopopup";
const adPlatforms = [
    { name: 'Amazon Sponsored Ads', desc: 'Place your book directly in front of Amazon shoppers who are actively searching for titles in your genre.', icon: '/images/Publishing Solutions.webp', hoverIcon: '/images/Publishing Solutionsw.webp' },
    { name: 'Google & Bing Search Ads', desc: "Capture readers searching for books like yours on the world's biggest search engines with targeted pay-per-click campaigns.", icon: '/images/Global Distribution.webp', hoverIcon: '/images/Global Distributionw.webp' },
    { name: 'Facebook & Instagram Ads', desc: "Reach highly specific reader audiences using Facebook's powerful demographic and interest-based targeting tools.", icon: '/images/Marketing & Promotion.webp', hoverIcon: '/images/Marketing & Promotionw.webp' },
    { name: 'Goodreads Advertising', desc: 'Tap into a passionate community of 150M+ readers who are already looking for their next favorite book.', icon: '/images/E-book & Audiobook Publishing.webp', hoverIcon: '/images/E-book & Audiobook Publishingw.webp' },
    { name: 'BookBub Featured Deals', desc: "Get featured in BookBub's curated newsletters and reach millions of deal-seeking avid readers instantly.", icon: '/images/Cover Design & Layout.webp', hoverIcon: '/images/Cover Design & Layoutw.webp' },
    { name: 'TikTok Book Ads', desc: 'Leverage the explosive growth of BookTok to reach younger readers through short-form video advertising.', icon: '/images/Ghost writing.webp', hoverIcon: '/images/Ghost writingw.webp' },
]

const AdPlatformCard = ({ item }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className="rounded-lg p-5 flex flex-col items-start transition-all duration-300 cursor-pointer"
            style={{ background: hovered ? 'linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)' : '#f0f0f0', color: hovered ? '#fff' : '#000', justifyContent: 'space-between' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div className="mb-3" animate={{ y: hovered ? 10 : 0, scale: hovered ? 1.08 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <img src={hovered ? item.hoverIcon : item.icon} loading="lazy" className="w-15" alt={item.name} />
            </motion.div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 20, fontWeight: 600 }} className="mb-1">{item.name}</div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 16, fontWeight: 400 }}>{item.desc}</div>
        </div>
    )
}

const OnlineBookAdvertising = () => {
    return (
        <div>
            <Autopopup />
            <SEO
                title="Online Book Advertising Programs | Glastonbury Publications"
                description="Maximize your book's visibility with our proven online advertising programs. From Amazon Ads to social media campaigns, we get your book in front of the right readers."
                keyword="online book advertising, book ads, Amazon book ads, book marketing"
                focusKeyword="Online Book Advertising Programs"
            />
            <UpperHeader />
            <HeroSection
                welcomeText=""
                title="Get Your Book Seen by Millions"
                description1="Stop waiting for readers to find your book — bring your book to them. Our data-driven online advertising programs are designed specifically for authors, connecting your title with the right audience on the platforms where readers spend their time."
                linkText=""
                linkUrl=""
                description2=""
                listItems={[
                    "Targeted ad campaigns on Amazon, Google, Facebook, and Instagram.",
                    "Genre-specific audience targeting to reach your ideal readers.",
                    "Professionally crafted ad creatives that drive clicks and sales.",
                    "Detailed performance reports with ongoing campaign optimization.",
                ]}
            />
            <Servicescontent
                whyChooseUsText="Online Book Advertising Programs"
                mainHeading="Data-Driven Advertising That Puts Your Book in Front of Ready-to-Buy Readers"
                description="In today's digital world, the most successful books aren't just well-written — they're well-marketed. Our online book advertising programs combine creative storytelling with performance marketing to put your book in front of readers who are actively looking for their next great read. We manage campaigns across Amazon Sponsored Ads, Google, Facebook, Instagram, Goodreads, and BookBub — optimizing every dollar to maximize your reach and return on investment."
                image="/images/Online-Book-Advertising-Programs.png"
            />
            <Ctasection />

            {/* Advertising Platforms Section */}
            <section className="w-full bg-white py-20 px-4 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500 }} className="mb-2">Where We Advertise Your Book</p>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, fontWeight: 700 }} className="mb-4">Six Powerful Platforms, One Focused Strategy</h2>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 16, color: '#555' }} className="max-w-2xl mx-auto">We spread your campaign across the platforms that matter most — so your book reaches readers wherever they discover their next favorite title.</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        {adPlatforms.map((item, i) => <AdPlatformCard key={i} item={item} />)}
                    </motion.div>
                </div>
            </section>

            <Section4 />
            <WhyChooseUsSection
                leftImage="/images/online-advertising.jpeg"
                leftGif={null}   
                leftImageClass="w-full object-contain h-full rounded-lg"
                whyChooseUsText="Why Choose Our Advertising Programs?"
                mainHeading="Advertising That Delivers Real Results for Authors"
                description="Our advertising programs are built exclusively for authors and publishers. We combine platform expertise, creative storytelling, and performance data to ensure every campaign drives real, measurable book sales."
                features={[
                    {
                        title: "Multi-Platform Reach",
                        description: "We run your ads across every major platform where readers discover books — from Amazon and Google to Goodreads and BookBub.",
                        icon: "/images/Global Distribution.webp",
                        hoverIcon: "/images/Global Distributionw.webp",
                    },
                    {
                        title: "Maximize Your Ad Budget",
                        description: "Every dollar is tracked and optimized. We continuously refine your campaigns to lower cost-per-click and increase your return on every dollar spent.",
                        icon: "/images/ROI.webp",
                        hoverIcon: "/images/ROIw.webp",
                    },
                    {
                        title: "Expert Creative Team",
                        description: "Our team writes and designs all your ad creatives — compelling copy, eye-catching visuals, and strong calls-to-action that turn browsers into buyers.",
                        icon: "/images/Comprehensive.webp",
                        hoverIcon: "/images/Comprehensivew.webp",
                    },
                ]}
            />
            <NeedHelpSection
                faqs={[
                    {
                        question: "Which advertising platform is best for my book?",
                        answer: "The best platform depends on your genre, budget, and target audience. We assess all factors and recommend the ideal mix — often Amazon Ads combined with social media for maximum reach.",
                    },
                    {
                        question: "How much do online book ads cost?",
                        answer: "We offer flexible advertising packages to suit a range of budgets. Our team optimizes every dollar to ensure the best possible return on your investment.",
                    },
                    {
                        question: "How quickly will I see results?",
                        answer: "Many authors see measurable results within the first 1–2 weeks. Campaigns continue to improve as our team gathers data and optimizes performance over time.",
                    },
                    {
                        question: "Do I need a big following to advertise my book?",
                        answer: "Not at all. Our advertising programs are designed to build visibility from scratch, making them perfect for debut authors and established writers alike.",
                    },
                    {
                        question: "Will you manage everything for me?",
                        answer: "Yes. We handle campaign setup, creative design, monitoring, optimization, and reporting — so you can focus entirely on writing.",
                    },
                ]}
            />
            <TestimonialCarousel />
            <Footer />
        </div>
    )
}

export default OnlineBookAdvertising