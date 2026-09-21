import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, BookOpen, ShoppingBag } from "lucide-react";

const AUTHORS = [
  {
    id: 1,
    name: "Donald Gordon Newman",
    genres: ["Fiction"],
    books: 4,
    photo: "/images/author/Donald Gordon Newman.png",
    amazonUrl: "https://www.amazon.com/MILLARD-Warrior-of-the-King/dp/B0GGR25KCS",
    bio: "Across four titles, Donald Gordon Newman presents a distinctive body of work shaped by his individual perspective, storytelling, and ideas.",
    longBio:
      "Across four titles, Donald Gordon Newman presents a body of work shaped by his individual perspective, storytelling, and ideas. His collection offers international publishing partners the opportunity to explore multiple works from a single author rather than an isolated title.",
    rights: {
      category: "Fiction",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      otherRights: "Enquire",
    },
    titles: [
      { title: "Protégé", description: "Synopsis available on enquiry.", cover: "/images/Book-Cover-Front/Protege.png" },
      { title: "Pilot", description: "Synopsis available on enquiry.", cover: "/images/Book-Cover-Front/Pilot.png" },
      { title: "Convict Son", description: "Synopsis available on enquiry.", cover: "/images/Book-Cover-Front/Convict-Son.png" },
      { title: "Living with Deuteronomy", description: "Synopsis available on enquiry.", cover: "/images/Book-Cover-Front/LivingWD.png" },
    ],
  },
  {
    id: 2,
    name: "Hans Paladini",
    genres: ["Urban Fantasy", "Paranormal"],
    books: 5,
    photo: "/images/author/Hans Paladini.png",
    amazonUrl: "https://www.amazon.com/stores/Hans-Paladini/author/B0H531GBQW",
    bio: "Hans Paladini brings action, supernatural crime, dark humor, and unconventional heroes together across interconnected series designed to keep readers returning to their worlds.",
    longBio:
      "Hans Paladini brings action, supernatural crime, dark humor, and unconventional heroes together across interconnected series designed to keep readers returning to their worlds. His catalogue spans two ongoing series — the Daywalker Saga and Willy Jones: Paranormal Reporter.",
    rights: {
      category: "Urban Fantasy / Paranormal / Supernatural Mystery",
      series: "2 (5 titles)",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioRights: "Enquire",
    },
    titles: [
      { title: "Genesis", description: "Holly begins her new existence as a rare Daywalker and takes on her first assignment in District 7, where criminals, dangerous vampires, and uneasy alliances test her abilities.", cover: "/images/Book-Cover-Front/DW-Vampire.png" },
      { title: "Confessions of a Sinner", description: "As violence weighs on her conscience, Holly questions faith, morality, forgiveness, and whether following the Order's commands can justify the lives she has taken.", cover: "/images/Book-Cover-Front/Vampire-Princess.png" },
      { title: "One Way Ticket to Hell", description: "When a ruthless vampire gang targets Holly, the danger becomes personal, drawing her into a deadly struggle of duty, vengeance, and survival.", cover: "/images/Book-Cover-Front/OneWay-Ticket.png" },
      { title: "Willy Jones: Paranormal Reporter", description: "Veteran reporter Willy Jones investigates Metro City's strangest cases, uncovering ghosts, monsters, vampires, and supernatural threats.", cover: "/images/Book-Cover-Front/Willy-Jones.png" },
      { title: "The Inquisitor", description: "Willy returns to face darker mysteries involving soul-collecting killers, restless spirits, ancient legends, and cases that pull him deeper into the supernatural.", cover: "/images/Book-Cover-Front/The-Inquisitor.png" },
    ],
  },
  {
    id: 3,
    name: "Stephanie Ray Johnson",
    genres: ["Christian Fantasy", "Adventure"],
    books: 1,
    photo: "/images/author/Stephanie ray.png",
    amazonUrl: "https://www.amazon.com/s?k=Stephanie+Ray+Johnson&i=stripbooks",
    bio: "Millard: Warrior of the King introduces a fantasy world where visible events connect to a much greater unseen conflict, combining adventure with themes of faith, courage, and purpose.",
    longBio:
      "Set within the Kingdom of Emet, Millard: Warrior of the King introduces a fantasy world where visible events connect to a much greater unseen conflict. As Millard confronts hidden truths about his identity and purpose, the story combines fantasy adventure with Christian themes of faith, courage, spiritual warfare, and discovering who you were created to become. Developed from an idea Stephanie Ray Johnson carried for more than four decades, the novel opens an expanding multi-book world.",
    rights: {
      category: "Christian Fantasy / Adventure",
      seriesPosition: "Book One",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioAdaptationRights: "Enquire",
    },
    titles: [
      { title: "Millard: Warrior of the King — Book One: Who Am I?", description: "An adventure of identity, faith, and purpose, following Millard as he confronts hidden truths about who he is and what he was created to become.", cover: "/images/Book-Cover-Front/Stephanie.png" },
    ],
  },
  {
    id: 4,
    name: "Fred Van Horn",
    genres: ["Nonfiction", "Leadership"],
    books: 3,
    photo: "/images/author/Fred-Van-Horn.png",
    amazonUrl: "https://www.amazon.com/stores/Fred-Van-Horn/author/B0H8FJFCFW",
    bio: "Across three titles, Fred Van Horn explores character, judgment, courage, and legacy — from personal reflection to accounts of everyday courage.",
    longBio:
      "Fred Van Horn's Considering Man collection explores character, judgment, courage, and legacy across three interconnected works — moving from a study of the habits behind strong character, to personal reflection, to real accounts of moral courage.",
    rights: {
      category: "Nonfiction / Character / Leadership / Personal Growth",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioRights: "Enquire",
    },
    titles: [
      { title: "The Considering Man", description: "An exploration of listening, judgment, humility, courage, responsibility, and the habits through which strong character develops.", cover: "/images/Book-Cover-Front/The-Considering-Man.png" },
      { title: "Reflections of a Considering Man", description: "Personal reflections on character, duty, leadership, gratitude, and the experiences that shape a thoughtful life.", cover: "/images/Book-Cover-Front/Reflections.png" },
      { title: "Do Not Look Away", description: "Stories of individuals whose courage and conscience compelled them to act when remaining silent would have been easier.", cover: "/images/Book-Cover-Front/Do-Not-Lookaway.png" },
    ],
  },
  {
    id: 5,
    name: "Roger Sherman",
    genres: ["Thriller", "Crime"],
    books: 1,
    photo: "/images/author/Roger-Shermon.png",
    amazonUrl: "https://www.amazon.com/No-Rules-Protocol-Jon-Clarke/dp/B0FP9QB4Z8",
    bio: "A provocative thriller exploring the dangerous line between protecting democracy and abandoning the principles that define it.",
    longBio:
      "Professor Roger De Sherburne lives between two worlds: Ivy League academia and the Brooklyn underworld. When he becomes entangled in a shadowy struggle involving terrorism, covert operations, criminal networks, and secret organizations, he enters a world where conventional law no longer applies.",
    rights: {
      category: "Geopolitical Thriller / Crime / Action",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioAdaptationRights: "Enquire",
    },
    titles: [
      { title: "The No Rules Protocol", description: "When the rules disappear, who decides what is right? A provocative thriller exploring the dangerous line between protecting democracy and abandoning the principles that define it.", cover: "/images/Book-Cover-Front/Protocol.png" },
    ],
  },
  {
    id: 6,
    name: "Sarah Jasmine Nadarajan, M.D.",
    genres: ["Children's", "Early Learning"],
    books: 1,
    photo: "/images/author/Sarah.png",
    amazonUrl: "https://www.amazon.com/Month-Time-Sarah-Jasmine-Nadarajan/dp/B0GMPTS9YF",
    bio: "Created for children ages 4–7, A Month At A Time introduces the twelve months through simple rhyme, colorful illustrations, and everyday childhood experiences.",
    longBio:
      "Created for children ages 4–7, A Month At A Time introduces the twelve months through simple rhyme, colorful illustrations, familiar seasons, celebrations, nature, and everyday childhood experiences. Its accessible concept combines early learning and shared reading, helping young children understand how the calendar year unfolds one month at a time.",
    rights: {
      category: "Children's / Early Learning",
      ageRange: "4–7",
      illustrated: "Yes",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
    },
    titles: [
      { title: "A Month At A Time", description: "Twelve months, a year of discovery — introducing children to the calendar year through simple rhyme and colorful illustration.", cover: "/images/Book-Cover-Front/Sarah.png" },
    ],
  },
  {
    id: 7,
    name: "Catherine Howard",
    genres: ["Historical Fiction"],
    books: 2,
    photo: "/images/author/Catherine Howard.png",
    amazonUrl: "https://www.amazon.com/stores/Catherine-Howard/author/B0G4582BJ5",
    bio: "Two novels, one continuing historical journey through the American Civil War and Reconstruction eras.",
    longBio:
      "Catherine Howard's two-book historical journey follows Laureen Wallace from the closing days of the Civil War through the uncertainties of Reconstruction, weaving personal survival into one of the era's real, devastating events.",
    rights: {
      category: "Historical Fiction",
      setting: "Civil War / Reconstruction-era America",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioAdaptationRights: "Enquire",
    },
    titles: [
      { title: "Muddy River Running", description: "Set around the end of the American Civil War, Laureen Wallace's journey carries her from Three Willows plantation toward the Mississippi and aboard the ill-fated Sultana, placing her personal story against one of America's devastating maritime disasters.", cover: "/images/Book-Cover-Front/Muddy-River.png" },
      { title: "Three Willows Dance", description: "Having survived catastrophe, Laureen returns to a transformed South where she must rebuild Three Willows and create a future amid the uncertainties of Reconstruction.", cover: "/images/Book-Cover-Front/Three-Willows.png" },
    ],
  },
  {
    id: 8,
    name: "Colleen A. Rickenbacher",
    genres: ["Business", "Etiquette"],
    books: 1,
    photo: "/images/author/Colleen.png",
    amazonUrl: "https://www.amazon.com/Be-Your-Best-Business-Behavior/dp/0978764218/ref=sr_1_1",
    bio: "A practical guide to navigating the social and professional situations where confidence, courtesy, and conduct matter.",
    longBio:
      "Colleen A. Rickenbacher covers workplace behavior, professional appearance, introductions, networking, technology, social media, business dining, travel, entertaining, and communication, helping readers avoid common professional faux pas and approach business situations with greater confidence.",
    rights: {
      category: "Business / Professional Development / Etiquette",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioRights: "Enquire",
    },
    titles: [
      { title: "Be On Your Best Business Behavior", description: "Professionalism never goes out of style — a practical guide to workplace behavior, networking, business dining, and communication.", cover: "/images/Book-Cover-Front/Business.png" },
    ],
  },
  {
    id: 9,
    name: "Ellen Fortgang",
    genres: ["Children's", "Activity Books"],
    books: 3,
    photo: "/images/author/ellen.png",
    amazonUrl: "https://www.amazon.com/stores/Ellen-Manville/author/B0FMM68MLV",
    bio: "Three children's activity books in the Pencil Fun Mania series, designed for early learning through pencil-based activities.",
    longBio:
      "Ellen Fortgang's Pencil Fun Mania series brings together three children's activity books designed for early learning, combining pencil-based activities with playful, accessible content for young readers.",
    rights: {
      category: "Children's / Activity Books",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
    },
    titles: [
      { title: "Pencil Fun Mania 1", description: "Part of the Pencil Fun Mania activity series for children — details available on enquiry.", cover: "/images/Book-Cover-Front/Pencil.png" },
      { title: "Pencil Fun Mania 2", description: "Part of the Pencil Fun Mania activity series for children — details available on enquiry.", cover: "/images/Book-Cover-Front/Little-Ones.png" },
      { title: "Pencil Fun Mania 3", description: "Part of the Pencil Fun Mania activity series for children — details available on enquiry.", cover: "/images/Book-Cover-Front/Fun-For-Kids.png" },
    ],
  },
  {
    id: 10,
    name: "John Fabrizio",
    genres: ["Memoir", "Family"],
    books: 1,
    photo: "/images/author/John-Fabrizio.png",
    amazonUrl: "https://www.amazon.com/John-Fabrizio/dp/1593303866",
    bio: "Before Brooklyn changed, this was home — a memoir of childhood streets, schoolyards, and family life beneath the elevated train.",
    longBio:
      "John Fabrizio grew up in the Brooklyn of the 1950s and 1960s, playing in its parks and exploring neighborhoods stretching from Greenpoint and Fort Greene to Bay Ridge. Professionally, he spent more than thirty years in management and executive positions with a global financial institution. After leaving the business world, he returned to his former prep school as a teacher and continues to mentor students. In the Shadow of the El is about the places that stay inside us long after we leave them — Fabrizio looks back at childhood with affection without stripping it of its rough edges, where mischief sits beside discipline and friendship meets rivalry.",
    rights: {
      category: "Memoir / Brooklyn / Childhood / Family / Nostalgia",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioRights: "Enquire",
    },
    titles: [
      {
        title: "In the Shadow of the El",
        description:
          "Beneath the rumble of the elevated train, a childhood unfolded on Brooklyn streets. The book brings readers into the Brooklyn of the 1950s and 1960s, where neighborhood streets, schoolyards, parks, family apartments, friendships, rivalries, and childhood adventures formed a world of their own.",
        cover: "/images/Book-Cover-Front/John Fabrizio.png",
      },
    ],
  },
  {
    id: 11,
    name: "Raven H.M. Blackmore",
    genres: ["Memoir", "Identity"],
    books: 1,
    photo: "/images/author/Raven.png",
    amazonUrl: "https://www.amazon.com/Broken-Uniquely-Special-Raven-Blackmore/dp/B0G1PVW7CG",
    bio: "A deeply personal debut memoir of being misunderstood, surviving trauma, and reclaiming identity, voice, and self-worth.",
    longBio:
      "Raven H.M. Blackmore is an emotionally honest writer whose work explores neurodiversity, healing, identity, and the realities of human experience. Through deeply personal storytelling, she gives language to experiences often lived silently, creating space for readers who have also felt unseen or misunderstood. Her debut is ultimately a story of identity, motherhood, healing, and finding the courage to belong to yourself.",
    rights: {
      category: "Memoir / Neurodiversity / Womanhood / Identity / Healing",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioRights: "Enquire",
    },
    titles: [
      {
        title: "Not Broken, uniquely special",
        description:
          "Through raw memories and poetic reflection, Raven shares her experience of growing up autistic without a diagnosis while navigating childhood trauma, masking, and the constant pressure to fit into a world that did not understand her.",
        cover: "/images/Book-Cover-Front/Raven.png",
      },
    ],
  },
  {
    id: 12,
    name: "Jonathan Smolowe",
    genres: ["Parenting", "Family"],
    books: 1,
    photo: "/images/author/Jonathan.png",
    amazonUrl: "https://www.amazon.com/YOU-DONT-OWN-THEM-Practical/dp/B0HBMQD4MJ",
    bio: "A candid, practical, and often humorous guide for parents, built on decades of real-life experience raising three children.",
    longBio:
      "Jonathan Smolowe does not present himself as a psychologist or parenting expert. He approaches the subject as a father who has spent decades raising three children, building relationships, making mistakes, learning from them, and watching other families navigate the same challenges. A Princeton University economics graduate with a long career in business, Smolowe brings a practical, conversational perspective to parenting. His children also contribute responses throughout the book, adding another generation's perspective to the lessons and experiences he shares.",
    rights: {
      category: "Parenting / Family / Relationships / Personal Growth",
      originalLanguage: "English",
      translationRights: "Enquire",
      territorialRights: "Enquire",
      audioRights: "Enquire",
    },
    titles: [
      {
        title: "You Don't Own Them",
        description:
          "A practical parenting guide for raising humans you actually like. Its central message: your children are their own people — your job is to guide them, love them, and prepare them for a life of their own.",
        cover: "/images/Book-Cover-Front/Jonathan.png",
      },
    ],
  },
];

