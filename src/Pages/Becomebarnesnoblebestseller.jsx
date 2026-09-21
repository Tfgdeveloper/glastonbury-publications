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
const bnAdvantages = [
    { title: 'A Premium Reader Demographic', desc: 'Barnes & Noble customers skew older, more affluent, and deeply loyal — a valuable audience distinctly different from Amazon shoppers and worth reaching separately.', icon: '/images/Consultation & Author Coaching.webp', hoverIcon: '/images/Consultation & Author Coachingw.webp' },
    { title: 'Physical In-Store Visibility', desc: 'A B&N bestseller opens the door to physical placement in retail stores across America — putting your book in the hands of millions of brick-and-mortar shoppers.', icon: '/images/Global Distribution.webp', hoverIcon: '/images/Global Distributionw.webp' },
    { title: 'Nook Digital Reach', desc: "Barnes & Noble's Nook platform gives you access to a dedicated community of digital readers who prefer B&N's ecosystem over Kindle — largely untapped by most authors.", icon: '/images/E-book & Audiobook Publishing.webp', hoverIcon: '/images/E-book & Audiobook Publishingw.webp' },
    { title: 'Media & Press Recognition', desc: 'Many book reviewers, journalists, and media outlets specifically reference Barnes & Noble rankings as a mark of literary credibility and genuine reader demand.', icon: '/images/Marketing & Promotion.webp', hoverIcon: '/images/Marketing & Promotionw.webp' },
    { title: 'Distinct from Amazon', desc: 'Achieving bestseller status on both Amazon and Barnes & Noble doubles your credibility and signals broad, cross-platform appeal to the entire publishing industry.', icon: '/images/Publishing Solutions.webp', hoverIcon: '/images/Publishing Solutionsw.webp' },
    { title: 'B&N Editorial Opportunities', desc: 'A strong B&N performance can attract attention from the editorial team, potentially leading to newsletter features, website spotlights, and additional promotions.', icon: '/images/Cover Design & Layout.webp', hoverIcon: '/images/Cover Design & Layoutw.webp' },
]

const BNAdvantageCard = ({ item }) => {
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

const BecomeBarnesNobleBestseller = () => {
    return (
        <div>
            <Autopopup />
            <SEO
                title="Become A Barnes & Noble Bestselling Author | Glastonbury Publications"
                description="Achieve Barnes & Noble Bestseller status with our expert launch strategy. Reach a premium readership, gain in-store visibility, and build lasting author credibility."
                keyword="Barnes Noble bestseller, B&N bestselling author, book launch strategy"
                focusKeyword="Become A Barnes & Noble Bestselling Author"
            />
            <UpperHeader />
            <HeroSection
                welcomeText=""
                title="Become a Barnes & Noble Bestselling Author"
                description1="Barnes & Noble is America's most trusted bookstore. Achieving bestseller status here places your book in front of millions of dedicated readers and signals to the publishing world that your work is the real deal. We make it happen."
                linkText=""
                linkUrl=""
                description2=""
                listItems={[
                    "Full Barnes & Noble listing optimization for maximum discoverability.",
                    "Coordinated launch week sales campaign to climb the B&N charts.",
                    "In-store promotion strategy for retail placement across the USA.",
                    "Nook eBook optimization to reach B&N's digital reader community.",
                ]}
            />
            <Servicescontent
                whyChooseUsText="Become A Barnes & Noble Bestselling Author"
                mainHeading="Stand on the Shelves of America's Most Beloved Bookstore"
                description="There is something uniquely powerful about seeing your book on a Barnes & Noble shelf. It signals to every reader, every journalist, and every publisher that you have arrived. Barnes & Noble customers represent a distinct, loyal, and often more affluent readership — making B&N bestseller status a uniquely valuable achievement that complements and extends beyond what Amazon alone can offer."
                image="/images/Become-A-Barnes-&-Noble-Bestselling-Author.png"
            />
            <Ctasection />

            {/* Why B&N Is Different */}
            <section className="w-full bg-white py-20 px-4 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 500 }} className="mb-2">Why Barnes & Noble Is Different</p>
                        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, fontWeight: 700 }} className="mb-4">Six Reasons B&N Bestseller Status Is Worth Pursuing</h2>
                        <p style={{ fontFamily: 'Lora, serif', fontSize: 16, color: '#555' }} className="max-w-2xl mx-auto">Barnes & Noble isn't just another sales channel — it's a completely different audience, a different credibility signal, and opportunities that Amazon simply cannot provide.</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        {bnAdvantages.map((item, i) => <BNAdvantageCard key={i} item={item} />)}
                    </motion.div>
                </div>
            </section>

            <Section4 />
            <WhyChooseUsSection
                leftImage="/images/2.jpeg"
                leftGif={null}
                leftImageClass="w-full h-full rounded-lg"
                whyChooseUsText="Why Barnes & Noble Bestseller Status?"
                mainHeading="A Different Audience, A Different Level of Prestige"
                description="Barnes & Noble bestseller status carries a unique prestige that is distinctly different from Amazon. B&N readers are among the most loyal and discerning book buyers in America, and earning their recognition opens doors that other platforms simply cannot."
                features={[
                    {
                        title: "Access a Premium Readership",
                        description: "Barnes & Noble customers are dedicated book lovers who visit specifically to discover quality titles. Bestseller status puts your book directly in their path.",
                        icon: "/images/Comprehensive.webp",
                        hoverIcon: "/images/Comprehensivew.webp",
                    },
                    {
                        title: "In-Store Visibility",
                        description: "A B&N bestseller can lead to physical placement in retail stores across America — the kind of brick-and-mortar visibility that digital platforms simply cannot provide.",
                        icon: "/images/Global Distribution.webp",
                        hoverIcon: "/images/Global Distributionw.webp",
                    },
                    {
                        title: "Media & Press Recognition",
                        description: "Many reviewers, journalists, and media outlets specifically reference Barnes & Noble rankings as a mark of literary credibility and genuine reader demand.",
                        icon: "/images/ROI.webp",
                        hoverIcon: "/images/ROIw.webp",
                    },
                ]}
            />
            <NeedHelpSection
                faqs={[
                    {
                        question: "Is Barnes & Noble bestseller status different from Amazon?",
                        answer: "Yes. They are separate achievements with separate audiences, ranking systems, and credibility. Many of our authors pursue both simultaneously as part of a comprehensive launch strategy.",
                    },
                    {
                        question: "Can indie and self-published authors achieve B&N bestseller status?",
                        answer: "Absolutely. Barnes & Noble's platform is fully accessible to independent and self-published authors, and we specialize in helping non-traditionally published authors compete and win.",
                    },
                    {
                        question: "Do I need physical distribution to sell on B&N?",
                        answer: "No. We can help you sell both digitally on the Nook platform and in print through B&N's website. Physical in-store placement is a separate component we pursue as part of certain packages.",
                    },
                    {
                        question: "How is your B&N strategy different from your Amazon strategy?",
                        answer: "B&N has different category structures, algorithm factors, and promotional opportunities. We tailor our strategy specifically for each platform to maximize your results on both.",
                    },
                    {
                        question: "How long does the B&N launch process take?",
                        answer: "Our full Barnes & Noble bestseller launch program typically spans 6–8 weeks from your initial strategy session through to launch day execution and post-launch support.",
                    },
                ]}
            />
            <TestimonialCarousel />
            <Footer />
        </div>
    )
}

export default BecomeBarnesNobleBestseller