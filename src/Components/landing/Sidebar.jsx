import React, { useState, useEffect } from "react";

import { MailIcon, Phone, PhoneCallIcon,} from "lucide-react";
import { Link } from "react-router";

import Contactsidebar from "./Contactsidebar";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  // Close with Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Pills slide in from the left
  const pill =
    "bg-black rounded-r-full w-[300px] h-[60px] transition-transform duration-500 ease-in-out will-change-transform";
  const hiddenX = "-translate-x-[250px]"; // negative because we’re hiding left

  return (
    <div className="hidden md:flex w-screen overflow-x-hidden ">
      {/* LEFT-EDGE ANCHOR */}
      <div className="fixed inset-y-0 left-0 z-[999] pointer-events-none">
        <div className="relative h-full  pointer-events-auto">
          {/* Hover pills on the left side */}
          <div className={`mb-2 absolute bottom-65 ${pill} ${hiddenX} hover:translate-x-0`} >
            <div className="absolute right-0 w-[60px] h-[60px] rounded-r-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center ">
            <PhoneCallIcon className="text-white"/>
            </div>
            <Link to="tel:+14159186468">
            <div className="absolute left-0 w-[240px] h-[60px]  bg-white flex justify-center items-center shadow-lg ">
            
            <p className="my-text text-black text-[22px]">+1 (415) 918-6468</p>
           
            </div>
             </Link>
          </div>
          <div className={`absolute bottom-86 ${pill} ${hiddenX} hover:translate-x-0`} >
            <div className="absolute right-0 w-[60px] h-[60px] rounded-r-full bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] flex justify-center items-center ">
            <MailIcon className="text-white"/>
            </div>
           <Link to="mailto:support@glastonburypublications.com">
            <div className="absolute left-0 w-[240px] h-[60px]  bg-white flex justify-center items-center shadow-lg ">
            
            <p className="my-text text-black text-[22px]">Send Us An Email
</p>
           
            </div>
             </Link>
          </div>

          {/* Sliding panel with blue tab */}
          <div
            className={
              "absolute bottom-6 left-0 w-[350px] h-[460px] transition-transform duration-500 ease-in-out will-change-transform " +
              (open ? "translate-x-0" : "-translate-x-89")
            }
            aria-expanded={open}
          >
            {/* Panel body */}
            <div className="absolute inset-0 bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] text-white rounded-tr-2xl shadow-2xl p-6">
              <h2 className="text-2xl font-semibold mb-3">
                Chat With Us to Avail 50% Discount
              </h2>
              <Contactsidebar />
             
             
            </div>

            {/* Blue vertical tab now on the RIGHT of the panel */}
             <button
              type="button"
              onClick={() => setOpen(!open)}
              className="absolute top-1/2 -right-[56px]
                         w-[56px] h-[150px] rounded-r-3xl bg-white text-white shadow-xl
                         flex items-center justify-center "
              aria-label={open ? "Close chat panel" : "Open chat panel"}
            >
              
            </button>
            <span
            className="absolute left-50 bottom-4 w-full text-[20px] bg-[linear-gradient(270deg,#2B6781_0%,#31552F_99.09%)] bg-clip-text text-transparent rotate-90 font-semibold cursor-pointer"
            type="button"
            onClick={() => setOpen(!open)}
          >
            Get Started
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