const PAGE_SIZE = 3;

function AuthorCard({ author, onOpen, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % PAGE_SIZE) * 0.08, ease: "easeOut" }}
      className="group relative rounded-2xl border border-[#fff]/60 bg-[#FFFFFF]/30 p-6 transition-colors duration-300 hover:border-[#fff]"
    >
      <span className="flex flex-r pointer-events-none absolute left-0 top-6 h-0 w-[3px] bg-[linear-gradient(180deg,#3b6635,#2d6588)] transition-all duration-300 group-hover:h-12" />
      <div className="flex items-center justify-start gap-4">
        <img
          src={author.photo}
          alt={author.name}
          className="h-20 w-20 flex-shrink-0 rounded-full object-cover ring-1 ring-[#e4d9c8]"
        />
        <div className="min-w-0">
          <h3 className="truncate font-[Fraunces] text-lg text-[#384038]">{author.name}</h3>
          <p className="mt-0.5 text-sm text-[#384038]">{author.genres.join(", ")}</p>
        </div>
      </div>

      <p className="mt-4 text-[15px] leading-relaxed text-[#5b544c] line-clamp-3">
        {author.bio}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-[#384038] pt-4">
        <div className="text-sm text-[#8b8178]">
          <span className="font-[Fraunces] text-[#384038]">{String(author.books).padStart(2, "0")}</span>
          {" "}Books
        </div>
        <button
          onClick={() => onOpen(author)}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1e2a38] transition-colors hover:text-[#384038]"
        >
          View profile
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.div>
  );
}

