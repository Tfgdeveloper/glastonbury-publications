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
import { LiveChatWidget } from "@livechat/widget-react";
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

function App() {
  useEffect(() => {
  const openChat = () => {
    if (window.LiveChatWidget) {
      // Open chat after 1 second
      setTimeout(() => {
        window.LiveChatWidget.call("maximize");
      }, 1000);

      // Auto open again when agent sends message
      window.LiveChatWidget.on("new_event", (event) => {
        if (
          ["message", "rich_message", "file"].includes(event.type) &&
          event.author.type !== "customer"
        ) {
          window.LiveChatWidget.call("maximize");
        }
      });
    }
  };

  // If widget already loaded
  if (window.LiveChatWidget) {
    openChat();
  }

  // If widget loads later
  window.__lc = window.__lc || {};
  window.__lc.asyncInit = () => {
    openChat();
  };
}, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <LiveChatWidget license="19067595" />
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