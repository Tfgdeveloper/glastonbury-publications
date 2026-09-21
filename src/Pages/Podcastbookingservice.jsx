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
const processSteps = [
    { step: '01', title: 'Strategy & Genre Matching', desc: 'We start with a deep-dive call to understand your book, expertise, and goals — then identify the exact podcast genres and audience profiles that match.', icon: '/images/Consultation & Author Coaching.webp', hoverIcon: '/images/Consultation & Author Coachingw.webp' },
    { step: '02', title: 'Media Kit Creation', desc: 'Our team crafts a professional author media kit with your bio, book summary, talking points, and interview questions that make hosts excited to book you.', icon: '/images/Cover Design & Layout.webp', hoverIcon: '/images/Cover Design & Layoutw.webp' },
    { step: '03', title: 'Personalized Pitching', desc: "We write and send personalized pitch emails to carefully selected podcasts — tailored pitches that speak directly to each host's audience.", icon: '/images/Marketing & Promotion.webp', hoverIcon: '/images/Marketing & Promotionw.webp' },
    { step: '04', title: 'Booking & Scheduling', desc: 'Once a host says yes, we coordinate all scheduling, logistics, and prep details so you never manage back-and-forth communication yourself.', icon: '/images/Publishing Solutions.webp', hoverIcon: '/images/Publishing Solutionsw.webp' },
    { step: '05', title: 'Pre-Interview Coaching', desc: 'Before each appearance we brief you with talking points and story angles for delivering a memorable interview that drives listeners to your book.', icon: '/images/Ghost writing.webp', hoverIcon: '/images/Ghost writingw.webp' },
    { step: '06', title: 'Post-Appearance Follow-Up', desc: 'After every episode we send thank-you notes, repurpose your interview clips for social media, and track the sales impact of each appearance.', icon: '/images/Global Distribution.webp', hoverIcon: '/images/Global Distributionw.webp' },
]

const ProcessStepCard = ({ s }) => {
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

const PodcastBookingService = () => {
    return (
        <div>
            <Autopopup />
            <SEO
                title="Podcast Booking Service for Authors & Entrepreneurs | Glastonbury Publications"
                description="Get booked on top podcasts and share your story with millions of listeners. Our podcast booking service connects authors and entrepreneurs with the right shows."
                keyword="podcast booking for authors, podcast guest booking, author podcast interviews"
                focusKeyword="Podcast Booking Service for Authors"
            />
            <UpperHeader />
            <HeroSection
                welcomeText=""
                title="Share Your Story With Millions of Listeners"
                description1="Your story deserves to be heard. We book you on the right podcasts so you can share your expertise, build your audience, and sell more books — one powerful conversation at a time."
                linkText=""
                linkUrl=""
                description2=""
                listItems={[
                    "Access to a network of 10,000+ active podcasts across every genre.",
                    "Done-for-you pitching, scheduling, and host communication.",
                    "Professional media kit creation to make a lasting impression.",
                    "Pre-interview coaching so you show up confident and prepared.",
                ]}
            />
            <Servicescontent
                whyChooseUsText="Podcast Booking Service for Authors & Entrepreneurs"
                mainHeading="One Podcast Appearance Can Introduce Your Book to Thousands of New Readers"
                description="Podcast listeners are among the most engaged, loyal, and book-buying audiences on the planet. A single episode on the right show can introduce your book to thousands of ideal readers, generate reviews, and create a lasting wave of sales. Our podcast booking service does all the heavy lifting — identifying the right shows, crafting personalized pitches, securing confirmed bookings, and coaching you for every appearance so every conversation counts."
                image="/images/Podcast-Booking-Service-for-Authors-&-Entrepreneurs.png"
            />
            <Ctasection />

            {/* Our 6-Step Podcast Process */}
            <section className="w-full bg-white py-20 px-4 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500 }} className="mb-2">How We Do It</p>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, fontWeight: 700 }} className="mb-4">Our End-to-End Podcast Booking Process</h2>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 16, color: '#555' }} className="max-w-2xl mx-auto">From strategy to post-interview follow-up, we manage every single step so all you have to do is show up and tell your story.</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        {processSteps.map((s, i) => <ProcessStepCard key={i} s={s} />)}
                    </motion.div>
                </div>
            </section>

            <Section4 />
            <WhyChooseUsSection
                leftImage="/images/7.jpeg"
                leftGif={null}
                leftImageClass="w-full h-full rounded-lg"
                whyChooseUsText="Why Podcasts Work for Authors"
                mainHeading="Podcast Listeners Are the Most Loyal Book Buyers on the Planet"
                description="Over 100 million Americans listen to podcasts every month. These audiences are highly engaged, trust their hosts, and act on recommendations — making podcast appearances one of the highest-converting marketing channels available to authors today."
                features={[
                    {
                        title: "Massive Targeted Reach",
                        description: "We match you with podcasts whose listeners already love your genre and topic — putting your book in front of the most relevant audience possible.",
                        icon: "/images/Global Distribution.webp",
                        hoverIcon: "/images/Global Distributionw.webp",
                    },
                    {
                        title: "Done-For-You Service",
                        description: "We handle every step from research and pitching to scheduling, media kit creation, and pre-interview coaching. You just show up and share your story.",
                        icon: "/images/time.webp",
                        hoverIcon: "/images/timew.webp",
                    },
                    {
                        title: "Long-Term Sales Impact",
                        description: "Podcast episodes live online forever. A great appearance continues driving traffic to your book page and generating sales for months and years after it airs.",
                        icon: "/images/ROI.webp",
                        hoverIcon: "/images/ROIw.webp",
                    },
                ]}
            />
            <NeedHelpSection
                faqs={[
                    {
                        question: "What kinds of podcasts will you book me on?",
                        answer: "We target podcasts that align with your book's genre and your personal expertise — covering categories like business, self-help, memoir, fiction, health, parenting, spirituality, and many more.",
                    },
                    {
                        question: "How many podcast bookings are included?",
                        answer: "Our packages range from 5 to 25+ confirmed podcast bookings depending on your goals and budget. We also offer custom packages for major book launches.",
                    },
                    {
                        question: "Do I need previous podcast experience?",
                        answer: "No experience needed. We provide pre-interview coaching to help you feel confident, tell your story effectively, and make every appearance count.",
                    },
                    {
                        question: "How soon can I start appearing on podcasts?",
                        answer: "Most authors receive their first confirmed booking within 2–3 weeks of starting the program, with appearances typically beginning within 4–6 weeks.",
                    },
                    {
                        question: "Can this help with my book launch?",
                        answer: "Absolutely. We offer dedicated launch podcast campaigns timed to build buzz before, during, and after your book release date.",
                    },
                ]}
            />
            <TestimonialCarousel />
            <Footer />
        </div>
    )
}

export default PodcastBookingService