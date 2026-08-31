import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import UpperHeader from '../Components/Header'
import HeroSection from '../Components/Hero'
import Ctasection from '../Components/Ctasection'
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
const websiteFeatures = [
    { title: 'Custom Design', desc: 'Built around your author brand — not a generic template. Every element reflects your unique voice, genre, and style.', icon: '/images/Cover Design & Layout.webp', hoverIcon: '/images/Cover Design & Layoutw.webp' },
    { title: 'Book Showcase Pages', desc: 'Dedicated pages for each of your titles with cover images, descriptions, buy buttons, and reader reviews.', icon: '/images/Publishing Solutions.webp', hoverIcon: '/images/Publishing Solutionsw.webp' },
    { title: 'Email List Integration', desc: 'Built-in newsletter signup forms connected to your email platform to grow your reader list from day one.', icon: '/images/Marketing & Promotion.webp', hoverIcon: '/images/Marketing & Promotionw.webp' },
    { title: 'SEO Optimized', desc: 'Every page is optimized for Google so new readers can find you when searching for authors in your genre.', icon: '/images/Global Distribution.webp', hoverIcon: '/images/Global Distributionw.webp' },
    { title: 'Blog & Events Section', desc: 'Keep readers engaged with a built-in blog and events calendar to announce appearances and boost search rankings.', icon: '/images/Ghost writing.webp', hoverIcon: '/images/Ghost writingw.webp' },
    { title: 'Mobile Responsive', desc: 'Your site looks stunning and works perfectly on every device — desktop, tablet, and mobile.', icon: '/images/E-book & Audiobook Publishing.webp', hoverIcon: '/images/E-book & Audiobook Publishingw.webp' },
    { title: 'Fast & Secure Hosting', desc: 'We handle hosting, security, and performance so your site loads fast and stays protected around the clock.', icon: '/images/Consultation & Author Coaching.webp', hoverIcon: '/images/Consultation & Author Coachingw.webp' },
    { title: 'Ongoing Support', desc: 'Post-launch support to update content, add new books, and keep your site fresh as your career grows.', icon: '/images/Custom Services.webp', hoverIcon: '/images/Custom Servicesw.webp' },
]

const WebsiteFeatureCard = ({ f }) => {
    const [hovered, setHovered] = useState(false)
    return (
        <div
            className="rounded-lg p-5 flex flex-col items-start transition-all duration-300 cursor-pointer"
            style={{ background: hovered ? 'linear-gradient(270deg, #2B6781 0%, #31552F 99.09%)' : '#f0f0f0', color: hovered ? '#fff' : '#000', justifyContent: 'space-between' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <motion.div className="mb-3" animate={{ y: hovered ? 10 : 0, scale: hovered ? 1.08 : 1 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <img src={hovered ? f.hoverIcon : f.icon} loading="lazy" className="w-15" alt={f.title} />
            </motion.div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 20, fontWeight: 600 }} className="mb-1">{f.title}</div>
            <div style={{ fontFamily: 'Lora, serif', fontSize: 16, fontWeight: 400 }}>{f.desc}</div>
        </div>
    )
}


const AuthorWebsiteDesign = () => {
    return (
        <div>
            <Autopopup />
            <SEO
                title="Author Website Design | Glastonbury Publications"
                description="Get a stunning, professional author website that showcases your books, builds your brand, and converts visitors into readers and buyers."
                keyword="author website design, book author website, professional author site"
                focusKeyword="Author Website Design"
            />
            <UpperHeader />
            <HeroSection
                welcomeText=""
                title="Your Digital Home as an Author"
                description1="Your website is your digital home — the one place online where you are completely in control of your story. We design stunning, conversion-focused author websites that grow your readership and sell your books around the clock."
                linkText=""
                linkUrl=""
                description2=""
                listItems={[
                    "Fully custom design built around your unique author brand.",
                    "Dedicated book showcase pages with descriptions and buy links.",
                    "SEO optimized so new readers can find you on Google.",
                    "Mobile responsive, fast, and secure — ready to launch.",
                ]}
            />
            <Servicescontent
                whyChooseUsText="Author Website Design"
                mainHeading="A Professional Author Website That Sells Your Books While You Write"
                description="While you focus on your next book, your website works 24/7 — attracting new readers, selling your backlist, and growing your email list. We build fully custom author websites designed to reflect your brand, showcase your titles, and convert every visitor into a reader or buyer. Every site includes professional design, book showcase pages, author bio section, blog capability, email list integration, and full search engine optimization — all handled by our team from design to launch."
                image="/images/Author-Website-Design.png"
            />
            <Ctasection />

            {/* Website Features Grid */}
            <section className="w-full bg-white py-20 px-4 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500 }} className="mb-2">What's Included</p>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, fontWeight: 700 }} className="mb-4">Everything Your Author Website Needs</h2>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 16, color: '#555' }} className="max-w-2xl mx-auto">Every author website we build comes packed with the features that matter most for growing your readership and selling more books.</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        {websiteFeatures.map((f, i) => <WebsiteFeatureCard key={i} f={f} />)}
                    </motion.div>
                </div>
            </section>

            <Section4 />
            <WhyChooseUsSection
                leftImage="/images/6.jpeg"
                leftGif={null}
                leftImageClass="w-full h-full rounded-lg"
                whyChooseUsText="Why Every Author Needs a Website"
                mainHeading="Your Website Is the Only Online Space You Truly Own and Control"
                description="Social media platforms change their algorithms overnight. Amazon controls its own listings. But your author website belongs to you — it's the permanent home base for your brand, your books, and your reader relationships."
                features={[
                    {
                        title: "Custom Design, Your Brand",
                        description: "Every website we build is designed specifically for you — not a generic template. Your site reflects your unique voice, genre, and author identity.",
                        icon: "/images/Cover Design & Layout.webp",
                        hoverIcon: "/images/Cover Design & Layoutw.webp",
                    },
                    {
                        title: "Built to Sell Books",
                        description: "Strategic placement of book pages, buy buttons, and reader calls-to-action turns every site visitor into a potential buyer.",
                        icon: "/images/ROI.webp",
                        hoverIcon: "/images/ROIw.webp",
                    },
                    {
                        title: "SEO & Long-Term Visibility",
                        description: "Every page is search engine optimized from day one so readers searching for books in your genre can discover you organically on Google.",
                        icon: "/images/Global Distribution.webp",
                        hoverIcon: "/images/Global Distributionw.webp",
                    },
                ]}
            />
            <NeedHelpSection
                faqs={[
                    {
                        question: "How long does it take to build my author website?",
                        answer: "Most author websites are completed within 2–4 weeks depending on the package and content you provide. Rush timelines are available for upcoming book launches.",
                    },
                    {
                        question: "Do I need any technical knowledge?",
                        answer: "None at all. We handle everything — design, development, and setup. We also provide a simple tutorial so you can make basic updates yourself if you wish.",
                    },
                    {
                        question: "Can I add more books to my website later?",
                        answer: "Absolutely. All our websites are built to grow with your career. Adding new book pages and content is quick and easy.",
                    },
                    {
                        question: "Will my website show up on Google?",
                        answer: "Yes. Every website we build is optimized for search engines from day one, giving you the best possible chance of being discovered by new readers.",
                    },
                    {
                        question: "Can you redesign my existing author website?",
                        answer: "Yes. We offer full redesign services for authors who already have a website but want a more professional, modern, and conversion-focused result.",
                    },
                ]}
            />
            <TestimonialCarousel />
            <Footer />
        </div>
    )
}

export default AuthorWebsiteDesign