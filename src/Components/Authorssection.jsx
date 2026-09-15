import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, BookOpen } from "lucide-react";

/**
 * AuthorsSection
 * -------------------------------------------------------------
 * Editorial "meet the authors" grid with a load-more reveal and
 * a detailed profile modal. Drop this file into a React + Tailwind
 * + Framer Motion project. Fonts are loaded via the <style> tag
 * below (Fraunces for display, Work Sans for body/labels).
 * -------------------------------------------------------------
 */

const AUTHORS = [
  {
    id: 1,
    name: "Donald Gordon Newman",
    genres: ["Fiction"],
    books: 4,
    photo: "/images/author/Donald Gordon Newman.png",
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
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-[#fff]"
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
                      className="aspect-[3/4.2] w-full rounded-md object-cover ring-1 ring-[#e4d9c8]"
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