function AuthorModal({ author, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e2a38]/60 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-scroll relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-[#fff]"
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbf8f3] text-[#1e2a38] ring-1 ring-[#e4d9c8] transition-colors hover:bg-[#f0e6d8]"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
          <div className="bg-[linear-gradient(145deg,#3b6635,#2d6588)] p-8">
            <img
              src={author.photo}
              alt={author.name}
              className="mx-auto h-32 w-32 rounded-full object-cover ring-4 ring-[#fbf8f3] sm:mx-0"
            />
            <h2 className="mt-5 font-[Fraunces] text-2xl text-[#fff] text-center md:text-left">{author.name}</h2>
            <p className="mt-1 text-sm text-[#fff] text-center md:text-left">{author.genres.join(", ")}</p>
            <div className="mt-4 flex items-center gap-1.5 text-sm text-[#fff]/80 justify-center md:justify-start">
              <BookOpen size={15} />
              {author.books} published titles
            </div>

            {author.amazonUrl && (
              <a
                href={author.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#a88734] bg-gradient-to-b from-[#f7dfa5] to-[#f0c14b] px-3 py-2.5 text-[14px] font-medium text-[#111] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(0,0,0,0.3)] transition-colors hover:from-[#f5d78e] hover:to-[#eeb933] focus:outline-none focus:ring-2 focus:ring-[#e77600] focus:ring-offset-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-amazon" viewBox="0 0 16 16">
                  <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a90 90 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0 6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387.176-.857.896-1.271 1.703-1.271.435 0 .929.16 1.188.55.264.39.26.91.257 1.376v.432q-.3.033-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298 1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133-.336.595-.87.961-1.465.961-.812 0-1.286-.619-1.286-1.533M.435 12.174c2.629 1.603 6.698 4.084 13.183.997.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16 3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299z"/>
                  <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204.135.176-.004.966-.233 1.533-.23.563-.572.961-.762 1.115s-.333.094-.23-.137c.105-.23.684-1.663.455-1.963-.213-.278-1.177-.177-1.625-.13l-.09.009q-.142.013-.233.024c-.193.021-.245.027-.274-.032-.074-.209.779-.556 1.347-.623"/>
                </svg>
                Buy on Amazon
                
              </a>
            )}
          </div>

          <div
            className="relative p-8"
            style={{
              backgroundImage: "url('/images/Book-Cover-Front/BG.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 " />

            <div className="relative">
              <p className="text-[15px] leading-relaxed text-[#5b544c]">{author.longBio}</p>

              <h4 className="mt-7 font-[Fraunces] text-base text-[#1e2a38]">Bibliography</h4>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {author.titles.map((t) => (
                  <div key={t.title}>
                    <img
                      src={t.cover}
                      alt={t.title}
                      className="w-full h-auto rounded-md border-0 outline-none object-contain shadow-[0_8px_20px_-6px_rgba(30,42,56,0.35)]"
                    />
                    <p className="mt-1.5 text-xs font-medium text-[#1e2a38] line-clamp-2">{t.title}</p>
                    <p className="text-xs text-[#8b8178]">{t.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AuthorsSection() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [activeAuthor, setActiveAuthor] = useState(null);

  const visibleAuthors = AUTHORS.slice(0, visibleCount);
  const hasMore = visibleCount < AUTHORS.length;

  return (
    <section className="px-6 py-10">
      <style>{`
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
 
        /* keep the scrollbar inset within the modal's rounded corners, styled white */
        .modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: #ffffff transparent;
        }
        .modal-scroll::-webkit-scrollbar {
          width: 100px;
        }
        .modal-scroll::-webkit-scrollbar-track {
          background: transparent;
          margin-block: 12px;
        }
        .modal-scroll::-webkit-scrollbar-thumb {
          background-color: #ffffff;
          border-radius: 9999px;
          border: 3px solid transparent;
          background-clip: padding-box;
        }
        .modal-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #f3ece0;
          background-clip: padding-box;
        }
      `}</style>

      <div className="mx-auto max-w-6xl">


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {visibleAuthors.map((author, i) => (
              <AuthorCard key={author.id} author={author} index={i} onOpen={setActiveAuthor} />
            ))}
          </AnimatePresence>
        </div>

        {hasMore ? (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, AUTHORS.length))}
              className="rounded-full bg-[#1e2a38] px-8 py-3 text-sm font-medium text-[#f3ece0] transition-colors hover:bg-[#2b3b4d]"
            >
              Load more authors
            </button>
          </div>
        ) : (
          <div className="mt-12 flex justify-center">
            <p className="text-sm text-[#8b8178]">You've reached the end of the list</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeAuthor && <AuthorModal author={activeAuthor} onClose={() => setActiveAuthor(null)} />}
      </AnimatePresence>
    </section>
  );
}