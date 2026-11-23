import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";

import Publishingsolutions from "./Pages/Publishingsolutions";
import CoverdesignandLayout from "./Pages/CoverdesignandLayout";
import Marketingandpromotion from "./Pages/Marketingandpromotion";
import Ebookandaudiobookpublishing from "./Pages/Ebookandaudiobookpublishing";
import Globaldistribution from "./Pages/Globaldistribution";
import Booktranslation from "./Pages/Booktranslation";
import Ghostwriting from "./Pages/Ghostwriting";
import Bookdesignandformatting from "./Pages/Bookdesignandformatting";

import Privacy from "./Pages/Privacy";
import Termsandconditions from "./Pages/Termsandconditions";
import Thanyou from "./Pages/Thanyou";
import NotFound from "./Components/Notfound";

import ScrollToTop from "./Components/Scrollontop";
import Return from "./Pages/Return";
import Amazon from "./Pages/Landing/Amazon";
import Kobo from "./Pages/Landing/Kobo";
import Lulu from "./Pages/Landing/Lulu";
import AppleBooks from "./Pages/Landing/AppleBooks";
import Draft2Digital from "./Pages/Landing/Draft2Digital";
import IngramSpark from "./Pages/Landing/IngramSpark";
import Thankyou from "./Pages/Landing/Thanyou";
import Childs from "./Pages/Landing/Childs";

// Marketing Sub-Pages
import OnlineBookAdvertising from "./Pages/Onlinebookadvertising";
import AmazonAuthorPage from "./Pages/Amazonauthorpage";
import PodcastBookingService from "./Pages/Podcastbookingservice";
import AuthorWebsiteDesign from "./Pages/Authorwebsitedesign";
import SocialMediaPublicist from "./Pages/Socialmediapublicist";
import TimesSquareBookAnnouncement from "./Pages/Timessquarebookannouncement";
import BecomeAmazonBestseller from "./Pages/Becomeamazonbestseller";
import BecomeBarnesNobleBestseller from "./Pages/Becomebarnesnoblebestseller";
import Catalogue2026 from "./Pages/Catalogue2026";

const TAWK_SRC = "https://embed.tawk.to/6afcb2426714ba3cc376afde/1k7lhglsm";

function App() {
  useEffect(() => {
    // Set up Tawk API + callbacks before the script loads
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Open chat 1 second after the widget loads
    window.Tawk_API.onLoad = () => {
      setTimeout(() => {
        if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
          window.Tawk_API.maximize();
        }
      }, 1000);
    };

    // Auto open again when an agent sends a message
    window.Tawk_API.onChatMessageAgent = () => {
      if (window.Tawk_API && typeof window.Tawk_API.maximize === "function") {
        window.Tawk_API.maximize();
      }
    };

    // Inject the script only once (avoids duplicates in React StrictMode)
    if (!document.querySelector(`script[src="${TAWK_SRC}"]`)) {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = TAWK_SRC;
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      const s0 = document.getElementsByTagName("script")[0];
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        document.body.appendChild(s1);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/2026-catalogue" element={<Catalogue2026 />} />

        <Route path="/publishing-solutions" element={<Publishingsolutions />} />
        <Route path="/cover-design-and-layout" element={<CoverdesignandLayout />} />
        <Route path="/marketing-and-promotion" element={<Marketingandpromotion />} />
        <Route path="/ebook-and-audiobook-publishing" element={<Ebookandaudiobookpublishing />} />
        <Route path="/book-translation" element={<Booktranslation />} />
        <Route path="/global-distribution" element={<Globaldistribution />} />
        <Route path="/ghost-writing" element={<Ghostwriting />} />
        <Route path="/book-design-and-formatting" element={<Bookdesignandformatting />} />

        <Route path="/terms-and-conditions" element={<Termsandconditions />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-policy" element={<Return />} />
        <Route path="/thank-you" element={<Thanyou />} />

        <Route path="/publishing-services" element={<Amazon />} />
        <Route path="/kobo-publishing" element={<Kobo />} />
        <Route path="/lulu-publishing" element={<Lulu />} />
        <Route path="/apple-books-publishing" element={<AppleBooks />} />
        <Route path="/draft2digital-publishing" element={<Draft2Digital />} />
        <Route path="/ingram-spark-publishing" element={<IngramSpark />} />
        <Route path="/thank" element={<Thankyou />} />
        <Route path="/Childerns-book-publishing" element={<Childs />} />

        {/* Marketing Sub-Pages */}
        <Route path="/online-book-advertising-programs" element={<OnlineBookAdvertising />} />
        <Route path="/amazon-author-page" element={<AmazonAuthorPage />} />
        <Route path="/podcast-booking-service" element={<PodcastBookingService />} />
        <Route path="/author-website-design" element={<AuthorWebsiteDesign />} />
        <Route path="/social-media-publicist" element={<SocialMediaPublicist />} />
        <Route path="/times-square-book-announcement" element={<TimesSquareBookAnnouncement />} />
        <Route path="/become-amazon-bestselling-author" element={<BecomeAmazonBestseller />} />
        <Route path="/become-barnes-noble-bestselling-author" element={<BecomeBarnesNobleBestseller />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;