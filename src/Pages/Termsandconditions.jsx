import React from 'react'
import UpperHeader from '../Components/Header'
import Termshero from '../Components/Termshero'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import Autopopup from "../Components/Autopopup";
const Termsandconditions = () => {
  return (
    <div>
      <Autopopup />
      
      <SEO 
        title="Terms & Conditions | Glastonbury Publications" 
        description="Review the terms and conditions for using Glastonbury Publications’ website, services, and content. We will make your dream came true." 
        keyword="Terms & Conditions"
        focusKeyword="Terms & Conditions"
        />
      <UpperHeader/>
      <Termshero
      title = "Terms And Conditions"
      />
      <div className="bg-[#f6f6f6] mx-auto px-5 lg:px-20 py-8">
        <p className="text-[16px] text-black-600 leading-relaxed mb-4">
          When you complete an order placement with us i.e. you make the payment, then you are considered to have read, understood, and agreed to the terms and conditions listed on this page. These terms are a legal contract between the client and Glastonbury Publications. By agreeing to order and use the services from Glastonbury Publications you are deemed to be bound by the terms which as stated as follows.
        </p>
      <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">We Deliver Original Content Only</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-4">
         We guarantee you plagiarism-free content. To ensure that content is original we provide you with a Copyscape report. (Note: Any text contained in images, videos, or other media, that search engines can’t read will not be scanned by Copyscape.) You may go for more comprehensive and deeper plagiarism checks than Copyscape by yourself because we do not cover such services at our standard prices. You can be sure of the work you get from Glastonbury Publications in terms of its originality.
        </p>
        <ul className=" list-disc pl-10 text-[16px] text-black-600">
            <li className="mb-2">To personalize your experience – your information helps us better respond to your individual needs.</li>
            <li className="mb-2">To improve our website – we continually strive to improve our website offerings based on the information and feedback we receive from you.</li>
            <li className="mb-2">To improve customer service – your information helps us effectively respond to your customer service requests and support needs.</li>
            <li className="mb-2">To process transactions – your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.</li>
            <li className="mb-2">To send periodic emails – the email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions.</li>       
        </ul>
      </section>
      <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">We Deliver Content With Complete Ownership</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          Every single order you place and pay for becomes your property when submitted to you. We do not ask you for acknowledgments or require you by any means to mention us or our services for the work. With every complete order, you get complete ownership of the content. You will have to publish the content under your name and/or will be able to utilize the content the way you desire.
        </p>
        
        
      </section>
      <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">How do we protect your information?</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          The moment you place an order or enter, or submit any of your personal information we implement security measures at all levels to maintain the safety of your personal information. By using SSL, we ensure the security and confidentiality of every piece of information you share with us. After the completion of a transaction, we do not store any of your private information (credit cards, social security numbers, financials, etc.) in our database.
        </p>
        
        
      </section>
     <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">Why do we use cookies?</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
         We use cookies to keep track of advertisements and compile aggregate data about site traffic and site interactions. It enables us to offer better site experiences and tools to the users. If required, we may seek services from a third party to assist us in understanding the behavior of visitors. However, third-party service providers are not allowed to use the collected information except for the sole purpose of customers analysis.
         </p>
        
        
      </section>
      <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">Our Policy For Using Images</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          We believe in abiding by the rules and maintaining our credibility for the long term both with the clients and in the market. We do not own the copyright of images, hence we do not use copyrighted images by ourselves. We will simply provide you a link to recommended images so you can copy and paste them by yourself. Besides, these links can help you have an idea of the images that may suit the content. Otherwise, you may use royalty-free images without any worry. However, for copyrighted images, you may be required to pay the owner(s).
        </p>
        
        
      </section>
       <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">Limitation Of Liability</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          The users are advised to take into consideration this clause carefully. We, Glastonbury Publications, with this declare that under any circumstances we shall not be liable for any direct or indirect loss claimed by our customer(s) to have resulted from the use of our website or services/products sold through our website. This disclaimer also applies to any viruses that may allegedly be obtained by using our website/products and may have caused any type of material or reputational loss. We shall, in no event, be liable for any liability or loss that may result from the inability or ability of the user of our website/products.
        </p>
        
      </section>
       <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">We Update Our Policies</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          This privacy policy is subject to change; hence, you are required to visit our policy page from time to time to see if there is an update. The policy changes are not subject to any prior notice and time frame.
        </p>
        
      </section>
  
      </div>
      <Footer/>

    </div>
  )
}

export default Termsandconditions
