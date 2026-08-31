import React from 'react'
import UpperHeader from '../Components/Header'
import Termshero from '../Components/Termshero'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import Autopopup from "../Components/Autopopup";
const Return = () => {
  return (
    <div>
      <Autopopup />
      <SEO 
        title="Return & refund | Glastonbury Publications" 
        description="Review the Return And Refund for using Glastonbury Publications’ website, services, and content. We will make your dream came true." 
        keyword="Return & refund"
        focusKeyword="Return & refund"
        />
      <UpperHeader/>
      <Termshero
      title = "Return & Refund Policy"
      />
      <div className="bg-[#f6f6f6] mx-auto px-5 lg:px-20 py-8">
       
       <section className="mb-2">
       
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          Please read and understand the following terms carefully to avoid any misunderstanding of the terms regarding the Glastonbury Publications refund policy. If you still have any confusion regarding the refund policy you can contact our customer services representative and discuss the policy. We advise you to be sure about the refund terms and conditions if you have any confusion in this regard. We offer refunds only in special cases and specified conditions, detailed as under:

If approved, all purchases above $15,000 will be refunded in equal monthly installments of $5000.
        </p>
        
      </section>
       <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">Full Refund</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
         With Glastonbury Publications you may avail of the option of a full refund. We value our clients and try all possible ways to assist them. If the work on your project has started and you somehow need to stop or claim refund you can discuss the status of your work with our support team member to assist you further. The support and assistance will help you provide current work status and the option you may have in the given situation.
        </p>
        
      </section>
       <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">CHANGE OF MIND:</h2>
        <ul className=" list-disc pl-10 text-[16px] text-black-600">
            <li className="mb-2">If (for any reason) you change your mind and decide against continuing your project with us after placing your order, you can ask for a refund within the first hour of placing your order. A 60% processing fee will be charged in other cases.</li>
            
        </ul>
        
      </section>
       <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">INCOMPETENT DELIVERY:</h2>
        <ul className=" list-disc pl-10 text-[16px] text-black-600">
            <li className="mb-2">Once the work is delivered, customers are only entitled to claim a refund once they have exhausted all the options detailed as under;</li>
            <li className="mb-2">If it does not comply with project requirements (as requested/documented by the customer). We are committed to provide our customers with 100% satisfaction and offer unlimited revisions to ensure that the delivery is up to the mark. We assign, re-assign and re-write your work to ensure complete satisfaction.</li>
            <li className="mb-2">Reserve FREE Pages for future, but of same value and you can avail them at any time.</li>
        </ul>
        <p className="text-[18px] text-black-600 leading-relaxed mb-4">
         If we’re still not able to deliver what you asked for, refund will be processed with a mutual agreement on a set percentage (but only in the cases where the delivery is completely off the mark)
        </p>
        
      </section>
    <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">REFUND TIME FRAME:</h2>
        <ul className=" list-disc pl-10 text-[16px] text-black-600">
            <li className="mb-2">Refunds must be claimed within 30 days of delivery. Refunds claimed after the set time frame will not be entertained.</li>
             <li className="mb-2">All the customers must note the deadline for claiming refund at the time of placing order.</li>
            
        </ul>
        
      </section>
      <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">CASES WHERE REFUND WILL NOT BE ISSUED:</h2>
        <ul className=" list-disc pl-10 text-[16px] text-black-600">
            <li className="mb-2">In case of late delivery due to some minor technical errors, such as grammatical, typing, word count, missing references etc., refunds will be processed with mutual agreement and the company will only settle with partial refund or discounts reserved for future purchases.</li>
            <li className="mb-2">The company will not be responsible for any delay from the client’s end.</li>
            <li className="mb-2">No refund will be issued on the basis of low writing.</li>
            <li className="mb-2">For book marketing/publishing projects, no refund will be issued if the client is unable to provide access to either their book stores (Amazon, Barnes & Noble etc.) or their social media channels which helps our team to maximize reach, engagement and sales.</li>
            
        </ul>
        
      </section>
      </div>
      <Footer/>

    </div>
  )
}

export default Return
