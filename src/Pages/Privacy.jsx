import React from 'react'
import UpperHeader from '../Components/Header'
import Termshero from '../Components/Termshero'
import Footer from '../Components/Footer'
import SEO from '../Components/SEO'
import Autopopup from "../Components/Autopopup";
const Privacy = () => {
  return (
    <div>
      <Autopopup />
      <SEO 
        title="Privacy Policy | Glastonbury Publications" 
        description="Learn how Glastonbury Publications protects your data. Read our clear, secure, and transparent privacy policy." 
        keyword="Privacy Policy"
        focusKeyword="Privacy Policy"
        />
      <UpperHeader/>
      <Termshero
      title = "Privacy Policy"
      />
    <div className="bg-[#f6f6f6] mx-auto px-5 lg:px-20 py-8">
        <p className="text-[16px] text-black-600 leading-relaxed mb-4">
          We collect information from you when you register on our site, place an order,
           subscribe to our newsletter, or fill out a form.When ordering or registering on our site,
            as appropriate, you may be asked to enter your name, e-mail address, mailing address,
             phone number, or credit card information. You may, however, visit our site anonymously.
        </p>
      <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">What do we use your information for?</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-4">
          The information we collect from you may be used in one of the following ways:
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
        <h2 className="text-[28px] font-bold text-black-700 mb-4">How do we protect your information?</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
        </p>
        <p className="text-[18px] text-black-600 leading-relaxed mb-4">
          We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.
After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.
        </p>
        
      </section>
      <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">Do we use cookies?</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          Yes. Cookies are small files that a site or its service provider transfers to your computer’s hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information.
        </p>
        <p className="text-[18px] text-black-600 leading-relaxed mb-4">
         We use cookies to keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third- party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.
        </p>
        
      </section>
     <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">Do we disclose any information to outside parties?</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
        </p>
        
        
      </section>
      <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">Third party links</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          Occasionally, at our discretion, we may include or offer third party products or services on our website.

These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
        </p>
        
        
      </section>
       <section className="mb-2">
        <h2 className="text-[28px] font-bold text-black-700 mb-4">Online privacy policy only</h2>
        <p className="text-[18px] text-black-600 leading-relaxed mb-0">
          This online privacy policy applies only to information collected through our website and not to information collected offline.
        </p>
        
      </section>

    </div>
<Footer/>
    </div>
  )
}

export default Privacy
