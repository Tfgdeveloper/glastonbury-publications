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
import Ctasection from '../Components/Ctasection'
import VideoCarousel from '../Components/Timesquare'
import Portfoliosection from '../Components/Portfoliosection'
import Autopopup from "../Components/Autopopup";
const socialPlatforms = [
    { name: 'Instagram & Reels', desc: 'Stunning visuals, carousels, and short-form reels that showcase your book and build a dedicated author following among avid readers.', icon: '/images/Marketing & Promotion.webp', hoverIcon: '/images/Marketing & Promotionw.webp' },
    { name: 'TikTok & BookTok', desc: 'Tap into the explosive BookTok community — the single most powerful organic book discovery platform for reaching new readers fast.', icon: '/images/E-book & Audiobook Publishing.webp', hoverIcon: '/images/E-book & Audiobook Publishingw.webp' },
    { name: 'Facebook', desc: 'Community-building posts, author events, and targeted content that grows your readership and drives consistent book sales.', icon: '/images/Publishing Solutions.webp', hoverIcon: '/images/Publishing Solutionsw.webp' },
    { name: 'X (Twitter)', desc: 'Connect with readers, journalists, and literary influencers through strategic posting and real-time engagement in book conversations.', icon: '/images/Global Distribution.webp', hoverIcon: '/images/Global Distributionw.webp' },
    { name: 'LinkedIn', desc: 'Ideal for non-fiction authors and entrepreneurs — build professional authority and reach a high-value, career-minded readership.', icon: '/images/Consultation & Author Coaching.webp', hoverIcon: '/images/Consultation & Author Coachingw.webp' },
    { name: 'Pinterest', desc: 'Inspirational boards and visual content that drive long-term evergreen traffic to your book pages and author website.', icon: '/images/Cover Design & Layout.webp', hoverIcon: '/images/Cover Design & Layoutw.webp' },
]

const SocialPlatformCard = ({ p }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className="rounded-lg p-5 flex flex-col items-start transition-all duration-300 cursor-pointer"
            style={{ background: hovered ? 'linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)' : '#f0f0f0', color: hovered ? '#fff' : '#000', justifyContent: 'space-between' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div className="mb-3" animate={{ y: hovered ? 10 : 0, scale: hovered ? 1.08 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <img src={hovered ? p.hoverIcon : p.icon} loading="lazy" className="w-15" alt={p.name} />
            </motion.div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 20, fontWeight: 600 }} className="mb-1">{p.name}</div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 16, fontWeight: 400 }}>{p.desc}</div>
        </div>
    )
}

const SocialMediaPublicist = () => {
    return (
        <div>
            <Autopopup />
            <SEO
                title="Social Media Publicist for Authors | Glastonbury Publications"
                description="Let our social media publicists build your author brand, grow your following, and sell more books across Instagram, TikTok, Facebook, and beyond."
                keyword="social media for authors, author social media management, BookTok marketing"
                focusKeyword="Social Media Publicist"
            />
            <UpperHeader />
            <HeroSection
                welcomeText=""
                title="Build Your Author Brand on Social Media"
                description1="Building a loyal readership on social media takes consistency, creativity, and strategy. Our dedicated social media publicists handle it all — so you can focus on writing while we build your audience and sell your books."
                linkText=""
                linkUrl=""
                description2=""
                listItems={[
                    "Full management of Instagram, Facebook, TikTok, X, and LinkedIn.",
                    "Custom content creation — captions, graphics, reels, and stories.",
                    "BookTok and Bookstagram influencer outreach for organic reach.",
                    "Dedicated launch week campaigns to maximize day-one sales.",
                ]}
            />
            <Servicescontent
                whyChooseUsText="Social Media Publicist"
                mainHeading="Consistent Social Media Presence Is the Key to a Lasting Author Career"
                description="Consistent social media presence is the number one factor separating authors who build lasting careers from those who fade after their first book. Our publicists post daily, engage with your community, and keep your name top of mind for readers. We manage your presence across all major platforms, create all content in your authentic voice, reach out to book influencers on your behalf, and deliver monthly analytics reports so you always know exactly how your brand is growing."
                image="/images/Social-Media-Publicist.png"
            />
            <Ctasection />

            {/* Platforms We Manage */}
            <section className="w-full bg-white py-20 px-4 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500 }} className="mb-2">Platforms We Manage</p>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, fontWeight: 700 }} className="mb-4">We Meet Your Readers Where They Already Are</h2>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 16, color: '#555' }} className="max-w-2xl mx-auto">Your readers spend hours every day on social media. We make sure your author brand shows up consistently on every platform that matters for your genre and audience.</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        {socialPlatforms.map((p, i) => <SocialPlatformCard key={i} p={p} />)}
                    </motion.div>
                </div>
            </section>

            <Section4 />
            <WhyChooseUsSection
                leftImage="/images/5.jpeg"
                leftGif={null}
                leftImageClass="w-full h-full rounded-lg"
                whyChooseUsText="Why Hire a Social Media Publicist?"
                mainHeading="Your Readers Are on Social Media — Your Brand Should Be Too"
                description="Over 4 billion people use social media every day. For authors, these platforms are the most powerful tools available for building direct reader relationships, generating word-of-mouth buzz, and driving consistent book sales."
                features={[
                    {
                        title: "Your Voice, Amplified",
                        description: "We learn your tone, style, and brand before creating a single post. Every piece of content sounds authentically like you — just without the time commitment.",
                        icon: "/images/Comprehensive.webp",
                        hoverIcon: "/images/Comprehensivew.webp",
                    },
                    {
                        title: "Influencer & BookTok Reach",
                        description: "We connect your book with bookstagrammers, BookTok creators, and literary influencers to generate organic buzz that no paid ad can replicate.",
                        icon: "/images/Global Distribution.webp",
                        hoverIcon: "/images/Global Distributionw.webp",
                    },
                    {
                        title: "Launch Campaign Expertise",
                        description: "Our launch week campaigns are built to create maximum excitement, drive pre-orders, and ensure your book releases with real momentum.",
                        icon: "/images/ROI.webp",
                        hoverIcon: "/images/ROIw.webp",
                    },
                ]}
            />
            <NeedHelpSection
                faqs={[
                    {
                        question: "Which social platforms should I be on as an author?",
                        answer: "It depends on your genre and audience. We recommend Instagram and Facebook for most authors, and TikTok for fiction writers. We help you choose the right platforms during your strategy session.",
                    },
                    {
                        question: "Will the posts sound like me?",
                        answer: "Absolutely. We take time to learn your voice, style, and brand before creating any content. Every post will feel authentic and genuinely like you.",
                    },
                    {
                        question: "How many posts do you make per week?",
                        answer: "Our packages range from 3 posts per week up to daily posting across multiple platforms, depending on your goals and budget.",
                    },
                    {
                        question: "Can you help with a book launch campaign?",
                        answer: "Yes. We offer dedicated book launch packages that include a full pre-launch buildup, launch week content blitz, and post-launch momentum strategy.",
                    },
                    {
                        question: "Do you handle comments and messages too?",
                        answer: "Yes. Our full-service packages include community management — responding to comments, engaging with followers, and building genuine reader relationships on your behalf.",
                    },
                ]}
            />
            <TestimonialCarousel />
            <Footer />
        </div>
    )
}

export default SocialMediaPublicist